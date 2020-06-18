describe('andReturnValuesSpec', () => {

  var calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => { return x/y }
  }

  beforeEach(() => {
    spyOn(calculadora, "somar").and.returnValues(10,20);
  })

  it('deve somar dois numeros e confirmar o retunrValues', () => {
    expect(calculadora.somar(1,1)).toEqual(10);
    expect(calculadora.somar(1,1)).toEqual(20);
    expect(calculadora.somar).toHaveBeenCalledTimes(2);
  })
})
