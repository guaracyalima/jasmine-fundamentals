describe("Teste do toEqual()", () => {
  it('Deve validar o uso do toEqual()', () => {
    var obj1 = {valor: true};
    var obj2 = {valor: true};

      expect(obj1).toEqual(obj2)
  })
})
