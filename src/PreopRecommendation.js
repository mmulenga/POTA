// Singleton data, not a class
import assert from '@/main';
import Tag from '@/tag';

test_collection = {};

function addToCollection(t) {
  assert(t instanceof Tag);
  test_collection[t.name] = tests;
}

function getAllTests() {
  return test_collection;
}
