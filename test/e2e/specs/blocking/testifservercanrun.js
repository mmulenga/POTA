/* eslint-disable */
module.exports = {
  'Demo preopt app test': function (browser) {
    console.log('test');
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('body', 1000)
      .end();
  },
};
