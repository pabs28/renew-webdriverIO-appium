describe('Add notes', () => {
    it('Skip tutorial', async () => {
        await ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')).click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add note', async () => {
        await $(('//*[@text="Add note"]')).click();
        await $(('//*[@text="Text"]')).click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        // Add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue('Fav Anime List');

        // Add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue('Dragon Ball\nFlame of Reca\nSlam Dunk');

        // Save the changes
        await driver.back();
        await driver.back();

        // Assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Dragon Ball\nFlame of Reca\nSlam Dunk");
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