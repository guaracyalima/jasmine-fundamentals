describe('andreturnValueSpec', () => {

  let Calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => { return x/y }
  }

  beforeEach(() => {
    spyOn(Calculadora, "somar").and.returnValue(10);
  })

  it('deve somar dois numeros e confirmar o retunrValue', () => {
    expect(Calculadora.somar(1,1)).toEqual(10);
  })

  it('deve somar dois numeros e confirmar o retunrValue quebrando com o resultado correto', () => {
    expect(Calculadora.somar(1,1)).not.toEqual(2);
  })
})
