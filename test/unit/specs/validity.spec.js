import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';
import { GetExams, GetAllExams, GetConditionalExams, Tag, GetExamValidity, ExamValidity } from '@/tag';

let result;

describe('Testing GetConditionalExams() with all conditional comorbidities', () => {
  it('returns the correct conditional exams for VHD', () => {
    result = GetExamValidity(Condition.VHD);
    expect(result.validityPeriods).toEqual('6 months');
  });
});

