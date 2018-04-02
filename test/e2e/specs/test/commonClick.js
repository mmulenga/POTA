/* eslint-disable */

module.exports = {
  'Common scenerio test': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      // Checking for body
      .waitForElementVisible('body', 1000)
      // Checking for initial page
      .assert.visible('#modal_box')
      .assert.visible('#understanding')
      .assert.containsText('h5.modal-title', 'Disclaimer')

      .click('#understanding')
      .assert.hidden('#understanding')
      .assert.hidden('#modal_box')

      .assert.visible('#modal_submit')
      .assert.visible('#reset')
      
      .assert.visible('#cv_checkbox_AtrialFib:not(:checked)', 
        'Testing if element <#cv_checkbox_AtrialFib> is unchecked')
      .assert.visible('#other_checkbox_Age:not(:checked)',
        'Testing if element <#other_checkbox_Age> is unchecked')

      .click('#cv_checkbox_AtrialFib')
      .assert.visible('#cv_checkbox_AtrialFib:checked', 
        'Testing if element <#cv_checkbox_AtrialFib> is checked')
      .click('#other_checkbox_Age')
      .assert.visible('#other_checkbox_Age:checked',
        'Testing if element <#other_checkbox_Age> is checked')

      .click('#modal_submit')
      .assert.visible('#modal_okay')
      .assert.visible('#modal_close')
      
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')

      .click('#modal_okay')

      .assert.visible('#cv_checkbox_AtrialFib:checked', 
        'Testing if element <#cv_checkbox_AtrialFib> is checked')
      .assert.visible('#other_checkbox_Age:checked',
        'Testing if element <#other_checkbox_Age> is checked')
      
      .click('#cv_checkbox_AtrialFib')
      .assert.visible('#cv_checkbox_AtrialFib:not(:checked)', 
        'Testing if element <#cv_checkbox_AtrialFib> is unchecked')
      .click('#other_checkbox_Age')
      .assert.visible('#other_checkbox_Age:not(:checked)',
        'Testing if element <#other_checkbox_Age> is unchecked')


      .assert.visible('#other_checkbox_Diabetes:not(:checked)', 
        'Testing if element <#other_Diabetes> is unchecked')
      .assert.visible('#other_checkbox_Malignancy:not(:checked)', 
        'Testing if element <#other_Malignancy> is unchecked')
      
      .click('#other_Diabetes')
      .click('#other_Malignancy')

      .assert.visible('#other_checkbox_Diabetes:checked', 
        'Testing if element <#other_checkbox_Diabetes> is checked')
      .assert.visible('#other_checkbox_Malignancy:checked',
        'Testing if element <#other_checkbox_Malignancy> is checked')

      .click('#modal_submit')
      .assert.visible('#modal_okay')
      .assert.visible('#modal_close')
      
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      // .assert.containsText('#exams', 'Renal Panel')
      // .assert.containsText('#exams', 'Gluc')
      // .assert.containsText('#exams', 'CBC')
      // .assert.containsText('#exams', 'CXR')
      .assert.containsText('#conditional-exams', 'HbA1C')
      // .assert.containsText('#exams', 'PTT/INR')


      // .waitForElementPresent('#modal_submit', 1000)


      // .waitForElementPresent('#cv_AtrialFib', 500)
      // .waitForElementPresent('#cv_Defib', 500)
      // .waitForElementPresent('#cv_CAD', 500)
      // .waitForElementPresent('#cv_CardiacStent', 500)
      // .waitForElementPresent('#cv_CerebralDisease', 500)
      // .waitForElementPresent('#cv_PulmonaryVascular', 500)
      // .waitForElementPresent('#cv_TIA', 500)
      // .waitForElementPresent('#cv_Stroke', 500)
      // .waitForElementPresent('#cv_VHD', 500)
      // .waitForElementPresent('#cv_HeartFail', 500)
      // .waitForElementPresent('#cv_PVD', 500)

      // .waitForElementPresent('#pd_PulmDisease', 500)
      
      // .waitForElementPresent('#other_Age', 500)
      // .waitForElementPresent('#other_Risk', 500)
      // .waitForElementPresent('#other_Bleeding', 500)
      // .waitForElementPresent('#other_Anemia', 500)
      // .waitForElementPresent('#other_ActiveBleeding', 500)
      // .waitForElementPresent('#other_KidneyDisease', 500)
      // .waitForElementPresent('#other_Diabetes', 500)
      // .waitForElementPresent('#other_Malignancy', 500)
      // .waitForElementPresent('#other_Hepatic', 500)
      // .waitForElementPresent('#other_Adrenal', 500)
      // .waitForElementPresent('#other_Pituitary', 500)
      // .waitForElementPresent('#other_Endocrine', 500)
      // .waitForElementPresent('#other_Thyroid', 500)

      // .waitForElementPresent('#med_Digoxin', 500)
      // .waitForElementPresent('#med_Lithium', 500)
      // .waitForElementPresent('#med_Diuretics', 500)
      // .waitForElementPresent('#med_ACEI', 500)
      // .waitForElementPresent('#med_ARB', 500)
      // .waitForElementPresent('#med_NSAIDS', 500)
      // .waitForElementPresent('#med_Anticoagulant', 500)
      // .waitForElementPresent('#med_Antiplatelet', 500)
      // .waitForElementPresent('#med_Steroid', 500)



      // .assert.hidden('#modal_okay', 'modal_okay was hidden')

      // .waitForElementPresent('#modal_submit', 1000)
      // .click('#modal_submit')

      // .waitForElementVisible('#modal_okay', 1000)
      // .click('#modal_okay')

      .end();
  },
};
