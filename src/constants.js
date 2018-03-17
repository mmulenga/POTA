/**
 * This file contains all string constants for the project
 * Use this instead of hardcoding string values
 * HTML and one-time-use messages are an acceptable exception
 */

/* Conditions */
export const Condition = {
  /* Cardiovascular Diseases */
  AtrialFib: 'Atrial fibrillation / History of irregular heart beat',
  Defib: 'Defibrillator / Pacemaker',
  CAD: 'Coronary artery disease',
  CardiacStent: 'Cardiac Stent (< 12 months)',
  CerebralDisease: 'History of cerebral disease',
  PulmonaryVascular: 'History of pulmonary vascular disease',
  TIA: 'Transient Ischemic Attack (TIA)',
  Stroke: 'Stroke',
  VHD: 'Valvular heart disease / Valve Replacement',
  HeartFail: 'Heart Failure',
  PVD: 'Peripheral Vascular disease (PVD)',
  /* Pulmonary Diseases */
  PulmDisease: 'Severe COPD, Home Oxygen, Pulmonary HTN',
  // Asthma: 'ER | Hospital admission within 12m',
  // Apnea: 'Confirmed sleep apnea not using CPAP/STOP-Bang > 5',
  /* Other Diseases */
  Bleeding: 'Bleeding disorders (hemophiliac | DVT)',
  Anemia: 'History of anemia',
  ActiveBleeding: 'History of active bleeding',
  Renal: 'Renal disease (on dialysis or at risk for Acute Kidney Injury [AKI])',
  Diabetes: 'Diabetes (on Insulin or 2 oral agents)',
  Malignancy: 'Present malignancy / surgery for malignancy',
  Hepatic: 'Hepatic disease',
  Adrenal: 'History of adrenal disease',
  Pituitary: 'History of pituitary disease',
  Endocrine: 'History of major systemic endocrine disease',
  // NeuroMuscular: 'Neuromuscular disorder',
  // SpinalLesion: 'Spinal cord lesion',
  // MyastheniaGravis: 'Myasthenia Gravis',
  // Intubation: 'Difficult intubaton',
  // CAThroat: 'CA of throat',
  // NeckRad: 'Radiation of neck',
  /* Medications */
  Digoxin: 'Digoxin',
  Lithium: 'Lithium',
  Diuretics: 'Diuretics',
  ACEI: 'ACE-I',
  ARB: 'ARB',
  NSAIDS: 'NSAIDS',
  Anticoagulant: 'Anticoagulants',
  Antiplatelet: 'Antiplatelet (ASA excluded)',
  Steroid: 'Systemic steroid use within 6 months',
};

/* Medical Examinations */
export const Exam = {
  GnS: 'G&S',
  ECG: 'ECG',
  CBC: 'CBC',
  RenPanel: 'Renal Panel (Creat + Lytes)',
  PTTINR: 'PTT/INR',
  LFT: 'LFT',
  Gluc: 'Gluc',
  HbA1C: 'HbA1C',
  CXR: 'CXR',
  TSH: 'TSH',
};

/* Glossary Entries */
export const Glossary = {
  AtrialFib: 'No extra information.',
  Defib: 'No extra information.',
  CAD: 'No extra information.',
  CardiacStent: 'No extra information.',
  CerebralDisease: 'No extra information.',
  PulmonaryVascular: 'No extra information.',
  TIA: 'No extra information.',
  Stroke: 'No extra information.',
  VHD: 'No extra information.',
  HeartFail: 'No extra information.',
  PVD: 'No extra information.',
  /* Pulmonary Diseases */
  PulmDisease: '• Spirometric values AND symptomatic assessment should be sought. \n' +
               '• Post Bronchodilator FEV1: 30 - 50% of predicted; FEV1/FVC < 0.70 \n' +
               '• History of exacerbations (including prior hospitalizations) should be recorded.\n' +
               '• Worsening air flow limitation, greater SOB, reduced exercise capacity, having an ' +
               'impact on quality of life, and ability to complete activities of daily living should be present. \n',
  /* Other Diseases */
  Bleeding: '• History of extensive investigation due to a bleeding episode. \n' +
            '• History of extensive bleeding needing transfusion in previous surgeries. \n' +
            '• Bruising easily more than usual. \n',
  Anemia: 'No extra information.',
  ActiveBleeding: 'No extra information.',
  Renal: '(AKI). \n' +
         '• Chronic kidney disease (eGFR < 60ml/min/1.73m2. \n' +
         '• Diabetes. \n' +
         '• Heart failure. \n' +
         '• Age ≥ 65. \n' +
         '• Liver disease. \n' +
         '• Use of drugs with nephrotoxic potential in the perioperative period (in particular NSAIDs after surgery). \n',
  Diabetes: 'No extra information.',
  Malignancy: 'No extra information.',
  Hepatic: '• Alcohol abuse (i.e., female: 14 drinks / week; male: 21 drinks / week). \n' +
           '• Jaundice due to liver disease. \n' +
           '• All forms of hepatitis. \n' +
           '• Cirrhosis; Hepatic cancer. \n',
  Adrenal: 'No extra information.',
  Pituitary: '• Acromegaly. \n' +
             '• Cushing’s disease. \n' +
             '• Sheehan syndrome. \n' +
             '• Growth hormone deficiency. \n' +
             '• Hyper/hypo pituitarism. \n',
  Endocrine: '(Excluding Diabeties) \n' +
             '• Parathyroid disease \n' +
             '• Addison’s disease \n' +
             '• Cushing’s syndrome \n' +
             '• Graves’ disease \n',
  /* Medications */
  Digoxin: 'No extra information.',
  Lithium: 'No extra information.',
  Diuretics: 'No extra information.',
  ACEI: 'No extra information.',
  ARB: 'No extra information.',
  NSAIDS: 'No extra information.',
  Anticoagulant: 'No extra information.',
  Antiplatelet: 'No extra information.',
  Steroid: 'No extra information.',
};
