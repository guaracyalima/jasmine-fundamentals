describe('toBeLessThan', () => {
  it('1 > 2', () => {
    expect(1).toBeLessThan(2);
  });

  it('nine > teen', () => {
    expect('nine').toBeLessThan('teeen')
  });

  it('nove > dez', () => {
    //expect('nove').toBeLessThan('dez')
  })
})
