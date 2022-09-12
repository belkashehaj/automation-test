

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for the BasicInfo page
 */
class BasicInfoPage extends Page {
    /**
     * get by input selector that contains the below automation-id
     */
    get inputFirstName () {
        return $('input[automation-id="first-name-answer"]');
    }

    /**
     * get by input selector that contains the below automation-id
     */
    get inputLastName () {
        return $('input[automation-id="last-name-answer"]');
    }

    /**
     * get by input selector that contains the below automation-id
     */
    get inputMobileNumber () {
        return $('input[automation-id="mobile-answer"]');
    }

    /**
     * get by input selector that contains the below automation-id
     */
    get inputZipCode () {
        return $('input[automation-id="zip-code-answer"]');
    }

    /**
     * get by id
     */
    get dropdownQualificationType () {
        return $('#select_8');
    }

    /**
     * get the element only if contains all this classes, so only if dropdown is expanded/opened
     * the class md-active is added
     */
    get dropdownQualificationTypeContainer () {
        return $('.md-select-menu-container.mainCtrl.md-active.md-clickable');
    }

    /**
     * get by selector md-optgroup that contains label Qualification Types adn also an array with selectors
     * md-option which have role=option
     */
    get optionsGroup () {
        return $('md-optgroup[label="Qualification Types"]').$$('md-option[role="option"]');
    }

    /**
     * get by selector md-checkbox that also have the below aria-label
     */
    get eveningShiftsCheckbox () {
        return $('md-checkbox[aria-label="Evening Checkbox"]');
    }


    /**
     * get by selector md-checkbox that also have the below aria-label
     */
    get weekdayShiftsCheckbox () {
        return $('md-checkbox[aria-label="Weekday Checkbox"]');
    }

    /**
     * get by selector md-radio-button that also have the below value
     */
    getSixthMonthsRadio () {
        return $('md-radio-button[value="6_Months"]');
    }

    /**
     * get by id
     */
    getContinueButton () {
        return $('#AP_Basic_Info_continue');
    }

    /**
     * get by selector md-checkbox that contains the below automation-id
     */
    getReadAgreeTermsCheckBox () {
        return $('md-checkbox[automation-id="termsAccept-answer"]');
    }

    /**
     * Method that adds firstname, lastname, mobile and zipcode in the basic info form
     */
    async fillInputForms (firstname, lastname, mobileNumber, zipCode) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputMobileNumber.setValue(mobileNumber);
        await this.inputZipCode.setValue(zipCode);
    }

    /**
     * Method that selects an option in the dropdown field
     * We make sure that the dropdown first is opened( when dropdowncontainer with the options was opened
     * a class was added md-active.md-clickable
     */
    async selectQualificationType (dropdownOption) {
        await this.dropdownQualificationType.click();
        await this.dropdownQualificationTypeContainer.waitForExist();
        await this.dropdownQualificationTypeContainer.scrollIntoView();
        const allOptions = await this.optionsGroup;

        //Used For cycle instead of forEach because of await promise<string> couldn't be used with forEach
        //check in the loop if our option is found in the array of the values, and if yes we click/select it

        for (let index = 0; index < allOptions.length; index++) {
            await allOptions[index].waitForDisplayed();
            const text = await allOptions[index].getText();

            if(text === dropdownOption) {
                await allOptions[index].click();
            }
        }
    }

    /**
     * Method that checks evening shifts and weekday shifts
     */
    async selectShiftsCheckboxes () {
        await this.eveningShiftsCheckbox.click();
        await this.weekdayShiftsCheckbox.click();
    }

    /**
     * Method that checks 6 month radiobutton
     */
    async clickSixthMonthRadioButton () {
        await this.getSixthMonthsRadio().click();
    }
}

module.exports = new BasicInfoPage();
