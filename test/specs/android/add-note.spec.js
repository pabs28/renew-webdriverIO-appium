describe('Add notes', () => {
    it('Skip tutorial', async () => {
        await ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')).click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });
});