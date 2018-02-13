/* eslint no-console: 0 func-names: 0 */

module.exports = {
  'Demo test Google': function (browser) {
    console.log('test');
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('body', 1000)
      .assert.containsText('.btn', 'Toggle alert')
      .click('.btn')
      .waitForElementPresent('.alert-info', 1000)
      .click('.btn')
      .waitForElementNotPresent('.alert-info', 1000)
      .end();
  },
};
