describe('beforeAll', () => {
  let contador = 0;
  beforeAll(() => {
    contador = 20
  })
  beforeEach(() => {
    contador++
  })

  afterEach(() => {
    contador =0;
  })
  it('deve ter incrementado em uma unidade', () => {
    expect(contador).toEqual(21);
  })

  it('1', () => {
    expect(contador).toEqual(1);
  })
})
