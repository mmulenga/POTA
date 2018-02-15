// import { Tag, GetExams } from '@/tag';
import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

const conditions = [Condition.AtrialFib];
const requiredExams = new Set();
requiredExams.add(Exam.ECG);

describe('Testing PatientExamsNeeded() function in PreopRecommendation.js', () => {
  it('returns correct examinations needed', () => {
    const result = PatientExamsNeeded(conditions);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct examinations needed', () => {
    const result = PatientExamsNeeded(conditions);
    expect(result).toEqual(requiredExams);
  });
});
