import { NoteParser } from "src/NoteParser";
import { TopicPath } from "src/topic-path";
import { Note } from "src/note";
import { Question } from "src/question";
import { DEFAULT_SETTINGS } from "src/settings";
import { setupStaticDateProvider20230906 } from "src/utils/dates";
import { TextDirection } from "src/utils/strings";
import { UnitTestSRFile } from "./helpers/UnitTestSRFile";

const parser: NoteParser = new NoteParser(DEFAULT_SETTINGS);

beforeAll(() => {
    setupStaticDateProvider20230906();
});

describe("Multiple questions in the text", () => {
    test("SingleLineBasic: No schedule info", async () => {
        const noteText: string = `#flashcards/test
Q1::A1
Q2::A2
Q3::A3
`;
        const file: UnitTestSRFile = new UnitTestSRFile(noteText);
        const folderTopicPath = TopicPath.emptyPath;
        const note: Note = await parser.parse(file, TextDirection.Ltr, folderTopicPath);
        const questionList = note.questionList;
        expect(questionList.length).toEqual(3);
    });
});
