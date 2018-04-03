/* eslint-disable */

module.exports = {
  'Common scenerio test': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      // Checking for body
      .waitForElementVisible('body', 1000)
      .maximizeWindow()

      // Checking for initial page
      .assert.visible('#modal_box')
      .assert.visible('#understanding')
      .assert.containsText('h5.modal-title', 'Disclaimer')
      // Checking if hidden and clicking understand btn
      .click('#understanding')
      .assert.hidden('#understanding')
      .assert.hidden('#modal_box')

      // Checking if hover glossary works
      .moveToElement('#pd_PulmDisease > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Spirometric',
        'Checking if hover glossary works for <#pd_PulmDisease>')

      .moveToElement('#other_Bleeding > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'bleeding',
        'Checking if hover glossary works for <#other_Bleeding>')

      .moveToElement('#other_Hepatic > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Alcohol',
        'Checking if hover glossary works for <#other_Hepatic>')

      .moveToElement('#other_Pituitary > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Acromegaly',
        'Checking if hover glossary works for <#other_Pituitary>')

      .moveToElement('#other_Endocrine > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Parathyroid',
        'Checking if hover glossary works for <#other_Endocrine>')

      .moveToElement('#med_Diuretics > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Furosemide',
        'Checking if hover glossary works for <#med_Diuretics>')

      .moveToElement('#med_ACEI > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Captopril',
        'Checking if hover glossary works for <#med_ACEI>')

      .moveToElement('#med_ARB > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Valsartan',
        'Checking if hover glossary works for <#med_ARB>')

      .moveToElement('#med_Anticoagulant > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Warfarin',
        'Checking if hover glossary works for <#med_Anticoagulant>')

      .moveToElement('#med_Antiplatelet > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Clopidogrel',
        'Checking if hover glossary works for <#med_Antiplatelet>')

      .moveToElement('#med_Steroid > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Prednisone',
        'Checking if hover glossary works for <#med_Steroid>')

      // Test Case 1

      // Checking if submit and reset btn are visible
      .assert.visible('#modal_submit')
      .assert.visible('#reset')
      // Checking if certain checkboxes are unchecked
      .assert.visible('#cv_checkbox_AtrialFib:not(:checked)', 
        'Testing if element <#cv_checkbox_AtrialFib> is unchecked')
      .assert.visible('#other_checkbox_Age:not(:checked)',
        'Testing if element <#other_checkbox_Age> is unchecked')
      // Checking if certain checkboxes are checked after clicking
      .click('#cv_checkbox_AtrialFib')
      .assert.visible('#cv_checkbox_AtrialFib:checked', 
        'Testing if element <#cv_checkbox_AtrialFib> is checked')
      .click('#other_checkbox_Age')
      .assert.visible('#other_checkbox_Age:checked',
        'Testing if element <#other_checkbox_Age> is checked')

      // Checking if PatientStatus is updated
      .assert.containsText('div.list', 'Atrial fibrillation')
      .assert.containsText('div.list', 'Age')  
        
      // Checking if result modal is visible after clicking
      .click('#modal_submit')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      // Checking if modal is hidden after clicking
      .click('#modal_okay')
      .assert.hidden('#modal_okay')
      .assert.hidden('#exams')
      // Checking if checkboxes are still checked
      .assert.visible('#cv_checkbox_AtrialFib:checked', 
        'Testing if element <#cv_checkbox_AtrialFib> is checked')
      .assert.visible('#other_checkbox_Age:checked',
        'Testing if element <#other_checkbox_Age> is checked')
      // Unchecking them and then confirming that they are unchecked
      .click('#cv_checkbox_AtrialFib')
      .assert.visible('#cv_checkbox_AtrialFib:not(:checked)', 
        'Testing if element <#cv_checkbox_AtrialFib> is unchecked')
      .click('#other_checkbox_Age')
      .assert.visible('#other_checkbox_Age:not(:checked)',
        'Testing if element <#other_checkbox_Age> is unchecked')

       // Checking if PatientStatus is updated
       .assert.containsText('div.list', '')

      // Test Case 6
      .assert.visible('#other_checkbox_Diabetes:not(:checked)', 
        'Testing if element <#other_Diabetes> is unchecked')
      .assert.visible('#other_checkbox_Malignancy:not(:checked)', 
        'Testing if element <#other_Malignancy> is unchecked')
      // Checking if PatientStatus is updated
      .click('#other_Diabetes')
      .assert.containsText('div.list', 'Diabetes')
      .click('#other_Malignancy')
      .assert.containsText('div.list', 'Present malignancy')

      .assert.visible('#other_checkbox_Diabetes:checked', 
        'Testing if element <#other_checkbox_Diabetes> is checked')
      .assert.visible('#other_checkbox_Malignancy:checked',
        'Testing if element <#other_checkbox_Malignancy> is checked')
 
      // Checking results are correct
      .click('#modal_submit')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      .assert.containsText('p:nth-of-type(2)', 'Renal')
      .assert.containsText('p:nth-of-type(3)', 'Gluc')
      .assert.containsText('p:nth-of-type(4)', 'CBC')
      .assert.containsText('p:nth-of-type(5)', 'CXR')
      .assert.containsText('#conditional-exams', 'HbA1C')
      .assert.containsText('div[id=conditional-exams]:nth-of-type(2)', 'PTT/INR')

      .click('#modal_okay')

      // Click Reset 
      .click('#reset')
      .assert.containsText('div.list', '')
      .assert.visible('#other_checkbox_Diabetes:not(:checked)', 
        'Testing if element <#other_Diabetes> is unchecked')
      .assert.visible('#other_checkbox_Malignancy:not(:checked)', 
        'Testing if element <#other_Malignancy> is unchecked')

      // Test Case 4
      .assert.visible('#cv_checkbox_VHD:not(:checked)', 
        'Testing if element <#cv_checkbox_VHD> is unchecked')
      .assert.visible('#cv_checkbox_HeartFail:not(:checked)', 
        'Testing if element <#cv_checkbox_HeartFail> is unchecked')

      .click('#cv_VHD')
      .click('#cv_HeartFail')

      .assert.visible('#cv_checkbox_VHD:checked', 
        'Testing if element <#cv_checkbox_VHD> is checked')
      .assert.visible('#cv_checkbox_HeartFail:checked',
        'Testing if element <#cv_checkbox_HeartFail> is checked')

      .assert.containsText('div.list', 'Valvular heart disease')
      .assert.containsText('div.list', 'Heart failure')  

      .click('#modal_submit')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      .assert.containsText('p:nth-of-type(2)', 'CBC')
      .assert.containsText('p:nth-of-type(3)', 'Renal Panel')
      .click('#modal_okay')

      .click('#reset')
      .assert.containsText('div.list', '')
      .assert.visible('#cv_checkbox_VHD:not(:checked)', 
        'Testing if element <#cv_checkbox_VHD> is unchecked')
      .assert.visible('#cv_checkbox_HeartFail:not(:checked)', 
        'Testing if element <#cv_checkbox_HeartFail> is unchecked')


      // Test Case 7 
      .assert.visible('#cv_checkbox_AtrialFib:not(:checked)', 
        'Testing if element <#cv_checkbox_AtrialFib> is unchecked')
      .assert.visible('#med_checkbox_Anticoagulant:not(:checked)',
        'Testing if element <#med_checkbox_Anticoagulant> is unchecked')
      // Checking if certain checkboxes are checked after clicking
      .click('#cv_checkbox_AtrialFib')
      .assert.visible('#cv_checkbox_AtrialFib:checked', 
        'Testing if element <#cv_checkbox_AtrialFib> is checked')
      .click('#med_checkbox_Anticoagulant')
      .assert.visible('#med_checkbox_Anticoagulant:checked',
        'Testing if element <#med_checkbox_Anticoagulant> is checked')        

      .assert.containsText('div.list', 'Atrial fibrillation')
      .assert.containsText('div.list', 'Anticoagulants')  

      .click('#modal_submit')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      .assert.containsText('p:nth-of-type(2)', 'CBC')
      .assert.containsText('p:nth-of-type(3)', 'Renal Panel')
      .assert.containsText('#conditional-exams', 'PTT/INR')

      .click('#modal_okay')


      .pause(2000)


      
      .resizeWindow(414, 736)
      .refresh()
      .pause(2000)

      // Checking for initial page
      .assert.visible('#modal_box')
      .assert.visible('#understanding')
      .assert.containsText('h5.modal-title', 'Disclaimer')
      // Checking if hidden and clicking understand btn
      .click('#understanding')
      .assert.hidden('#understanding')
      .assert.hidden('#modal_box')

      // .click('#cv_checkbox_AtrialFib')

      // .pause(5000)


      // .assert.visible('#modal_submit')
      // .assert.visible('#reset')

      // .assert.visible('#cv_AtrialFib')
      // .assert.visible('#cv_Defib')
      // .assert.visible('#cv_CAD')
      // .assert.visible('#cv_CardiacStent')
      // .assert.visible('#cv_CerebralDisease')
      // .assert.visible('#cv_PulmonaryVascular')
      // .assert.visible('#cv_TIA')
      // .assert.visible('#cv_Stroke')
      // .assert.visible('#cv_VHD')
      // .assert.visible('#cv_HeartFail')
      // .assert.visible('#cv_PVD')

      // .assert.visible('#pd_PulmDisease')
      
      // .assert.visible('#other_Age')
      // .assert.visible('#other_Risk')
      // .assert.visible('#other_Bleeding')
      // .assert.visible('#other_Anemia')
      // .assert.visible('#other_ActiveBleeding')
      // .assert.visible('#other_KidneyDisease')
      // .assert.visible('#other_Diabetes')
      // .assert.visible('#other_Malignancy')
      // .assert.visible('#other_Hepatic')
      // .assert.visible('#other_Adrenal')
      // .assert.visible('#other_Pituitary')
      // .assert.visible('#other_Endocrine')
      // .assert.visible('#other_Thyroid')

      // .assert.visible('#med_Digoxin')
      // .assert.visible('#med_Lithium')
      // .assert.visible('#med_Diuretics')
      // .assert.visible('#med_ACEI')
      // .assert.visible('#med_ARB')
      // .assert.visible('#med_NSAIDS')
      // .assert.visible('#med_Anticoagulant')
      // .assert.visible('#med_Antiplatelet')
      // .assert.visible('#med_Steroid')




      .closeWindow()


      // .assert.hidden('#modal_okay', 'modal_okay was hidden')

      // .assert.visible('#modal_submit', 1000)
      // .click('#modal_submit')

      // .waitForElementVisible('#modal_okay', 1000)
      // .click('#modal_okay')

      .end();
  },
};
