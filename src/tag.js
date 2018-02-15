import { assert } from '@/main';

const examCollection = {};


export function Tag(name, tests) {
  examCollection[name] = tests;
}

export function GetExams(name) {
  assert(name in examCollection, `GetExams called with unknown condition ${name}`);
  if (name in examCollection) {
    return examCollection[name];
  }
  return [];
}

export function GetAllExams() {
  return examCollection;
}

<<<<<<< HEAD
export { Tag, GetExams, GetAllExams };
=======
>>>>>>> 61cd46f72d7b8296933c4e94eb3d42ce00fa92a8
