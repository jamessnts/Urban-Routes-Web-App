const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {  

    it('should set the address', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    });

    it('should select Supportive Plan', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
    });

    it('should save the phone number', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    });

    it('should save the card information', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        // Saving the phone number;
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // Generate card number
        const creditCardNumber = helper.generateCardNumber();
        await page.addPaymentInfo(creditCardNumber);
    });

    it('should send the driver a message', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // Generate card number
        const creditCardNumber = helper.generateCardNumber();
        await page.addPaymentInfo(creditCardNumber);
        // Send the driver a message
        await page.sendMessageToDriver();
        
    });

    it('should request blanket and handkerchief', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // Generate card number
        const creditCardNumber = helper.generateCardNumber();
        await page.addPaymentInfo(creditCardNumber);
        // Send the driver a message
        await page.sendMessageToDriver();
        // Select blankets and hankerchief option
        const blanketButton = await $(page.blanketButton);
        await page.requestBlanket();
        //reset
        await blanketButton.click();
    });

    it('should order two ice creams', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // Generate card number
        const creditCardNumber = helper.generateCardNumber();
        await page.addPaymentInfo(creditCardNumber);
        // Send the driver a message
        await page.sendMessageToDriver();
        // Select blankets and hankerchief option
        const blanketButton = await $(page.blanketButton);
        await page.requestBlanket();
        // Ordering the ice creams
        await page.orderIcecream();
        //reset
        await blanketButton.click();
        const minusIcecream = await $(page.minusIcecream);
        await minusIcecream.click();
        await minusIcecream.click();
    });

    it('should search for cars', async () => {
        // Setting the address
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Clicking the Supportive Plan
        await page.selectSupportPlan();
        // Saving the phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        // Generate card number
        const creditCardNumber = helper.generateCardNumber();
        await page.addPaymentInfo(creditCardNumber);
        // Send the driver a message
        await page.sendMessageToDriver();
        // Select blankets and hankerchief option
        await page.requestBlanket();
        // Ordering the ice creams
        await page.orderIcecream();
        // Ordering the car
        const orderCarButton = await $(page.orderCarButton);
        await orderCarButton.waitForDisplayed();
        await orderCarButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        await browser.pause(5000);
    });

});

