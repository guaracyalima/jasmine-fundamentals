describe('andcallThroughSpec', () => {

  let Calculadora = {
    somar: (a, b) => { return a+b },
    dividir: (x, y) => { return x/y }
  }

  beforeEach(() => {
    spyOn(Calculadora, "somar").and.callThrough();
    spyOn(Calculadora, "dividir")
  })

  it('deve somar dois numeros', () => {
    expect(Calculadora.somar(1,1)).toEqual(2);
  })

  it('deve retornar undefined para o metodo do spy não invocado originalmente', () => {
    expect(Calculadora.dividir(2,2)).toBeUndefined();
  })

  it('deve retornar que o metodo foi invocado 1 x', () => {
    expect(Calculadora.somar).toHaveBeenCalledTimes(0);
  })
})
