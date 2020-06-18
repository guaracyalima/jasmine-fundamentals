describe('toHaveBeenCalled', () => {

  let Calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => {}
  }

  beforeAll(() => {
    spyOn(Calculadora, "dividir");
  })

  it('deve possuir o metodo dividir como nao definido', () => {
    Calculadora.dividir(1, 1);
    expect(Calculadora.dividir).toHaveBeenCalled()
  })
})
