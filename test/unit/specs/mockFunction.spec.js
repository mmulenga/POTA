function forEach(items, callback) {
  for (let index = 0; index < items.length; index += 1) {
    callback(items[index]);
  }
}
const mockCallback = jest.fn();
forEach([0, 1], mockCallback);


describe('Testing mocking framework in Jest', () => {
  it('returns correct callback function tests', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });
});
