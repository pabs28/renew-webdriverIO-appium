describe('Android Native Feature Test',() => {
    it('Access an Activity Directly', async() => {
        // access activity
        await driver.startActivity('io.appium.android.apis', '.app.AlertDialogSamples');

        // pause 3s
        await driver.pause(3000);

        // assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });
});