module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://cmpt371-mac.usask.ca:8080/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.btn', 'Toggle alert')
      .click('.btn')
      .waitForElementPresent('.alert-info',1000)
      .click('.btn')
      .waitForElementNotPresent('.alert-info',1000)
      .end();
  }
};
