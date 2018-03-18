import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

let requiredExams;
let conditionalExams;
let result;

describe('Testing branching for PatientExamsNeeded()', () => {
  it('returns correct set of preop exams for AtrialFib', () => {
    result = PatientExamsNeeded([Condition.AtrialFib]);
    requiredExams = [Exam.ECG];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for AtrialFib to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for no conditions', () => {
    result = PatientExamsNeeded([]);
    expect(result.exams).toEqual([]);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for no conditions to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for PVD', () => {
    result = PatientExamsNeeded([Condition.PVD]);
    requiredExams = [Exam.ECG, Exam.RenPanel];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for PVD to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for VHD', () => {
    result = PatientExamsNeeded([Condition.VHD]);
    requiredExams = [Exam.ECG];
    conditionalExams = [Exam.CBC];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual(conditionalExams);
  });
  it('set of preop exams for PVD to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for VHD + HeartFail', () => {
    result = PatientExamsNeeded([Condition.VHD, Condition.HeartFail]);
    requiredExams = [Exam.ECG, Exam.CBC, Exam.RenPanel];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for VHD + HeartFail to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
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
});
