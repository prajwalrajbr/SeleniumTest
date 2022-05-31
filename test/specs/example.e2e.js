const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const SignUpPage = require('../pageobjects/signup.page');
const assert = require('assert');
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await SignUpPage.open();

        await SignUpPage.signup('fake email', 'SuperSecretPassword!');
        
        // await expect(until.elementLocated(By.css('#register-slide > form > div.mb-spacing-x-6 > div > div > p.error-hint.create-pseudo-before.create-pseudo-after'))).toBeExisting();
        await expect(SecurePage.flashAlert).toBeExisting();
        // console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
        // await assert.equal(true ,true);
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


