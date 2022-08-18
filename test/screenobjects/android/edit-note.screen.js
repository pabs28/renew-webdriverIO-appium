const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

class EditNoteScreen {
    get firsNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreIcon() {
        return $('~More');
    }

    get deleteIcon() {
        return $('//*[@text="Delete"]');
    }

    get clickNavIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashIcon() {
        return $('//*[@text="Trash Can"]');
    }

    get trashCanItem() {
        return $('//*[@text="Trash Can"]');
    }
    
    async skipTutorial() {
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    }

    async addAndSaveNote(noteHeading, noteBody) {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.txtOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        // Add note title
        await AddNoteScreen.noteHeading.setValue(noteHeading);

        // Add note body
        await AddNoteScreen.noteBody.setValue(noteBody);

        // Save the changes
        await AddNoteScreen.saveNote();

        // Assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText(noteBody);
    }
}

module.exports = new EditNoteScreen();