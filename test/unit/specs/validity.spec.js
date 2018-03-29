import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded, ExamValidity } from '@/PreopRecommendation';
import { GetExams, GetAllExams, GetConditionalExams, Tag, GetExamValidity, Validity } from '@/tag';

let result;

describe('Testing GetExamValidity() with all preop examinations', () => {
  it('returns the correct validity period exams for GnS', () => {
    result = GetExamValidity(Exam.GnS);
    expect(result).toEqual(expect.stringContaining('1 month'));
  });
  it('correct validity period for GnS to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct conditional exams for ECG', () => {
    result = GetExamValidity(Exam.ECG);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for ECG to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct conditional exams for CBC', () => {
    result = GetExamValidity(Exam.CBC);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for CBC to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct conditional exams for RenPanel', () => {
    result = GetExamValidity(Exam.RenPanel);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for RenPanel to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct conditional exams for PTTINR', () => {
    result = GetExamValidity(Exam.PTTINR);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for PTTINR to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct conditional exams for LFT', () => {
    result = GetExamValidity(Exam.LFT);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for LFT to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct conditional exams for Gluc', () => {
    result = GetExamValidity(Exam.Gluc);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for Gluc to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct conditional exams for HbA1C', () => {
    result = GetExamValidity(Exam.HbA1C);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for HbA1C to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct conditional exams for CXR', () => {
    result = GetExamValidity(Exam.CXR);
    expect(result).toEqual(expect.stringContaining('6 months'));
  });
  it('correct validity period for CXR to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct conditional exams for TSH', () => {
    result = GetExamValidity(Exam.TSH);
    expect(result).toEqual(expect.stringContaining('6 months'));
  });
  it('correct validity period for TSH to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

