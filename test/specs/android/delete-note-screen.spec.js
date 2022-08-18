const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe('Delete Note', () => {
    it('Delete a note & check the note in trash can', async() => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("TV shows", "Eat Bluaga\n\Show Time\nWowoin");

        await browser.pause(3000);
        await driver.back();
       
        const note = await EditNoteScreen.firsNote.getText();
        console.log(note);
        // Click on the note
        await EditNoteScreen.firsNote.click();

        // Click on more icon
        await EditNoteScreen.moreIcon.click();

        // Click on delete item
        await EditNoteScreen.deleteIcon.click();

        // Accep alert
        await driver.acceptAlert();

        // Click on nav icon
        await EditNoteScreen.clickNavIcon.click();

        // Click on trash can item
        await EditNoteScreen.trashIcon.click();

        // Assertion
        const trashCanItem = await EditNoteScreen.firsNote;
       
        await expect(trashCanItem).toHaveText(note);
    });
});