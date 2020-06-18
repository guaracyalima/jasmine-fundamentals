describe('To Match()', () => {
  it('Deve validar o uso do toMatch()', () => {
    let text = 'teste com jasmine';

    expect(text).toMatch('jasmine')
  });

  it('Deve validar um CEP', () => {
    expect("70750-765").toMatch(/^\d{5}-\d{3}$/)
  })
})
