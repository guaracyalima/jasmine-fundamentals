describe('callsArgsForSpec', () => {

  let calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => { return x/y }
  }

  beforeEach(() => {
    spyOn(calculadora, "somar");
  })

  it('deve verificar se o metodo foi chamado ao meno uma x', () => {
    calculadora.somar(1,1);
    calculadora.somar(3,3);
    expect(calculadora.somar.calls.argsFor(0)).toEqual([1,1]);
    expect(calculadora.somar.calls.argsFor(1)).toEqual([3,3]);
  })
})
