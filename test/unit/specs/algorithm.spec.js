import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';
import { GetExams, GetAllExams, GetConditionalExams, Tag } from '@/tag';

let requiredExams;
let conditionalExams;
let result;

/**
 * Testing PatientExamsNeeded(), GetExams(), GetAllExams(), GetConditionalExams() and Tag()
 */
describe('Testing PatientExamsNeeded() for cardiovascular diseases in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for atrial fibrillation / history of irregular heart beat', () => {
    result = PatientExamsNeeded([Condition.AtrialFib]);
    requiredExams = [Exam.GnS, Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('Atrial fibrillation pre op exams to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for defibriallator / pacemaker', () => {
    result = PatientExamsNeeded([Condition.Defib]);
    requiredExams = [Exam.GnS, Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('Defibriallator pre op exams to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for coronary artery disease', () => {
    result = PatientExamsNeeded([Condition.CAD]);
    requiredExams = [Exam.GnS, Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('Coronary Artery Disease pre op exams to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
  it('returns correct set of preop exams for history of cerebral disease', () => {
    result = PatientExamsNeeded([Condition.CerebralDisease]);
    requiredExams = [Exam.GnS, Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('History of cerebral disease pre op exams to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of pulmonary vascular disease', () => {
    result = PatientExamsNeeded([Condition.PulmonaryVascular]);
    requiredExams = [Exam.GnS, Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('History of pulmonary vascular disease pre op exams to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
  it('returns correct set of preop exams for valvular heart disease / valve replacement', () => {
    result = PatientExamsNeeded([Condition.VHD]);
    requiredExams = [Exam.GnS];
    conditionalExams = [Exam.CBC];
    expect(result.exams).toEqual(requiredExams);
  });
  it('Valvular heart disease / valve replacement pre op exams to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for heart failure', () => {
    result = PatientExamsNeeded([Condition.HeartFail]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('Heart failure pre op exams to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for peripheral vasculara disease (PVD)', () => {
    result = PatientExamsNeeded([Condition.PVD]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('Peripheral vasculara disease (PVD) pre op exams to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
});

describe('Testing PatientExamsNeeded() for pulmonary diseases in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for severe COPD, home oxygen, pulmonary HTN', () => {
    result = PatientExamsNeeded([Condition.PulmDisease]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.CXR];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for severe COPD, home oxygen, pulmonary HTN to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
});

describe('Testing PatientExamsNeeded() for other diseases in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for Age > 69 years old', () => {
    result = PatientExamsNeeded([Condition.Age]);
    requiredExams = [Exam.GnS];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Age > 69 years old to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for >= 2 risk factors', () => {
    result = PatientExamsNeeded([Condition.Risk]);
    requiredExams = [Exam.GnS, Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for >= 2 risk factors to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of anemia', () => {
    result = PatientExamsNeeded([Condition.Anemia]);
    requiredExams = [Exam.GnS, Exam.CBC];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for history of anemia to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of active bleeding', () => {
    result = PatientExamsNeeded([Condition.ActiveBleeding]);
    requiredExams = [Exam.GnS, Exam.CBC];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for history of active bleeding to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for kidney disease (on dialysis or at risk for Acute Kidney Injury [AKI])', () => {
    result = PatientExamsNeeded([Condition.KidneyDisease]);
    requiredExams = [Exam.GnS, Exam.CBC, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for kidney disease (on dialysis or at risk for Acute Kidney Injury [AKI] to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for diabetes (on Insulin or 2 oral agents)', () => {
    result = PatientExamsNeeded([Condition.Diabetes]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel, Exam.Gluc, Exam.HbA1C];
    conditionalExams = [Exam.HbA1C];
    expect(result.exams).toEqual(requiredExams);
  });
  it('set of preop exams for diabetes (on Insulin or 2 oral agents) to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for present malignancy / surgery for malignancy', () => {
    result = PatientExamsNeeded([Condition.Malignancy]);
    requiredExams = [Exam.GnS, Exam.CBC, Exam.CXR];
    conditionalExams = [Exam.ECG, Exam.RenPanel, Exam.PTTINR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual(conditionalExams);
  });
  it('set of preop exams for diabetes (on Insulin or 2 oral agents) to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for hepatic disease', () => {
    result = PatientExamsNeeded([Condition.Hepatic]);
    requiredExams = [Exam.GnS, Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.LFT];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for hepatic disease to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of adrenal disease', () => {
    result = PatientExamsNeeded([Condition.Adrenal]);
    requiredExams = [Exam.GnS, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for history of adrebal disease to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of pituitary disease', () => {
    result = PatientExamsNeeded([Condition.Pituitary]);
    requiredExams = [Exam.GnS, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for history of pituitary disease to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for history of systemic endocrine disease', () => {
    result = PatientExamsNeeded([Condition.Endocrine]);
    requiredExams = [Exam.GnS, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for history of systemic endocrine disease to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
  it('returns correct set of preop exams for thyroid disease or on thyroid supplementation', () => {
    result = PatientExamsNeeded([Condition.Thyroid]);
    requiredExams = [Exam.GnS, Exam.TSH];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for thyroid disease or on thyroid supplementation to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
});

describe('Testing PatientExamsNeeded() for medication use in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for use of Digoxin', () => {
    result = PatientExamsNeeded([Condition.Digoxin]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for use of Digoxin to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of Lithium', () => {
    result = PatientExamsNeeded([Condition.Lithium]);
    requiredExams = [Exam.GnS, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for use of Lithium to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of Diuretics', () => {
    result = PatientExamsNeeded([Condition.Diuretics]);
    requiredExams = [Exam.GnS, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for use of Diuretics to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of ACE-I', () => {
    result = PatientExamsNeeded([Condition.ACEI]);
    requiredExams = [Exam.GnS, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for use of ACE-I to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of ARB', () => {
    result = PatientExamsNeeded([Condition.ARB]);
    requiredExams = [Exam.GnS, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for use of ARB to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of NSAIDS', () => {
    result = PatientExamsNeeded([Condition.NSAIDS]);
    requiredExams = [Exam.GnS, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for use of NSAIDS to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of Anticoagulant', () => {
    result = PatientExamsNeeded([Condition.Anticoagulant]);
    requiredExams = [Exam.GnS, Exam.CBC, Exam.RenPanel];
    conditionalExams = [Exam.PTTINR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual(conditionalExams);
  });
  it('set of preop exams for use of Anticoagulant to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of Antiplatelet (ASA excluded)', () => {
    result = PatientExamsNeeded([Condition.Antiplatelet]);
    requiredExams = [Exam.GnS, Exam.CBC, Exam.RenPanel];
    conditionalExams = [Exam.PTTINR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual(conditionalExams);
  });
  it('set of preop exams for use of Antiplatelet (ASA excluded) to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for use of systemic steroid used within 6 months', () => {
    result = PatientExamsNeeded([Condition.Steroid]);
    requiredExams = [Exam.GnS, Exam.RenPanel, Exam.Gluc];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for use of systemic steroid used within 6 months to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
});

describe('Testing PatientExamsNeeded() for no inputs in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for no diseases or medication', () => {
    result = PatientExamsNeeded([]);
    requiredExams = [Exam.GnS];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });

  it('set of preop exams for no diseases or medication to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
});

describe('Testing GetExams() for all cardiovascular diseases in tag.js', () => {
  it('returns the correct array of preop exams for atrial fibrillation', () => {
    result = GetExams(Condition.AtrialFib);
    requiredExams = ['ECG'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for atrial fibrillation to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of examinations for defibrillator', () => {
    result = GetExams(Condition.Defib);
    requiredExams = ['ECG'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for difibrillator to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of examinations for coronary artery disease', () => {
    result = GetExams(Condition.CAD);
    requiredExams = ['ECG'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for coronary artery disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
  it('returns the correct array of examinations for history of cerebral disease', () => {
    result = GetExams(Condition.CerebralDisease);
    requiredExams = ['ECG'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for history of cerebral disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of examinations for history of pulmonary vascular disease', () => {
    result = GetExams(Condition.PulmonaryVascular);
    requiredExams = ['ECG'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for history of pulmonary vascular disease disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
  it('returns the correct array of examinations for valvular heart disease / valve replacement', () => {
    result = GetExams(Condition.VHD);
    requiredExams = [];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for valvular heart disease / valve replacement to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of examinations for heart failure', () => {
    result = GetExams(Condition.HeartFail);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for valvular heart failure to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of examinations for peripheral vascular disease (PVD)', () => {
    result = GetExams(Condition.PVD);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for peripheral vascular disease (PVD) to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing GetExams() for all pulmonary diseases in tag.js', () => {
  it('returns the correct array of preop exams for severe COPD, home oxygen, pulmonary HTN', () => {
    result = GetExams(Condition.PulmDisease);
    requiredExams = ['ECG', 'CBC', 'CXR'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for severe COPD, home oxygen, pulmonary HTN to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing GetExams() for all other diseases in tag.js', () => {
  it('returns the correct array of preop exams for >= 2 risk factors', () => {
    result = GetExams(Condition.Risk);
    requiredExams = ['ECG'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for >= 2 risk factors to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for bleeding disorders (hemophiliac | DVT)', () => {
    result = GetExams(Condition.Bleeding);
    requiredExams = ['CBC', 'PTT/INR'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for bleeding disorders (hemophiliac | DVT) to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for history of anemia', () => {
    result = GetExams(Condition.Anemia);
    requiredExams = ['CBC'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for history of anemia to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for history of active bleeding', () => {
    result = GetExams(Condition.ActiveBleeding);
    requiredExams = ['CBC'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for history of active bleeding to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for kidney disease (on dialysis or at risk of Acute Kidney Injury [AKI])', () => {
    result = GetExams(Condition.KidneyDisease);
    requiredExams = ['CBC', 'Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for kidney disease (on dialysis or at risk of Acute Kidney Injury [AKI]) to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for diabetes', () => {
    result = GetExams(Condition.Diabetes);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)', 'Gluc', 'HbA1C'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for diabetes to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for present malignancy / surgery for malignancy', () => {
    result = GetExams(Condition.Malignancy);
    requiredExams = ['CBC', 'CXR'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for present malignancy to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for hepatic disease', () => {
    result = GetExams(Condition.Hepatic);
    requiredExams = ['CBC', 'Renal Panel (Creat + Lytes)', 'PTT/INR', 'LFT'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for hepatic disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for history of adrenal disease', () => {
    result = GetExams(Condition.Adrenal);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for history of adrenal disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for history of pituitary disease', () => {
    result = GetExams(Condition.Pituitary);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for history of pituitary disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for history of major systemic endocrine disease', () => {
    result = GetExams(Condition.Endocrine);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for history of major systemic endocrine disease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
  it('returns the correct array of preop exams for thyroid disease or on thyroid supplementation', () => {
    result = GetExams(Condition.Thyroid);
    requiredExams = ['TSH'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for thyroid disease or on thyroid supplementation to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing GetExams() for all medication use in tag.js', () => {
  it('returns the correct array of preop exams for use of Digoxin', () => {
    result = GetExams(Condition.Digoxin);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for use of Digoxin to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of Lithium', () => {
    result = GetExams(Condition.Lithium);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for use of Lithium to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of Diuretics', () => {
    result = GetExams(Condition.Diuretics);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for use of Diuretics to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of ACE-I', () => {
    result = GetExams(Condition.ACEI);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for use of ACE-I to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of ARB', () => {
    result = GetExams(Condition.ARB);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for use of ARB to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of NSAIDS', () => {
    result = GetExams(Condition.NSAIDS);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for use of NSAIDS to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of Anticoagulants', () => {
    result = GetExams(Condition.Anticoagulant);
    requiredExams = ['CBC', 'Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for use of Anticoagulants to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of Antiplatelet (ASA excluded)', () => {
    result = GetExams(Condition.Antiplatelet);
    requiredExams = ['CBC', 'Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for use of Antiplatelet (ASA excluded) to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct array of preop exams for use of systemic steroid used within 6 months', () => {
    result = GetExams(Condition.Steroid);
    requiredExams = ['Renal Panel (Creat + Lytes)', 'Gluc'];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of pre op exams for use of use of systemic steroid used within 6 months to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing GetAllExams() in tag.js', () => {
  it('returns correct tag creation when accessing invalid name parameter', () => {
    expect(GetAllExams().exams.DaleDisease).toEqual(undefined);
  });
  it('correct tag creation when accessing invalid name parameter to match snapshot', () => {
    expect(GetAllExams().exams.DaleDisease).toMatchSnapshot();
  });
});

describe('Testing Tag() in tag.js', () => {
  it('returns correct tag creation using GetAllExams()', () => {
    result = Tag('DaleDisease', [Exam.ECG]);
    expect(GetAllExams().exams.DaleDisease).toEqual([Exam.ECG]);
  });
  it('correct tag creation when using GetAllExams() to match snapshot', () => {
    expect(GetAllExams().exams.DaleDisease).toMatchSnapshot();
  });

  it('returns correct tag creation using GetExams()', () => {
    result = Tag('DaleDisease', [Exam.ECG]);
    expect(GetExams('DaleDisease')).toEqual([Exam.ECG]);
  });
  it('correct tag creation when using GetExams() to match snapshot', () => {
    expect(GetExams('DaleDisease')).toMatchSnapshot();
  });

  it('returns correct tag creation with conditional exams using GetAllExams()', () => {
    result = Tag('JonDisease', [Exam.CBC, Exam.RenPanel],
      { 'Maybe you need more tests?': [Exam.TSH] });
    expect(GetAllExams().exams.JonDisease).toEqual([Exam.CBC, Exam.RenPanel]);
    expect(GetAllExams().conditionalExams.JonDisease[0].exams).toEqual([Exam.TSH]);
  });
  it('correct tag creation when using GetAllExams() to match snapshot', () => {
    expect(GetAllExams().exams.JonDisease).toMatchSnapshot();
    expect(GetAllExams().conditionalExams.JonDisease[0].exams).toMatchSnapshot();
  });
});

describe('Testing GetExams() and GetConditionalExams() with invalid parameters', () => {
  it('returns the correct output if given invalid preopt exam', () => {
    result = GetExams(Condition.DaleDisease);
    requiredExams = [];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for invalid condition to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct output if given invalid conditional preopt exam', () => {
    result = GetConditionalExams(Condition.JonDisease);
    requiredExams = [];
    expect(result).toEqual(requiredExams);
  });
  it('correct array of examinations for invalid condition to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing GetConditionalExams() with all conditional comorbidities', () => {
  it('returns the correct conditional exams for Malignancy', () => {
    result = GetConditionalExams(Condition.Malignancy);
    expect(result[0].exams).toEqual([Exam.ECG, Exam.RenPanel, Exam.PTTINR]);
  });
  it('correct array of conditional exams for Malignanc to match snapshot', () => {
    expect(result[0].exams).toMatchSnapshot();
  });

  it('returns the correct conditional exams for Anticoagulant', () => {
    result = GetConditionalExams(Condition.Anticoagulant);
    expect(result[0].exams).toEqual([Exam.PTTINR]);
  });
  it('correct array of conditional exams for Anticoagulant to match snapshot', () => {
    expect(result[0].exams).toMatchSnapshot();
  });

  it('returns the correct conditional exams for Antiplatelet', () => {
    result = GetConditionalExams(Condition.Anticoagulant);
    expect(result[0].exams).toEqual([Exam.PTTINR]);
  });
  it('correct array of conditional exams for Antiplatelet to match snapshot', () => {
    expect(result[0].exams).toMatchSnapshot();
  });
});
