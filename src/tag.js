import assert from '@/main';

const examCollection = {};


function Tag(name, tests) {
  examCollection[name] = tests;
}

function GetExams(name) {
  assert(name in examCollection, `GetExams called with unknown condition ${name}`);
  if (name in examCollection) {
    return examCollection[name];
  }
  return [];
}

function GetAllExams() {
  return examCollection;
}

export default { Tag, GetExams, GetAllExams };
