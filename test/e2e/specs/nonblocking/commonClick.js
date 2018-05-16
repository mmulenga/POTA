/* eslint-disable */

/**
 * Testing the common scenerios for both desktop and mobile
 */
module.exports = {
  'Common scenerio test': function (browser) {
    browser
      .url(browser.globals.devServerURL)

      // Checking for body of the website
      .waitForElementVisible('body', 1000)
      .maximizeWindow()
 
      // Checking for initial page
      .assert.visible('#modal_box')
      .assert.visible('#understanding')
      .assert.containsText('h5.modal-title', 'Disclaimer')
      
      // Checking if disclaimer hidden after clicking understand button
      .click('#understanding')
      .assert.hidden('#understanding')
      .assert.hidden('#modal_box')
      // Checking if hover glossary for all comorbidity with glossary
      .getElementSize('#pd_PulmDisease > div.row >div.col-1', function (result) {
        browser.moveToElement('#pd_PulmDisease > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'Spirometric');
       })
      .getElementSize('#other_Bleeding > div.row > div.col-1', function (result) {
        browser.moveToElement('#other_Bleeding > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'bleeding');
       })
      .getElementSize('#other_Hepatic > div.row >div.col-1', function (result) {
        browser.moveToElement('#other_Hepatic > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'Alcohol');
       })
      .getElementSize('#other_Pituitary > div.row >div.col-1', function (result) {
        browser.moveToElement('#other_Pituitary > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'Acromegaly');
       })
      .getElementSize('#other_Endocrine > div.row >div.col-1', function (result) {
        browser.moveToElement('#other_Endocrine > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'Parathyroid');
       })
      .getElementSize('#med_Diuretics > div.row >div.col-1', function (result) {
        browser.moveToElement('#med_Diuretics > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'Furosemide');
       })
      .getElementSize('#med_ACEI > div.row >div.col-1', function (result) {
        browser.moveToElement('#med_ACEI > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'Captopril');
       })
      .getElementSize('#med_ARB > div.row >div.col-1', function (result) {
        browser.moveToElement('#med_ARB > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'Valsartan');
       })
      .getElementSize('#med_Anticoagulant > div.row >div.col-1', function (result) {
        browser.moveToElement('#med_Anticoagulant > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'Warfarin');
       })
      .getElementSize('#med_Antiplatelet > div.row >div.col-1', function (result) {
        browser.moveToElement('#med_Antiplatelet > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'Clopidogrel');
       })
      .getElementSize('#med_Steroid > div.row >div.col-1', function (result) {
        browser.moveToElement('#med_Steroid > div.row > div.col-1', result.width/2, result.hight/2);
        browser.assert.containsText('pre.pt-0', 'Prednisone');
       })
      
      // Test Case 1 (Atrial Fib + Age > 69)
      // Checking if submit and reset button are visible
      .assert.visible('#submit_button')
      .assert.visible('#reset_button')
      // Checking if the conditions are unchecked
      .assert.visible('#cv_checkbox_AtrialFib:not(:checked)', 
        'Testing if element <#cv_checkbox_AtrialFib> is unchecked')
      .assert.visible('#other_checkbox_Risk:not(:checked)',
        'Testing if element <#other_checkbox_Risk> is unchecked')
      // Checking if the checkboxes are checked after clicking
      .click('#cv_checkbox_AtrialFib')
      .assert.visible('#cv_checkbox_AtrialFib:checked', 
        'Testing if element <#cv_checkbox_AtrialFib> is checked')
      .click('#other_checkbox_Risk')
      .assert.visible('#other_checkbox_Risk:checked',
        'Testing if element <#other_checkbox_Risk> is checked')
      // Checking if Patient Status is updated
      .assert.containsText('div.list', 'Atrial fibrillation')
      .assert.containsText('div.list', 'Atrial fibrillation / History of irregular heart beat')  
      // Checking if result modal is visible after clicking
      .click('#submit_button')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'Group and Screen as per local policy')
      // Checking if modal is hidden after clicking
      .click('#modal_okay')
      .assert.hidden('#modal_okay')
      .assert.hidden('#exams')
      // Checking if checkboxes are still checked
      .assert.visible('#cv_checkbox_AtrialFib:checked', 
        'Testing if element <#cv_checkbox_AtrialFib> is checked')
      .assert.visible('#other_checkbox_Risk:checked',
        'Testing if element <#other_checkbox_Risk> is checked')
      // Unchecking them and then confirming that they are unchecked
      .click('#cv_checkbox_AtrialFib')
      .assert.visible('#cv_checkbox_AtrialFib:not(:checked)', 
        'Testing if element <#cv_checkbox_AtrialFib> is unchecked')
      .click('#other_checkbox_Risk')
      .assert.visible('#other_checkbox_Risk:not(:checked)',
        'Testing if element <#other_checkbox_Risk> is unchecked')
       // Checking if PatientStatus is updated
       .assert.containsText('div.list', '')

      // Test Case 6 (Diabetes + Malignancy)
      // Checking if the conditions are unchecked
      .assert.visible('#other_checkbox_Diabetes:not(:checked)', 
        'Testing if element <#other_Diabetes> is unchecked')
      .assert.visible('#other_checkbox_Malignancy:not(:checked)', 
        'Testing if element <#other_Malignancy> is unchecked')
      // Checking if Patient Status is updated
      .click('#other_Diabetes')
      .assert.containsText('div.list', 'Diabetes')
      .click('#other_Malignancy')
      .assert.containsText('div.list', 'Present malignancy')
      // Checking if conditions are checked
      .assert.visible('#other_checkbox_Diabetes:checked', 
        'Testing if element <#other_checkbox_Diabetes> is checked')
      .assert.visible('#other_checkbox_Malignancy:checked',
        'Testing if element <#other_checkbox_Malignancy> is checked')
      // Checking results are correct
      .click('#submit_button')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'Group and Screen as per local policy')
      .assert.containsText('p:nth-of-type(2)', 'ECG should be done within 3 months of surgery')
      .assert.containsText('p:nth-of-type(3)', 'Renal Panel (Creat + Lytes) should be done within 3 months of surgery')
      .assert.containsText('p:nth-of-type(4)', 'Gluc should be done within 3 months of surgery')
      .assert.containsText('p:nth-of-type(5)', 'HbA1C should be done within 3 months of surgery')
      .assert.containsText('p:nth-of-type(6)', 'CBC should be done within 3 months of surgery')
      .assert.containsText('p:nth-of-type(7)', 'CXR')
      .assert.containsText('div[id=conditional-exams]:nth-of-type(1)', 'PTT/INR')
      // Clicking okay button on modal
      .click('#modal_okay')
      // Click Reset button and checking if the conditions are unchecked
      // and checking if Patient Status is empty
      .click('#reset_button')
      .assert.containsText('div.list', '')
      .assert.visible('#other_checkbox_Diabetes:not(:checked)', 
        'Testing if element <#other_Diabetes> is unchecked')
      .assert.visible('#other_checkbox_Malignancy:not(:checked)', 
        'Testing if element <#other_Malignancy> is unchecked')

      // Test Case 4 (Valvular Heart Disease + Heart Failure)
      // Checking if the conditons are unchecked
      .assert.visible('#cv_checkbox_VHD:not(:checked)', 
        'Testing if element <#cv_checkbox_VHD> is unchecked')
      .assert.visible('#cv_checkbox_HeartFail:not(:checked)', 
        'Testing if element <#cv_checkbox_HeartFail> is unchecked')
      // Clicking both of the conditions
      .click('#cv_VHD')
      .click('#cv_HeartFail')
      // Checking if checkbox are checked
      .assert.visible('#cv_checkbox_VHD:checked', 
        'Testing if element <#cv_checkbox_VHD> is checked')
      .assert.visible('#cv_checkbox_HeartFail:checked',
        'Testing if element <#cv_checkbox_HeartFail> is checked')
      // Checking if Patient Status are updated
      .assert.containsText('div.list', 'Peripheral Vascular disease (PVD)')
      .assert.containsText('div.list'. 'Valvular heart disease / Valve Replacement')  
      // Clicking submit button and checking results 
      .click('#submit_button')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      .assert.containsText('p:nth-of-type(2)', 'CBC')
      .assert.containsText('p:nth-of-type(3)', 'Renal Panel')
      // Clicking okay
      .click('#modal_okay')
      // Clicking reset button and checking Patient Status and 
      // conditions being unchecked
      .click('#reset_button')
      .assert.containsText('div.list', '')
      .assert.visible('#cv_checkbox_VHD:not(:checked)', 
        'Testing if element <#cv_checkbox_VHD> is unchecked')
      .assert.visible('#cv_checkbox_HeartFail:not(:checked)', 
        'Testing if element <#cv_checkbox_HeartFail> is unchecked')

      // Test Case 7 (Atrial Fib + Anticoagulant)
      // Checking if the conditions are unchecked
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
      // Checking if Patient Status is updated
      .assert.containsText('div.list', 'Atrial fibrillation')
      .assert.containsText('div.list', 'Anticoagulants')  
      // Clicking submit button and checking results
      .click('#submit_button')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      .assert.containsText('p:nth-of-type(2)', 'CBC')
      .assert.containsText('p:nth-of-type(3)', 'Renal Panel')
      .assert.containsText('#conditional-exams', 'PTT/INR')
      // Clicking okay button
      .click('#modal_okay')
      
      // Test Case 3 (Anticoagulant + Valvular Heart Disease)
      // Checking if condition are checked or unchecked
      .assert.visible('#med_checkbox_Anticoagulant:checked',
        'Testing if element <#med_checkbox_Anticoagulant> is checked')   
      .click('#med_checkbox_Anticoagulant')
      .assert.visible('#med_checkbox_Anticoagulant:not(:checked)',
        'Testing if element <#med_checkbox_Anticoagulant> is unchecked')
      .assert.visible('#cv_checkbox_VHD:not(:checked)', 
        'Testing if element <#cv_checkbox_VHD> is unchecked')
      .click('#cv_checkbox_VHD')      
      .assert.visible('#cv_checkbox_VHD:checked',
        'Testing if element <#cv_checkbox_VHD> is checked')   
      // Checking if Patient Status is updated correctly
      .assert.containsText('div.list', 'Atrial')  
      .assert.containsText('div.list', 'Valvular')  
      // Clicking submit button and checking results
      .click('#submit_button')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      .assert.containsText('#conditional-exams', 'CBC')
      // Clicking okay button 
      .click('#modal_okay')
      // Clicking the reset button and checking Patient Status
      .click('#reset_button')
      .assert.containsText('div.list', '')  
      
      // Mobile Test Case
      // Resizing window to mobile layout
      .resizeWindow(414, 736)
      .refresh()
      // Checking for initial page
      .assert.visible('#modal_box')
      .assert.visible('#understanding')
      .assert.containsText('h5.modal-title', 'Disclaimer')
      // Checking if hidden and clicking understand button
      .click('#understanding')
      .assert.hidden('#understanding')
      .assert.hidden('#modal_box')
      // Checking for the three buttons on mobile
      .assert.visible('#mobile_status_button')
      .assert.visible('#submit_button')
      .assert.visible('#reset_button')
      // Checking for cardiovascular conditions
      .assert.visible('#mobile_cv_AtrialFib')
      .assert.visible('#mobile_cv_Defib')
      .assert.visible('#mobile_cv_CAD')
      .assert.visible('#mobile_cv_CardiacStent')
      .assert.visible('#mobile_cv_CerebralDisease')
      .assert.visible('#mobile_cv_PulmonaryVascular')
      .assert.visible('#mobile_cv_TIA')
      .assert.visible('#mobile_cv_Stroke')
      .assert.visible('#mobile_cv_VHD')
      .assert.visible('#mobile_cv_HeartFail')
      .assert.visible('#mobile_cv_PVD')
      // Checking for pulmonary diseases 
      .assert.visible('#mobile_pd_PulmDisease')
      // Checking for other diseases
      .assert.visible('#mobile_other_Age')
      .assert.visible('#mobile_other_Risk')
      .assert.visible('#mobile_other_Bleeding')
      .assert.visible('#mobile_other_Anemia')
      .assert.visible('#mobile_other_ActiveBleeding')
      .assert.visible('#mobile_other_KidneyDisease')
      .assert.visible('#mobile_other_Diabetes')
      .assert.visible('#mobile_other_Malignancy')
      .assert.visible('#mobile_other_Hepatic')
      .assert.visible('#mobile_other_Adrenal')
      .assert.visible('#mobile_other_Pituitary')
      .assert.visible('#mobile_other_Endocrine')
      .assert.visible('#mobile_other_Thyroid')
      // Checking for medications
      .assert.visible('#mobile_med_Digoxin')
      .assert.visible('#mobile_med_Lithium')
      .assert.visible('#mobile_med_Diuretics')
      .assert.visible('#mobile_med_ACEI')
      .assert.visible('#mobile_med_ARB')
      .assert.visible('#mobile_med_NSAIDS')
      .assert.visible('#mobile_med_Anticoagulant')
      .assert.visible('#mobile_med_Antiplatelet')
      .assert.visible('#mobile_med_Steroid')
      
      // // Checking if glossary modal works for all glossary enables conditions
      // .moveToElement('#mobile_pd_PulmDisease > div.row > div.col-1 > span.badge.badge-pill.badge-secondary', 10, 10)
      // .mouseButtonClick()
      // .pause(10000)
      // .assert.containsText('div.modal-body', 'Spirometric',
      //   'Checking if glossary works for <#mobile_pd_PulmDisease>')
      // .click('#mobile_other_Bleeding > div.row > div.col-1')
      // .assert.containsText('div.modal-body', 'bleeding',
      //   'Checking if glossary works for <#mobile_other_Bleeding>')
      // .click('#mobile_other_Hepatic > div.row > div.col-1')
      // .assert.containsText('div.modal-body', 'Alcohol',
      //   'Checking if glossary works for <#mobile_other_Hepatic>')
      // .click('#mobile_other_Pituitary > div.row > div.col-1')
      // .assert.containsText('div.modal-body', 'Acromegaly',
      //   'Checking if glossary works for <#mobile_other_Pituitary>')
      // .click('#mobile_other_Endocrine > div.row > div.col-1')
      // .assert.containsText('div.modal-body', 'Parathyroid',
      //   'Checking if glossary works for <#mobile_other_Endocrine>')
      // .click('#mobile_med_Diuretics > div.row > div.col-1')
      // .assert.containsText('div.modal-body', 'Furosemide',
      //   'Checking if glossary works for <#mobile_med_Diuretics>')
      // .click('#mobile_med_ACEI > div.row > div.col-1')
      // .assert.containsText('div.modal-body', 'Captopril',
      //   'Checking if glossary works for <#mobile_med_ACEI>')
      // .click('#mobile_med_ARB > div.row > div.col-1')
      // .assert.containsText('div.modal-body', 'Valsartan',
      //   'Checking if glossary works for <#mobile_med_ARB>')
      // .click('#mobile_med_Anticoagulant > div.row > div.col-1')
      // .assert.containsText('div.modal-body', 'Warfarin',
      //   'Checking if glossary works for <#mobile_med_Anticoagulant>')
      // .click('#mobile_med_Antiplatelet > div.row > div.col-1')
      // .assert.containsText('div.modal-body', 'Clopidogrel',
      //   'Checking if glossary works for <#mobile_med_Antiplatelet>')
      // .click('#mobile_med_Steroid > div.row > div.col-1')
      // .assert.containsText('div.modal-body', 'Prednisone',
      //   'Checking if glossary works for <#mobile_med_Steroid>')      

      // Test Case 13 (Kidney Disease + Diabetes)
      .assert.visible('#mobile_other_checkbox_KidneyDisease:not(:checked)', 
        'Testing if element <#mobile_other_checkbox_KidneyDisease> is unchecked')
      .assert.visible('#mobile_other_checkbox_Diabetes:not(:checked)', 
        'Testing if element <#mobile_other_checkbox_Diabetes> is unchecked')
      // Clicking conditions and checking whether they are checked
      .click('#mobile_other_KidneyDisease')
      .click('#mobile_other_Diabetes')
      .assert.visible('#mobile_other_checkbox_KidneyDisease:checked', 
        'Testing if element <#mobile_other_checkbox_KidneyDisease> is checked')
      .assert.visible('#mobile_other_checkbox_Diabetes:checked',
        'Testing if element <#mobile_other_checkbox_Diabetes> is checked') 
      // Clicking on patient status and checking drawer
      .click('#mobile_status_button')
      .waitForElementVisible('#drawer-panel', 1000)
      .assert.containsText('#list', 'kidney')
      .assert.containsText('#list', 'Diabetes')
      // Hitting submit
      .click('#drawer_submit')
      // .assert.visible('#exams')
      // .assert.containsText('#exams', 'ECG')
      // .assert.containsText('p:nth-of-type(2)', 'CBC')
      // .assert.containsText('p:nth-of-type(3)', 'Renal')
      // .assert.containsText('p:nth-of-type(4)', 'Gluc')
      // .assert.containsText('#conditional-exams', 'HbA1C')
      .click('#modal_okay')
      // Reset the Patient Status and checking empty drawer
      .click('#reset_button')
      .click('#mobile_status_button')
      .waitForElementVisible('#drawer-panel', 1000)
      .assert.containsText('#list', '')      
      // Closing drawer
      .click('#drawer_submit')
      .click('#drawer_close.close')
      .closeWindow()
      .end();
  },
};
