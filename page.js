module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardField: '#number',
    cardCodeField: '.card-second-row #code',
    
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodButton: '.pp-text',
    addCardButton: 'div=Add card',
    linkButton: 'button=Link',
    supportiveButton: 'div=Supportive',
    closePayWindow: '.payment-picker .close-button',
    messageTheDriverButton: '#comment',
    blanketButton: 'div.switch', 
    plusIcecream: '.counter-plus',
    minusIcecream: '.counter-minus',
    orderCarButton: '.smart-button',
    
    // Modals
    phoneNumberModal: '.modal',
    carSearchModal: '.order-body',
    

    // Random
    cardSigStrip: '.plc',
    AddCardBox: '.section.active.unusual',
    blanketCheck: '.switch-input',
    icecreamValue: '.counter-value',
    driverInfo: '.order-header-title',

    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },

    selectSupportPlan: async function() {
        //clicking the Supportive Plan button
        const supportiveButton = await $(this.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();

    },

    addPaymentInfo: async function (creditCardNumber) {
        //clicking the payment method
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        //clicking add card button
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        //adding the card number
        const cardField = await $(this.cardField);
        await cardField.waitForDisplayed();
        await cardField.setValue(creditCardNumber);
        //adding the cvv
        const cardCodeField = await $(this.cardCodeField);
        await cardCodeField.waitForDisplayed();
        await cardCodeField.setValue(12);
        //clicking the card strip
        const cardSigStrip = await $(this.cardSigStrip);
        await cardSigStrip.waitForDisplayed();
        await cardSigStrip.click();
        //clicking the link button
        const linkButton = await $(this.linkButton);
        await linkButton.waitForDisplayed();
        await linkButton.click();
        //closing the payment info window
        const closePayWindow = await $(this.closePayWindow)
        await closePayWindow.waitForDisplayed();
        await closePayWindow.click();

},

    sendMessageToDriver: async function() {
        //clicking the message button
        const messageTheDriverButton = await $(this.messageTheDriverButton);
        await messageTheDriverButton.waitForDisplayed();
        await messageTheDriverButton.setValue("Hello there!");


    },

    requestBlanket: async function() {
        //clicking the blankets and hankerchiefs selector
        const blanketButton = await $(this.blanketButton);
        await blanketButton.waitForDisplayed();
        const blanketCheck = await $(this.blanketCheck);
        const initState = await blanketCheck.isSelected();
        expect (initState).toBe(false);
        await blanketButton.click();
        const finalState = await blanketCheck.isSelected();
        expect (finalState).toBe(true);
        

    },

    orderIcecream: async function() {
        //adding ice cream
        const plusIcecream = await $(this.plusIcecream);
        await plusIcecream.waitForDisplayed();
        await plusIcecream.click();
        await plusIcecream.click();


    }


    };