describe('spyOn', () => {

  let Calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => {}
  }

  beforeAll(() => {
    spyOn(Calculadora, "dividir");
  })

  it('deve possuir o metodo dividir como nao definido', () => {
    expect(Calculadora.dividir(1, 1)).toBeUndefined()
  })
})
