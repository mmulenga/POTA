import { Tag, Validity } from '@/tag';
import { Condition, Exam } from '@/constants';

/** Tag definitions
 * These definitions are of the format: Tag(condition, [exams])
 * A third, optional argument may be passed to include any conditional exams
 * The format for this third argument is: { 'ConditionPhrase?': [Exams if True] }
 * Define all tags here and they will be loaded into the system on import
 *
 * Format:
 * Tag(Condition.NAME, [Exam.NAME],
  { 'Is this requirement met?': [Exam.NAME] });
 */

/* Cardiovascular Diseases */
Tag(Condition.AtrialFib, [Exam.ECG]);
Tag(Condition.Defib, [Exam.ECG]);
Tag(Condition.CAD, [Exam.ECG]);
Tag(Condition.CardiacStent, [Exam.ECG]);
Tag(Condition.CerebralDisease, [Exam.ECG]);
Tag(Condition.PulmonaryVascular, [Exam.ECG]);
Tag(Condition.TIA, [Exam.ECG]);
Tag(Condition.Stroke, [Exam.ECG]);
Tag(Condition.VHD, [Exam.ECG],
  { 'Is valve mechanical?': [Exam.CBC] });
Tag(Condition.HeartFail, [Exam.ECG, Exam.CBC, Exam.RenPanel]);
Tag(Condition.PVD, [Exam.ECG, Exam.RenPanel]);
/* Pulmonary Diseases */
Tag(Condition.PulmDisease, [Exam.ECG, Exam.CBC, Exam.CXR]);
/* Other Diseases */
Tag(Condition.Age, [Exam.ECG]);
Tag(Condition.Risk, [Exam.ECG]);
Tag(Condition.Bleeding, [Exam.GnS, Exam.CBC, Exam.PTTINR]);
Tag(Condition.Anemia, [Exam.CBC]);
Tag(Condition.ActiveBleeding, [Exam.CBC]);
Tag(Condition.KidneyDisease, [Exam.ECG, Exam.CBC, Exam.RenPanel]);
Tag(Condition.Diabetes, [Exam.ECG, Exam.RenPanel, Exam.Gluc],
  { 'Is patient diabetic?': [Exam.HbA1C] });
Tag(Condition.Malignancy, [Exam.CBC, Exam.CXR],
  { 'Is patient on chemo?': [Exam.ECG, Exam.RenPanel, Exam.PTTINR] });
Tag(Condition.Hepatic, [Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.LFT]);
Tag(Condition.Adrenal, [Exam.RenPanel]);
Tag(Condition.Pituitary, [Exam.RenPanel]);
Tag(Condition.Endocrine, [Exam.RenPanel]);
Tag(Condition.Thyroid, [Exam.TSH]);
/* Medications */
Tag(Condition.Digoxin, [Exam.ECG, Exam.RenPanel]);
Tag(Condition.Lithium, [Exam.RenPanel]);
Tag(Condition.Diuretics, [Exam.RenPanel]);
Tag(Condition.ACEI, [Exam.RenPanel]);
Tag(Condition.ARB, [Exam.RenPanel]);
Tag(Condition.NSAIDS, [Exam.RenPanel]);
Tag(Condition.Anticoagulant, [Exam.CBC, Exam.RenPanel],
  { 'Is patient on Wafarin/Heparins?': [Exam.PTTINR] });
Tag(Condition.Antiplatelet, [Exam.CBC, Exam.RenPanel],
  { 'Is patient on Wafarin/Heparins?': [Exam.PTTINR] });
Tag(Condition.Steroid, [Exam.RenPanel, Exam.Gluc]);


/** Defining the validity periods for exams before surgery
 * The format is Validity(Exam.NAME, 'explanation of validity period');
 */
Validity(Exam.GnS, 'should be done within 1 month of surgery (or by local lab/surgical policy)');
Validity(Exam.ECG, 'should be done within 3 months of surgery');
Validity(Exam.CBC, 'should be done within 3 months of surgery');
Validity(Exam.RenPanel, 'should be done within 3 months of surgery');
Validity(Exam.PTTINR, 'should be done within 3 months of surgery');
Validity(Exam.LFT, 'should be done within 3 months of surgery');
Validity(Exam.Gluc, 'should be done within 3 months of surgery');
Validity(Exam.HbA1C, 'should be done within 3 months of surgery');
Validity(Exam.CXR, 'should be done within 6 months of surgery');
Validity(Exam.TSH, 'should be done within 6 months of surgery');
