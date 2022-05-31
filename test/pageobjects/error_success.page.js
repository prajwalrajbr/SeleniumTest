


const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('error-hint create-pseudo-before create-pseudo-after');
    }
}

module.exports = new SecurePage();
