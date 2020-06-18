describe('callsAllSpec', () => {

  let calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => { return x/y }
  }

  beforeEach(() => {
    spyOn(calculadora, "somar");
  })

  it('deve verificar se o metodo foi chamado ao meno uma x', () => {
    calculadora.somar(1,1);
    let retorno = calculadora.somar.calls.all();
    expect(retorno[0].object).toEqual(calculadora);
    expect(retorno[0].args).toEqual([1,1]);
    expect(retorno[0].returnValue).toBeUndefined()

  })
})
