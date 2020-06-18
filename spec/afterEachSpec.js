describe('afterEach', () => {
  let contador = 0;
  beforeEach(() => {
    contador++
  })

  afterEach(() => {
    contador =0;
  })
  it('deve ter incrementado em uma unidade', () => {
    expect(contador).toEqual(1);
  })

  it('contador ainda é 1', () => {
    expect(contador).toEqual(1);
  })
})
