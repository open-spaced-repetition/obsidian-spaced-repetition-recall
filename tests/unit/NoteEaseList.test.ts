import { NoteEaseList } from "src/NoteEaseList";
import { DEFAULT_SETTINGS } from "src/settings";

test("baseEase", async () => {
    const list: NoteEaseList = new NoteEaseList(DEFAULT_SETTINGS);
    expect(list.baseEase).toEqual(250);
});

test("hasEaseForPath", async () => {
    const list: NoteEaseList = new NoteEaseList(DEFAULT_SETTINGS);
    expect(list.hasEaseForPath("Unknown path")).toEqual(false);

    list.setEaseForPath("Known path", 100);
    expect(list.hasEaseForPath("Known path")).toEqual(true);
});

test("getEaseByPath", async () => {
    const list: NoteEaseList = new NoteEaseList(DEFAULT_SETTINGS);

    list.setEaseForPath("Known path", 100);
    expect(list.getEaseByPath("Known path")).toEqual(100);
});

test("setEaseByPath", async () => {
    const list: NoteEaseList = new NoteEaseList(DEFAULT_SETTINGS);

    list.setEaseForPath("Known path", 100);
    list.setEaseForPath("Known path", 50);
    expect(list.getEaseByPath("Known path")).toEqual(75);
});
