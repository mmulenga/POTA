// import { Tag, GetExams } from '@/tag';
import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';


let conditions;
let requiredExams;


describe('Testing PatientExamsNeeded() function in PreopRecommendation.js', () => {
  it('returns correct examinations needed', () => {
    const result = PatientExamsNeeded([Condition.AtrialFib]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct examinations needed', () => {
    const result = PatientExamsNeeded(conditions);
    expect(result).toEqual(requiredExams);
  });
});
