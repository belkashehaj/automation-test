

const Page = require('./page');

/**
 * Main Register Page and it's objects
 */
class ConfirmPhonePage extends Page {
    /**
     * define selectors using getter methods, by input tag that contains
     * automation-id = confirmation-code-answer
     */
    get confirmationCodeInput () {
        return $('input[automation-id="confirmation-code-answer"]');
    }

}

module.exports = new ConfirmPhonePage();
