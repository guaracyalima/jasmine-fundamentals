describe('beforeEach', () => {
  let contador = 0;
  beforeEach(() => {
    contador++
  })
  it('deve ter incrementado em uma unidade', () => {
    expect(contador).toEqual(1);
  })

  it('2', () => {
    expect(contador).toEqual(2);
  })
})
