describe('jasmine.objectContaining', () => {
  let carro;

  beforeEach(() => {
    carro = {
      'combustivel': 'Flex',
      'ano': 2014
    }
  })

  it('deve verificar propriedades do carro', () => {
    expect(carro).toEqual(jasmine.objectContaining({'combustivel': 'Flex'}))
  })

  it('deve verificar que carro não term numero de portas', () => {
    expect(carro).not.toEqual(jasmine.objectContaining({'portas': '5'}))
  })
})
