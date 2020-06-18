describe('toHaveBeenCalledWith', () => {

  let Calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => {}
  }

  beforeAll(() => {
    spyOn(Calculadora, "dividir");
  })

  it('deve verificar que o spy de dividir foi chamado com 1, 1', () => {
    Calculadora.dividir(1, 1);

    expect(Calculadora.dividir).toHaveBeenCalledWith(1,1)
  })
})
