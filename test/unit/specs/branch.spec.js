import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

let requiredExams;
let result;

/**
 * Testing PatientExamsNeeded() with a set of concrete test cases
 * that covers all of the branching of the function.
 * The testing flow diagram is located in the testing documentation.
 */
describe('Testing branching for PatientExamsNeeded()', () => {
  it('returns correct set of preop exams for AtrialFib', () => {
    result = PatientExamsNeeded([Condition.AtrialFib]);
    requiredExams = [Exam.GnS, Exam.ECG];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for AtrialFib to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for no conditions', () => {
    result = PatientExamsNeeded([]);
    expect(result.exams).toEqual([Exam.GnS]);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for no conditions to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for PVD', () => {
    result = PatientExamsNeeded([Condition.PVD]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for PVD to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for VHD', () => {
    result = PatientExamsNeeded([Condition.VHD]);
    requiredExams = [Exam.GnS];
    expect(result.exams).toEqual(requiredExams);
  });
  it('set of preop exams for PVD to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for VHD + HeartFail', () => {
    result = PatientExamsNeeded([Condition.VHD, Condition.HeartFail]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
  it('set of preop exams for VHD + HeartFail to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Diabetes + Malignancy', () => {
    result = PatientExamsNeeded([Condition.Diabetes, Condition.Malignancy]);
    requiredExams = [Exam.GnS, Exam.ECG, Exam.RenPanel, Exam.Gluc, Exam.HbA1C, Exam.CBC, Exam.CXR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.PTTINR]);
  });
  it('set of preop exams for Diabetes + Malignancy to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
  });
});
