module.exports = {
  'Demo test Google' : function (browser) {
    console.log('test');
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('body', 1000)
      .end();
  }
};
