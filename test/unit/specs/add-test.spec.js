/* Simple Jest test file to test out add() function in main.js */
/* Use command 'npm run unit' */
import { add } from '@/main.js';

describe('add() in main.js', () => {
  it('should add two numbers', () => {
    const result = add(1, 2);
    const expected = 3;
    expect(result).toBe(expected);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});

