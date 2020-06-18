describe('createSpyObjSpec', () => {
  let calculadora = jasmine.createSpyObj("calculadora", ["somar", "dividir"]);

  calculadora.somar.and.returnValue(10);

  it('Deve retornar 10 quando somar', () => {
    expect(calculadora.somar(5,5)).toEqual(10)
  })
})
