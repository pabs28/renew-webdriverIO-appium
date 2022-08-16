describe('Android Native Feature Test', () => {
    it('Access an Activity Directly', async () => {
        // access activity
        await driver.startActivity('io.appium.android.apis', '.app.AlertDialogSamples');

        // pause 3s
        await driver.pause(3000);

        // assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with dialog box ', async () => {
        // access activity
        await driver.startActivity('io.appium.android.apis', '.app.AlertDialogSamples');

        // Click on first dialog
        await $(('//*[@resource-id="io.appium.android.apis:id/two_buttons"]')).click();

        // Accept alert
        // await driver.dismissAlert();

        console.log('ALERT ---->', await driver.getAlertText());

        await $(('//*[@resource-id="android:id/button1"]')).click();

        // assertion - alert no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical scrolling', async () => {
        await ($('~App')).click();
        await ($('~Activity')).click();

        // Scroll to the end
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');

        // ScrolTextIntoView
        await $(('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')).click();

        // Assertion
        await expect($('~Secure Dialog')).toExist();
    })

    it('Horizontal Scrolling', async () => {
        await driver.startActivity("io.appium.android.apis", "view.Gallery1")

        // Horizontal Scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);
    });

    it.only('Working with a date picker', async () => {
        // access the date picker
        await driver.startActivity("io.appium.android.apis", "view.DateWidgets1")

        // get the current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        // click on change the date button
        await ($('~change the date')).click();

        // scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        // select the 10th date
        await ($('//*[@text="10"]')).click();

        // click on ok button
        await $(('//*[@resource-id="android:id/button1"]')).click();

        // pause before the assertion
        await driver.pause(3000);

        // verify the updated date
        await expect(await date.getText()).not.toEqual(currentDate);
    });
});