describe('toThrow', () => {

  let withError = () => {
    return num / 0;
  }

  let withoutError = () => {
    return 1*1;
  }

  it('is not funfing', () => {
    expect(withError).toThrow();
  });

  it('is funfing', () => {
    expect(withoutError).not.toThrow();
  });
})
