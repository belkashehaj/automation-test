

const Page = require('./page');

/**
 * Main Register Page and it's objects
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods, get by Id
     */
    get inputEmail () {
        return $('#input_0');
    }

    get inputPassword () {
        return $('#input_1');
    }

    get btnCreateAccount () {
        return $('#AP_FirstPage_CreateAccount');
    }

    /**
     * Method that adds email and password in the register form
     */
    async register (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnCreateAccount.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new RegisterPage();
