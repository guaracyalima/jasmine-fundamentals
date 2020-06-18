describe('andCallFakeSpec', () => {

  var calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => { return x/y }
  }

  beforeEach(() => {
    spyOn(calculadora, "somar").and.callFake((p,q) => {return p*q});
  })

  it('deve multiplicad dois numeros ao invez de somar', () => {
    expect(calculadora.somar(1,5)).toEqual(5);
    expect(calculadora.somar(9,9)).toEqual(81);
    expect(calculadora.somar).toHaveBeenCalled();
    expect(calculadora.somar).toHaveBeenCalledTimes(2);
  })
})
