describe('callsMostRecentSpec', () => {

  let calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => { return x/y }
  }

  beforeEach(() => {
    spyOn(calculadora, "somar");
  })

  it('deve verificar o mostRecent', () => {
    calculadora.somar(1,1);
    let retorno = calculadora.somar.calls.mostRecent();
    expect(retorno.object).toEqual(calculadora);
    expect(retorno.args).toEqual([1,1]);
    expect(retorno.returnValue).toBeUndefined()

  })
})
