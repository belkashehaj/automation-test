const { Given, When, Then } = require('@wdio/cucumber-framework');

const RegisterPage = require('../pageobjects/register.page');
const BasicInfoPage = require('../pageobjects/basic-info.page');
const ConfirmPhonePage = require('../pageobjects/confirm-phone.page');

Given(/^I am on the register page/, async () => {
    await RegisterPage.open();
    await expect(RegisterPage.inputEmail).toBeExisting();
});

When(/^I register with (.+) and (.+)$/, async (email, password) => {
    await RegisterPage.register(email, password)
});

Then(/^We should see the Basic Info page/, async () => {
    await expect(BasicInfoPage.inputFirstName).toBeExisting();
});

Then(/^I fill the fields (.+), (.+), (\w+) and (\w+)$/, async (firstname, lastname, mobileNumber, zipCode) => {
    await BasicInfoPage.fillInputForms(firstname, lastname, mobileNumber, zipCode)
});

Then(/^I select (.+) in the qualification dropdown$/, async (dropdownOption) => {
    await BasicInfoPage.selectQualificationType(dropdownOption);
});


Then(/^I click on the checkboxes evening, weekend shifts$/, async () => {
    await BasicInfoPage.selectShiftsCheckboxes();
    const eveningCheckboxClass = await BasicInfoPage.eveningShiftsCheckbox.getAttribute('class');
    const weekdayShiftsCheckbox = await BasicInfoPage.weekdayShiftsCheckbox.getAttribute('class');
    await expect(eveningCheckboxClass).toContain('md-checked');
    await expect(weekdayShiftsCheckbox).toContain('md-checked');
});

Then(/^I click on the 6 months radio button$/, async () => {
    await BasicInfoPage.clickSixthMonthRadioButton();
    const sixthMonthRadioClass = await BasicInfoPage.getSixthMonthsRadio().getAttribute('class');
    await expect(sixthMonthRadioClass).toContain('md-checked');
});

Then(/^the continue button can't be clicked$/, async () => {
    const continueButtonClass = await BasicInfoPage.getContinueButton().getAttribute('class');
    await expect(continueButtonClass).toContain('disabled');
});

Then(/^we click on the terms and agreement checkbox$/, async () => {
    await BasicInfoPage.getReadAgreeTermsCheckBox().click();

    const readAgreeTermsClass = await BasicInfoPage.getReadAgreeTermsCheckBox().getAttribute('class');
    await expect(readAgreeTermsClass).toContain('md-checked');
});

Then(/^we click the continue button$/, async () => {
    const continueButtonClass = await BasicInfoPage.getContinueButton().getAttribute('class');
    await expect(continueButtonClass).toContain('btn success_bttn ng-animate disabled-remove disabled-remove-active');
    await BasicInfoPage.getContinueButton().click();
});

Then(/^we should be redirected to the Confirm Phone page$/, async () => {
    await expect(ConfirmPhonePage.confirmationCodeInput).toBeExisting();
});