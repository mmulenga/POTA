import { Tag, GetExams } from '@/tag';
import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

const conditions = Condition.AtrialFib;

describe('Testing PatientExamsNeeded() function in PreopRecommendation.js', () => {
  it('returns correct sum', () => {
    const result = PatientExamsNeeded(conditions);
    const expected = 3;
    expect(result).toBe(expected);
  });
});
