import { Exam, Condition } from '@/constants';
import { ExamSummary } from '@/PreopRecommendation';
import { ConditionalExam, GetConditionalExams } from '@/tag';

const mockGetExams = jest
  .fn()
  // Last test
  .mockReturnValue([])
  // Test 1
  .mockReturnValueOnce(['G&S', 'ECG', 'CBC', 'Renal Panel (Creat + Lytes)', 'PTT/INR', 'LFT', 'Gluc', 'HbA1C', 'CXR'])
  // Test 2
  .mockReturnValueOnce(['G&S', 'CBC', 'PTT/INR'])
  .mockReturnValueOnce(['Gluc', 'CXR'])
  // Test 3
  .mockReturnValueOnce(['Renal Panel (Creat + Lytes)'])
  .mockReturnValueOnce(['LFT', 'HbA1C'])
  .mockReturnValueOnce(['G&S', 'CXR'])
  // Test 4
  .mockReturnValueOnce(['CBC', 'Gluc', 'HbA1C'])
  .mockReturnValueOnce(['CXR', 'ECG', 'LFT'])
  .mockReturnValueOnce(['PTT/INR', 'CBC'])
  .mockReturnValueOnce(['Renal Panel (Creat + Lytes)'])
  // Test 5
  .mockReturnValueOnce(['CBC', 'Gluc'])
  .mockReturnValueOnce(['ECG', 'Gluc', 'CBC'])
  .mockReturnValueOnce(['CXR'])
  .mockReturnValueOnce(['ECG'])
  .mockReturnValueOnce(['CBC', 'ECG', 'G&S']);

const mockGetConditionalExams = jest
  .fn()
  // Last test
  .mockReturnValue([])
  // Test 1
  .mockReturnValueOnce(GetConditionalExams(Condition.VHD))
  // Test 2
  .mockReturnValueOnce(GetConditionalExams(Condition.Diabetes))
  .mockReturnValueOnce(GetConditionalExams(Condition.Malignancy))
  // Test 3
  .mockReturnValueOnce(GetConditionalExams(Condition.VHD))
  .mockReturnValueOnce(GetConditionalExams(Condition.Malignancy))
  .mockReturnValueOnce(GetConditionalExams(Condition.Diabetes))
  // Test 4
  .mockReturnValueOnce(GetConditionalExams(Condition.Malignancy))
  .mockReturnValueOnce(GetConditionalExams(Condition.Diabetes))
  .mockReturnValueOnce(GetConditionalExams(Condition.VHD))
  .mockReturnValueOnce(GetConditionalExams(Condition.Anticoagulant))
  // Test 5
  .mockReturnValueOnce(GetConditionalExams(Condition.Antiplatelet))
  .mockReturnValueOnce(GetConditionalExams(Condition.VHD))
  .mockReturnValueOnce(GetConditionalExams(Condition.Diabetes))
  .mockReturnValueOnce(GetConditionalExams(Condition.Malignancy))
  .mockReturnValueOnce(GetConditionalExams(Condition.Anticoagulant));


function PatientExamsNeeded(patientConditions) {
  const examAggregation = new Set();
  const conditionalExamAggregation = [];
  for (let i = 0; i < patientConditions.length; i += 1) {
    const exams = mockGetExams();
    for (let j = 0; j < exams.length; j += 1) {
      examAggregation.add(exams[j]);
    }
  }
  for (let i = 0; i < patientConditions.length; i += 1) {
    const conditionalExams = mockGetConditionalExams();
    for (let j = 0; j < conditionalExams.length; j += 1) {
      // Make a new copy of the ConditionalExam with any preconsidered exams filtered out
      const ce = new ConditionalExam(
        conditionalExams[j].conditionPhrase,
        conditionalExams[j].exams.filter(e => !(examAggregation.has(e))),
      );
      // Only aggregate this conditionalExam if it is not entirely preconsidered
      if (ce.exams.length > 0) {
        conditionalExamAggregation.push(ce);
      }
    }
  }
  return new ExamSummary([...examAggregation], conditionalExamAggregation);
}

let result;

describe('Testing mock function for GetExams() and GetConditionalExams() for PatientExamsNeeded()', () => {
  it('returns correct array of list of exams for test 1 of mockGetExams() and mockGetConditionalExams()', () => {
    const requiredExams = [Exam.GnS, Exam.ECG, Exam.CBC, Exam.RenPanel, Exam.PTTINR,
      Exam.LFT, Exam.Gluc, Exam.HbA1C, Exam.CXR];
    result = PatientExamsNeeded(['']);
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });

  it('returns correct array of list of exams for test 2 of mockGetExams() and mockGetConditionalExams()', () => {
    const requiredExams = [Exam.GnS, Exam.CBC, Exam.PTTINR, Exam.Gluc, Exam.CXR];
    result = PatientExamsNeeded(['', '']);
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.HbA1C]);
    expect(result.conditionalExams[1].exams).toEqual([Exam.ECG, Exam.RenPanel]);
  });

  it('returns correct array of list of exams for test 3 of mockGetExams() and mockGetConditionalExams()', () => {
    const requiredExams = [Exam.RenPanel, Exam.LFT, Exam.HbA1C, Exam.GnS, Exam.CXR];
    result = PatientExamsNeeded(['', '', '']);
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.CBC]);
    expect(result.conditionalExams[1].exams).toEqual([Exam.ECG, Exam.PTTINR]);
  });

  it('returns correct array of list of exams for test 4 of mockGetExams() and mockGetConditionalExams()', () => {
    const requiredExams = [Exam.CBC, Exam.Gluc, Exam.HbA1C, Exam.CXR, Exam.ECG,
      Exam.LFT, Exam.PTTINR, Exam.RenPanel];
    result = PatientExamsNeeded(['', '', '', '']);
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });

  it('returns correct array of list of exams for test 5 of mockGetExams() and mockGetConditionalExams()', () => {
    const requiredExams = [Exam.CBC, Exam.Gluc, Exam.ECG, Exam.CXR, Exam.GnS];
    result = PatientExamsNeeded(['', '', '', '', '']);
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual([Exam.PTTINR]);
    expect(result.conditionalExams[1].exams).toEqual([Exam.HbA1C]);
    expect(result.conditionalExams[2].exams).toEqual([Exam.RenPanel, Exam.PTTINR]);
  });

  it('returns correct array of list of exams for test 6 of mockGetExams() and mockGetConditionalExams()', () => {
    const requiredExams = [];
    result = PatientExamsNeeded('');
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual([]);
  });
});
