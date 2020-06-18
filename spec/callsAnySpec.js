describe('callsAnySpec', () => {

  let calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => { return x/y }
  }

  beforeEach(() => {
    spyOn(calculadora, "somar");
  })

  it('deve verificar se o metodo foi chamado ao meno uma x', () => {
    expect(calculadora.somar.calls.any()).toBeFalsy();
    calculadora.somar(1,1);
    expect(calculadora.somar.calls.any()).toBeTruthy();
  })
})
