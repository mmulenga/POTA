import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

let requiredExams;
let conditionalExams;
let result;

describe('Testing PatientExamsNeeded() with multiple non-conditional comorbidities', () => {
  it('returns correct set of preop exams for AtrialFib + Defib', () => {
    result = PatientExamsNeeded([Condition.AtrialFib, Condition.Defib]);
    requiredExams = [Exam.ECG];
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
    requiredExams = [Exam.ECG, Exam.GnS, Exam.CBC, Exam.PTTINR];
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
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.CBC];
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
    requiredExams = [Exam.ECG, Exam.RenPanel];
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
    requiredExams = [Exam.ECG, Exam.RenPanel];
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
    requiredExams = [Exam.ECG, Exam.RenPanel];
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
    requiredExams = [Exam.ECG, Exam.RenPanel];
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
    requiredExams = [Exam.ECG, Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.LFT];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for HeartFail + Hepatic to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for PulmDisease + Renal + Steroid', () => {
    result = PatientExamsNeeded([Condition.PulmDisease, Condition.Renal, Condition.Steroid]);
    requiredExams = [Exam.ECG, Exam.CBC, Exam.CXR, Exam.RenPanel, Exam.Gluc];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for PulmDisease + Renal + Steroid to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for PulmonaryVascular + Pituitary + Steroid', () => {
    result = PatientExamsNeeded([Condition.PulmonaryVascular,
      Condition.Pituitary, Condition.Steroid]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.Gluc];
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
    requiredExams = [Exam.ECG, Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.LFT, Exam.Gluc];
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

  it('returns correct set of preop exams for Endocrine + Thyroid + NSAIDS', () => {
    result = PatientExamsNeeded([Condition.Endocrine, Condition.Thyroid, Condition.NSAIDS]);
    requiredExams = [Exam.RenPanel, Exam.TSH];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Endocrine + Thyroid + NSAIDS', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
});

describe('Testing PatientExamsNeeded() with multiple conditional comorbidities', () => {
  it('returns correct set of preop exams for VHD + Diabetes', () => {
    result = PatientExamsNeeded([Condition.VHD, Condition.Diabetes]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.Gluc];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.CBC]);
    expect(result.conditionalExams[1].exams).toEqual([Exam.HbA1C]);
  });
  it('set of preop exams for VHD + Diabetes to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
    expect(result.conditionalExams[1].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for VHD + Malignancy', () => {
    result = PatientExamsNeeded([Condition.VHD, Condition.Malignancy]);
    requiredExams = [Exam.ECG, Exam.CBC, Exam.CXR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.RenPanel, Exam.PTTINR]);
  });
  it('set of preop exams for VHD + Diabetes to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Diabetes + Malignancy', () => {
    result = PatientExamsNeeded([Condition.Diabetes, Condition.Malignancy]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.Gluc, Exam.CBC, Exam.CXR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.HbA1C]);
    expect(result.conditionalExams[1].exams).toEqual([Exam.PTTINR]);
  });
  it('set of preop exams for Diabetes + Malignancy to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
    expect(result.conditionalExams[1].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Diabetes + Anticoagulant', () => {
    result = PatientExamsNeeded([Condition.Diabetes, Condition.Anticoagulant]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.Gluc, Exam.CBC];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.HbA1C]);
    expect(result.conditionalExams[1].exams).toEqual([Exam.PTTINR]);
  });
  it('set of preop exams for Diabetes + Anticoagulant to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
    expect(result.conditionalExams[1].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for VHD + Diabetes + Antiplatelet', () => {
    result = PatientExamsNeeded([Condition.VHD, Condition.Diabetes, Condition.Antiplatelet]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.Gluc, Exam.CBC];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.HbA1C]);
    expect(result.conditionalExams[1].exams).toEqual([Exam.PTTINR]);
  });
  it('set of preop exams for VHD + Diabetes + Antiplatelet to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
    expect(result.conditionalExams[1].exams).toMatchSnapshot();
  });
});

describe('Testing PatientExamsNeeded() with multiple random comorbidities', () => {
  it('returns correct set of preop exams for CAD + VHD + Hepatic + Thyroid', () => {
    result = PatientExamsNeeded([Condition.CAD, Condition.VHD,
      Condition.Hepatic, Condition.Thyroid]);
    requiredExams = [Exam.ECG, Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.LFT, Exam.TSH];
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
    requiredExams = [Exam.ECG, Exam.CBC, Exam.CXR];
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
    requiredExams = [Exam.ECG, Exam.GnS, Exam.CBC, Exam.PTTINR, Exam.RenPanel];
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
    requiredExams = [Exam.ECG, Exam.CBC, Exam.CXR, Exam.RenPanel];
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
    requiredExams = [Exam.ECG, Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.LFT];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for Defib + CardiacStent + Hepatic + Anticoagulants to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
});
