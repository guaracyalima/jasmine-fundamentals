describe('andThrowErrorSpec', () => {

  var calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => { return x/y }
  }

  beforeEach(() => {
    spyOn(calculadora, "somar").and.throwError("invalid argument exception");
  })

  it('deve lançar exeção de argumentos invalidos', () => {
    expect(() => calculadora.somar(1,5)).toThrowError("invalid argument exception");
    expect(calculadora.somar).toHaveBeenCalled();
    expect(calculadora.somar).toHaveBeenCalledTimes(1);
  })
})
