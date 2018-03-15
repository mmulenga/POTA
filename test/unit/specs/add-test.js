/* Simple Jest test file to test out add() function in main.js */
/* Use command 'npm run unit' */
import { add } from '@/main';

describe('Testing add() function in main.js', () => {
  it('returns correct sum', () => {
    const result = add(1, 4);
    expect(result).toMatchSnapshot();
  });
});
