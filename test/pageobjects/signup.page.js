const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#register_email');
    }

    get inputPassword () {
        return $('#register_password');
    }

    get btnSubmit () {
        return $('#register_email_submit');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signup (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login?step=register');
    }
}

module.exports = new SignUpPage();
