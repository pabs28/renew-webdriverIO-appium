const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('Add notes', () => {
    it('Skip tutorial', async () => {
        await (AddNoteScreen.skipBtn).click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    });

    it('Add note', async () => {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.txtOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        // Add note title
        await AddNoteScreen.noteHeading.setValue('Fav Anime List');

        // Add note body
        await AddNoteScreen.noteBody.setValue('Dragon Ball\nFlame of Reca\nSlam Dunk');

        // Save the changes
        await AddNoteScreen.saveNote();

        // Assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText("Dragon Ball\nFlame of Reca\nSlam Dunk");
    });

    it('Delete a note & check the note in trash can', async() => {
        await driver.back();

        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        // Click on the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        // Click on more icon
        await $('~More').click();

        // Click on delete item
        await $('//*[@text="Delete"]').click();

        // Accep alert
        await driver.acceptAlert();

        // Click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        // Click on trash can item
        await $('//*[@text="Trash Can"]').click();

        // Assertion
        const trashCanItem = await (await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).getText();

        await expect(trashCanItem).toEqual(note);
    });
});