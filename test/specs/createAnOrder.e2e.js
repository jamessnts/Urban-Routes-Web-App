const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {  

    it('should set the address', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Checking if the inputs are correct
        expect(await (await $(page.fromField)).getValue()).toBe('East 2nd Street, 601');
        expect(await (await $(page.toField)).getValue()).toBe('1300 1st St');
    });

    it('should select Supportive Plan', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Checking if the inputs are correct
        expect(await (await $(page.fromField)).getValue()).toBe('East 2nd Street, 601');
        expect(await (await $(page.toField)).getValue()).toBe('1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        expect(await (await $(page.supportiveButton)).isSelected());
    });

    it('should save the phone number', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Checking if the inputs are correct
        expect(await (await $(page.fromField)).getValue()).toBe('East 2nd Street, 601');
        expect(await (await $(page.toField)).getValue()).toBe('1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        expect(await (await $(page.supportiveButton)).isSelected());
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    });

    it('should save the card information', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Checking if the inputs are correct
        expect(await (await $(page.fromField)).getValue()).toBe('East 2nd Street, 601');
        expect(await (await $(page.toField)).getValue()).toBe('1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        expect(await (await $(page.supportiveButton)).isSelected());
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // Generate card number
        const creditCardNumber = helper.generateCardNumber();
        const cardValue = await $(page.cardValue);
        const cashPayment = await cardValue.getText();
        await page.addPaymentInfo(creditCardNumber);
        const cardPayment = await cardValue.getText();
        expect (cashPayment).not.toEqual(cardPayment);
    });

    it('should send the driver a message', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Checking if the inputs are correct
        expect(await (await $(page.fromField)).getValue()).toBe('East 2nd Street, 601');
        expect(await (await $(page.toField)).getValue()).toBe('1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        expect(await (await $(page.supportiveButton)).isSelected());
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // Generate card number
        const creditCardNumber = helper.generateCardNumber();
        const cardValue = await $(page.cardValue);
        const cashPayment = await cardValue.getText();
        await page.addPaymentInfo(creditCardNumber);
        const cardPayment = await cardValue.getText();
        expect (cashPayment).not.toEqual(cardPayment);
        // Send the driver a message
        await page.sendMessageToDriver();
        expect (await(await $(page.messageTheDriverButton)).getValue()).toBe('Hello there!');
    });

    it('should request blanket and handkerchief', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Checking if the inputs are correct
        expect(await (await $(page.fromField)).getValue()).toBe('East 2nd Street, 601');
        expect(await (await $(page.toField)).getValue()).toBe('1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        expect(await (await $(page.supportiveButton)).isSelected());
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // Generate card number
        const creditCardNumber = helper.generateCardNumber();
        const cardValue = await $(page.cardValue);
        const cashPayment = await cardValue.getText();
        await page.addPaymentInfo(creditCardNumber);
        const cardPayment = await cardValue.getText();
        expect (cashPayment).not.toEqual(cardPayment);
        // Send the driver a message
        await page.sendMessageToDriver();
        expect (await(await $(page.messageTheDriverButton)).getValue()).toBe('Hello there!');
        // Select blankets and handkerchief option
        const blanketButton = await $(page.blanketButton);
        await page.requestBlanket();
        const blanketCheck = await $(page.blanketCheck);
        const yesBlanket = await blanketCheck.isSelected();
        expect (yesBlanket).toBe(true);
        // Reset
        await blanketButton.click();
    });

    it('should order two ice creams', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Checking if the inputs are correct
        expect(await (await $(page.fromField)).getValue()).toBe('East 2nd Street, 601');
        expect(await (await $(page.toField)).getValue()).toBe('1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        expect(await (await $(page.supportiveButton)).isSelected());
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // Generate card number
        const creditCardNumber = helper.generateCardNumber();
        const cardValue = await $(page.cardValue);
        const cashPayment = await cardValue.getText();
        await page.addPaymentInfo(creditCardNumber);
        const cardPayment = await cardValue.getText();
        expect (cashPayment).not.toEqual(cardPayment);
        // Send the driver a message
        await page.sendMessageToDriver();
        expect (await(await $(page.messageTheDriverButton)).getValue()).toBe('Hello there!');
        // Select blankets and handkerchief option
        const blanketButton = await $(page.blanketButton);
        await page.requestBlanket();
        const blanketCheck = await $(page.blanketCheck);
        const yesBlanket = await blanketCheck.isSelected();
        expect (yesBlanket).toBe(true);
        // Ordering the ice creams
        await page.orderIcecream();
        expect (await(await $(page.icecreamValue)).getText()).toBe("2");
        // Reset
        await blanketButton.click();
        const minusIcecream = await $(page.minusIcecream);
        await minusIcecream.click();
        await minusIcecream.click();
    });

    it('should search for cars', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Checking if the inputs are correct
        expect(await (await $(page.fromField)).getValue()).toBe('East 2nd Street, 601');
        expect(await (await $(page.toField)).getValue()).toBe('1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        expect(await (await $(page.supportiveButton)).isSelected());
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // Generate card number
        const creditCardNumber = helper.generateCardNumber();
        const cardValue = await $(page.cardValue);
        const cashPayment = await cardValue.getText();
        await page.addPaymentInfo(creditCardNumber);
        const cardPayment = await cardValue.getText();
        expect (cashPayment).not.toEqual(cardPayment);
        // Send the driver a message
        await page.sendMessageToDriver();
        expect (await(await $(page.messageTheDriverButton)).getValue()).toBe('Hello there!');
        // Select blankets and handkerchief option
        await page.requestBlanket();
        const blanketCheck = await $(page.blanketCheck);
        const yesBlanket = await blanketCheck.isSelected();
        expect (yesBlanket).toBe(true);
        // Ordering the ice creams
        await page.orderIcecream();
        expect (await(await $(page.icecreamValue)).getText()).toBe("2");
        // Ordering the car
        const orderCarButton = await $(page.orderCarButton);
        await orderCarButton.waitForDisplayed();
        await orderCarButton.click();
        const carSearchModal = await $(page.carSearchModal);
        const orderCheck = await carSearchModal.isDisplayed();
        await carSearchModal.waitForDisplayed();
        expect (orderCheck).toBe(true);
        await browser.pause(5000);
    });

});
