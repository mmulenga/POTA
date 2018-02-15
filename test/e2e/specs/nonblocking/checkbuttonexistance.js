module.exports = {
  'Demo test Google' : function (browser) {
    console.log('test');
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('body', 1000)
      .waitForElementPresent('#menu_btn', 1000)
      .waitForElementPresent('#testing_btn', 500)
      .waitForElementPresent('#help_btn', 1000)
      .waitForElementPresent('#glossary_btn', 500)
      .waitForElementPresent('#reset_btn', 500)
      .waitForElementPresent('#lowrisk_btn', 500)
      .waitForElementPresent('#medrisk_btn', 500)
      .waitForElementPresent('#highrisk_btn', 500)
      .end();
  }
};
