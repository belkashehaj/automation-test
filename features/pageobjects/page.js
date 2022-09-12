
module.exports = class Page {
    /**
    * Opens the main IntelyCare register page
    */
    open () {
        return browser.url(`https://portal.dev.qa.automation1.legacy.intelycare.com/apply/career.html`)
    }
}
