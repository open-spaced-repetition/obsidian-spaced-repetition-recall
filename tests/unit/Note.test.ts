import { NoteParser } from "src/NoteParser";
import { TopicPath } from "src/TopicPath";
import { Deck } from "src/Deck";
import { Note } from "src/Note";
import { DEFAULT_SETTINGS } from "src/settings";
import { NoteFileLoader } from "src/NoteFileLoader";
import { TextDirection } from "src/util/TextDirection";
import { UnitTestSRFile } from "./helpers/UnitTestSRFile";

let parser: NoteParser = new NoteParser(DEFAULT_SETTINGS);
var noteFileLoader: NoteFileLoader = new NoteFileLoader(DEFAULT_SETTINGS);

describe("appendCardsToDeck", () => {
    test("Multiple questions, single card per question", async () => {
        let noteText: string = `#flashcards/test
Q1::A1
Q2::A2
Q3::A3
`;
        let file: UnitTestSRFile = new UnitTestSRFile(noteText);
        let folderTopicPath = TopicPath.emptyPath;
        let note: Note = await parser.parse(file, TextDirection.Ltr, folderTopicPath);
        let deck: Deck = Deck.emptyDeck;
        note.appendCardsToDeck(deck);
        let subdeck: Deck = deck.getDeck(new TopicPath(["flashcards", "test"]));
        expect(subdeck.newFlashcards[0].front).toEqual("Q1");
        expect(subdeck.newFlashcards[1].front).toEqual("Q2");
        expect(subdeck.newFlashcards[2].front).toEqual("Q3");
        expect(subdeck.dueFlashcards.length).toEqual(0);
    });

    test("Multiple questions, multiple cards per question", async () => {
        let noteText: string = `#flashcards/test
Q1:::A1
Q2:::A2
Q3:::A3
`;
        let file: UnitTestSRFile = new UnitTestSRFile(noteText);
        let folderTopicPath = TopicPath.emptyPath;
        let note: Note = await parser.parse(file, TextDirection.Ltr, folderTopicPath);
        let deck: Deck = Deck.emptyDeck;
        note.appendCardsToDeck(deck);
        let subdeck: Deck = deck.getDeck(new TopicPath(["flashcards", "test"]));
        expect(subdeck.newFlashcards.length).toEqual(6);
        let frontList = subdeck.newFlashcards.map((card) => card.front);

        expect(frontList).toEqual(["Q1", "A1", "Q2", "A2", "Q3", "A3"]);
        expect(subdeck.dueFlashcards.length).toEqual(0);
    });
});

describe("create Multiple Cloze", () => {
    test("Multiple cloze, some with  schedule details", async () => {
        let originalText: string = `#flashcards/test

This is a really very {{interesting}} and ==fascinating== and **great** test
<!--SR:!2023-09-02,4,270!2023-09-02,5,270-->
`;
        let settings2 = DEFAULT_SETTINGS;
        settings2.multiClozeCard = true;
        settings2.convertBoldTextToClozes = true;
        settings2.convertHighlightsToClozes = true;
        settings2.convertCurlyBracketsToClozes = true;
        settings2.clozePatterns = [
            "==[123;;]answer[;;hint]==",
            "**[123;;]answer[;;hint]**",
            "{{[123;;]answer[;;hint]}}",
        ];

        let file: UnitTestSRFile = new UnitTestSRFile(originalText);
        let folderTopicPath = TopicPath.emptyPath;
        const parser = new NoteParser(settings2);
        let note: Note = await parser.parse(file, TextDirection.Ltr, folderTopicPath);

        note.createMultiCloze(settings2);

        let deck: Deck = Deck.emptyDeck;
        note.appendCardsToDeck(deck);
        let subdeck: Deck = deck.getDeck(new TopicPath(["flashcards", "test"]));
        expect(subdeck.newFlashcards[0].front).toEqual(
            "This is a really very {{interesting}} and ==fascinating== and <span style='color:#2196f3'>[...]</span> test",
        );
        expect(subdeck.newFlashcards[0].back).toEqual(
            "This is a really very interesting and fascinating and <span style='color:#2196f3'>great</span> test",
        );

        expect(subdeck.dueFlashcards[0].front).toEqual(
            "This is a really very <span style='color:#2196f3'>[...]</span> and <span style='color:#2196f3'>[...]</span> and <span style='color:#2196f3'>[...]</span> test",
        );
        expect(subdeck.dueFlashcards[0].back).toEqual(
            "This is a really very <span style='color:#2196f3'>interesting</span> and <span style='color:#2196f3'>[...]</span> and <span style='color:#2196f3'>[...]</span> test",
        );
        expect(subdeck.dueFlashcards[1].front).toEqual(
            "This is a really very {{interesting}} and <span style='color:#2196f3'>[...]</span> and <span style='color:#2196f3'>[...]</span> test",
        );
        expect(subdeck.dueFlashcards[1].back).toEqual(
            "This is a really very interesting and <span style='color:#2196f3'>fascinating</span> and <span style='color:#2196f3'>[...]</span> test",
        );
    });
});

describe("writeNoteFile", () => {
    test("Multiple questions, some with too many schedule details", async () => {
        const originalText: string = `#flashcards/test
Q1::A1
#flashcards Q2::A2
<!--SR:!2023-09-02,4,270!2023-09-02,5,270-->
Q3:::A3
<!--SR:!2023-09-02,4,270!2023-09-02,5,270!2023-09-02,6,270!2023-09-02,7,270-->
`;
        const file: UnitTestSRFile = new UnitTestSRFile(originalText);
        const note: Note = await noteFileLoader.load(file, TextDirection.Ltr, TopicPath.emptyPath);

        await note.writeNoteFile(DEFAULT_SETTINGS);
        const updatedText: string = file.content;

        const expectedText: string = `#flashcards/test
Q1::A1
#flashcards Q2::A2
<!--SR:!2023-09-02,4,270-->
Q3:::A3
<!--SR:!2023-09-02,4,270!2023-09-02,5,270-->
`;
        expect(updatedText).toEqual(expectedText);
    });
});
