import { Exam } from '@/constants';
import { ExamValidity } from '@/PreopRecommendation';
import { GetExamValidity, Validity } from '@/tag';

let result;

/**
 * Testing the validity of the exams. Ensuring the both
 * GetExamValidity() and ExamValidity() contain the correct
 * validity periods for each preoperative examination.
 * Called Validity() and tested if it properly creates tag.
 */
describe('Testing GetExamValidity() with all preop examinations', () => {
  it('returns the correct validity period for GnS', () => {
    result = GetExamValidity(Exam.GnS);
    expect(result).toEqual(expect.stringContaining('1 month'));
  });
  it('correct validity period for GnS to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for ECG', () => {
    result = GetExamValidity(Exam.ECG);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for ECG to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for CBC', () => {
    result = GetExamValidity(Exam.CBC);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for CBC to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for RenPanel', () => {
    result = GetExamValidity(Exam.RenPanel);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for RenPanel to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for PTTINR', () => {
    result = GetExamValidity(Exam.PTTINR);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for PTTINR to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for LFT', () => {
    result = GetExamValidity(Exam.LFT);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for LFT to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for Gluc', () => {
    result = GetExamValidity(Exam.Gluc);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for Gluc to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for HbA1C', () => {
    result = GetExamValidity(Exam.HbA1C);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for HbA1C to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for CXR', () => {
    result = GetExamValidity(Exam.CXR);
    expect(result).toEqual(expect.stringContaining('6 months'));
  });
  it('correct validity period for CXR to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for TSH', () => {
    result = GetExamValidity(Exam.TSH);
    expect(result).toEqual(expect.stringContaining('6 months'));
  });
  it('correct validity period for TSH to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing ExamValidity() with all preop examinations', () => {
  it('returns the correct validity period for  GnS', () => {
    result = ExamValidity(Exam.GnS);
    expect(result).toEqual(expect.stringContaining('1 month'));
  });
  it('correct validity period for GnS to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for ECG', () => {
    result = ExamValidity(Exam.ECG);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for ECG to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for CBC', () => {
    result = ExamValidity(Exam.CBC);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for CBC to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for RenPanel', () => {
    result = ExamValidity(Exam.RenPanel);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for RenPanel to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for PTTINR', () => {
    result = ExamValidity(Exam.PTTINR);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for PTTINR to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for LFT', () => {
    result = ExamValidity(Exam.LFT);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for LFT to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for Gluc', () => {
    result = ExamValidity(Exam.Gluc);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for Gluc to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for HbA1C', () => {
    result = ExamValidity(Exam.HbA1C);
    expect(result).toEqual(expect.stringContaining('3 months'));
  });
  it('correct validity period for HbA1C to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for CXR', () => {
    result = ExamValidity(Exam.CXR);
    expect(result).toEqual(expect.stringContaining('6 months'));
  });
  it('correct validity period for CXR to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for TSH', () => {
    result = ExamValidity(Exam.TSH);
    expect(result).toEqual(expect.stringContaining('6 months'));
  });
  it('correct validity period for TSH to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing Validity() with fake DaleDisease', () => {
  // Made up a validity for testing
  Validity(Exam.DaleDisease, 'should be done within 99 months of surgery');
  it('returns the correct validity period for DaleDisease using ExamValidity()', () => {
    result = ExamValidity(Exam.DaleDisease);
    expect(result).toEqual(expect.stringContaining('99 months'));
  });
  it('correct validity period for DaleDisease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('returns the correct validity period for DaleDisease using GetExamValidity() ', () => {
    result = GetExamValidity(Exam.DaleDisease);
    expect(result).toEqual(expect.stringContaining('99 months'));
  });
  it('correct validity period for DaleDisease to match snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});
