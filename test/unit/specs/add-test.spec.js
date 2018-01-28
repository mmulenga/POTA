/* Simple Jest test file to test out add() function in main.js */
/* Use command 'npm run unit' */
const add = require('@/main.js');

describe('add', () => {
  it('should add two numbers', () => {
    const result = add(1, 2);
    const expected = 3;
    expect(result).toBe(expected);
  });
});
