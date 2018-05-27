import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

let requiredExams;
let conditionalExams;
let result;

/**
 * Testing PatientExamsNeeded() with combinations of only non-conditional comorbidities,
 * only conditional comorbidities and mixes of conditional and non-conditional comordities.
 * These test cases are all in the test matrix.
 */
describe('Testing PatientExamsNeeded() with multiple non-conditional comorbidities', () => {
  it('returns correct set of preop exams for AtrialFib + Defib', () => {
    result = PatientExamsNeeded([Condition.AtrialFib, Condition.Defib]);
    requiredExams = [Exam.GnS, Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for AtrialFib + Defib to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for CAD + Bleeding', () => {
    result = PatientExamsNeeded([Condition.CAD, Condition.Bleeding]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.PTTINR];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for CAD + Bleeding to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for PVD + Anemia', () => {
    result = PatientExamsNeeded([Condition.PVD, Condition.Anemia]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for PVD + Anemia to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for CardiacStent + Adrenal', () => {
    result = PatientExamsNeeded([Condition.CardiacStent, Condition.Adrenal]);
    requiredExams = [Exam.GnS, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for CardiacStent + Adrenal to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for CardiacStent + Adrenal', () => {
    result = PatientExamsNeeded([Condition.CardiacStent, Condition.Adrenal]);
    requiredExams = [Exam.GnS, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for CardiacStent + Adrenal to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for CerebralDiseaese + Lithium', () => {
    result = PatientExamsNeeded([Condition.CerebralDisease, Condition.Lithium]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for CerebralDiseaese + Lithium to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Stroke + Digoxin', () => {
    result = PatientExamsNeeded([Condition.Stroke, Condition.Digoxin]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Stroke + Digoxin to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for HeartFail + Hepatic', () => {
    result = PatientExamsNeeded([Condition.HeartFail, Condition.Hepatic]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel, Exam.CBC, Exam.PTTINR, Exam.LFT];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for HeartFail + Hepatic to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for PulmDisease + KidneyDisease + Steroid', () => {
    result = PatientExamsNeeded([Condition.PulmDisease, Condition.KidneyDisease,
      Condition.Steroid]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.CXR, Exam.RenPanel, Exam.Gluc];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for PulmDisease + KidneyDisease + Steroid to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for PulmonaryVascular + Pituitary + Steroid', () => {
    result = PatientExamsNeeded([Condition.PulmonaryVascular,
      Condition.Pituitary, Condition.Steroid]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel, Exam.Gluc];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for PulmonaryVascular + Pituitary + Steroid to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for TIA + Hepatic + Steroid', () => {
    result = PatientExamsNeeded([Condition.TIA, Condition.Hepatic, Condition.Steroid]);
    requiredExams = [Exam.GnS, Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.LFT, Exam.Gluc];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for TIA + Hepatic + Steroid to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Bleeding + Digoxin + ACEI', () => {
    result = PatientExamsNeeded([Condition.Bleeding, Condition.Digoxin, Condition.ACEI]);
    requiredExams = [Exam.GnS, Exam.CBC, Exam.PTTINR, Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Bleeding + Digoxin + ACEI', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Risk + Bleeding + Digoxin + ACEI', () => {
    result = PatientExamsNeeded([Condition.Age, Condition.Bleeding,
      Condition.Digoxin, Condition.ACEI]);
    requiredExams = [Exam.GnS, Exam.CBC, Exam.PTTINR, Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Risk + Bleeding + Digoxin + ACEI', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Risk + Endocrine + Thyroid + NSAIDS', () => {
    result = PatientExamsNeeded([Condition.Risk, Condition.Endocrine,
      Condition.Thyroid, Condition.NSAIDS]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel, Exam.TSH];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Risk + Endocrine + Thyroid + NSAIDS', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
});

describe('Testing PatientExamsNeeded() with multiple conditional comorbidities', () => {
  it('returns correct set of preop exams for VHD + Diabetes', () => {
    result = PatientExamsNeeded([Condition.VHD, Condition.Diabetes]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel, Exam.Gluc, Exam.HbA1C];
    expect(result.exams).toEqual(requiredExams);
  });
  it('set of preop exams for VHD + Diabetes to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for VHD + Malignancy', () => {
    result = PatientExamsNeeded([Condition.VHD, Condition.Malignancy]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.CXR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.RenPanel, Exam.PTTINR]);
  });
  it('set of preop exams for VHD + Diabetes to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Diabetes + Malignancy', () => {
    result = PatientExamsNeeded([Condition.Diabetes, Condition.Malignancy]);
    requiredExams = [Exam.GnS, Exam.ECG_diabetes, Exam.RenPanel, Exam.Gluc, Exam.HbA1C, Exam.CBC, Exam.CXR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.ECG, Exam.PTTINR]);
  });
  it('set of preop exams for Diabetes + Malignancy to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Diabetes + Anticoagulant', () => {
    result = PatientExamsNeeded([Condition.Diabetes, Condition.Anticoagulant]);
    requiredExams = [Exam.GnS, Exam.ECG_diabetes, Exam.RenPanel, Exam.Gluc, Exam.HbA1C, Exam.CBC];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.PTTINR]);
  });
  it('set of preop exams for Diabetes + Anticoagulant to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for VHD + Diabetes + Antiplatelet', () => {
    result = PatientExamsNeeded([Condition.VHD, Condition.Diabetes, Condition.Antiplatelet]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel, Exam.Gluc, Exam.HbA1C, Exam.CBC];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.PTTINR]);
  });
  it('set of preop exams for VHD + Diabetes + Antiplatelet to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });
});

describe('Testing PatientExamsNeeded() with multiple random comorbidities', () => {
  it('returns correct set of preop exams for CAD + VHD + Hepatic + Thyroid', () => {
    result = PatientExamsNeeded([Condition.CAD, Condition.VHD,
      Condition.Hepatic, Condition.Thyroid]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.LFT, Exam.TSH];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for CAD + VHD + Hepatic + Thyroid to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Defib + Stroke + PulmDisease + Anemia', () => {
    result = PatientExamsNeeded([Condition.Defib, Condition.Stroke,
      Condition.PulmDisease, Condition.Anemia]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.CXR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for Defib + Stroke + PulmDisease + Anemia to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for AtrialFib + PulmonaryVascular + Bleeding + Digoxin', () => {
    result = PatientExamsNeeded([Condition.AtrialFib, Condition.PulmonaryVascular,
      Condition.Bleeding, Condition.Digoxin]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.PTTINR, Exam.RenPanel];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for AtrialFib + PulmonaryVascular + Bleeding + Digoxin to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for VHD + Malignancy + Adrenal + Endocrine', () => {
    result = PatientExamsNeeded([Condition.VHD, Condition.Malignancy,
      Condition.Adrenal, Condition.Endocrine]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.CXR, Exam.RenPanel];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.PTTINR]);
  });
  it('set of preop exams for VHD + Malignancy + Adrenal + Endocrine to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Defib + CardiacStent + Hepatic + Anticoagulants', () => {
    result = PatientExamsNeeded([Condition.Defib, Condition.CardiacStent,
      Condition.Hepatic, Condition.Anticoagulant]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.LFT];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for Defib + CardiacStent + Hepatic + Anticoagulants to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Age + Risk + Bleeding + Malignancy', () => {
    result = PatientExamsNeeded([Condition.Age, Condition.Risk,
      Condition.Bleeding, Condition.Malignancy]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.PTTINR, Exam.CXR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.RenPanel]);
  });
  it('set of preop exams for Age + Risk + Bleeding + Malignancy to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });
});
