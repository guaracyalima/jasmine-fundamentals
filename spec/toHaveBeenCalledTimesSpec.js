describe('toHaveBeenCalled', () => {

  let Calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => {}
  }

  beforeAll(() => {
    spyOn(Calculadora, "dividir");
  })

  it('deve verificar que o spy de dividir foi chamado 4x', () => {
    Calculadora.dividir(1, 1);
    Calculadora.dividir(1, 2);
    Calculadora.dividir(1, 3);
    Calculadora.dividir(1, 4);
    expect(Calculadora.dividir).toHaveBeenCalledTimes(4)
  })
})
