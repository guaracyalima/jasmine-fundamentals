describe('callsAllArgsSpec', () => {

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
    expect(calculadora.somar.calls.allArgs()).toEqual([[1,1], [3,3]]);
  })
})
