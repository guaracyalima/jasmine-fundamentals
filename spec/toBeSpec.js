describe('Comparador toBe()', () => {
  it('Deve validar que true é true', () => {
    expect(true).toBe(true)
  })

  it('Deve validar que uma string é igual a ela mesma', () => {
    expect("true string").toBe("true string")
  })

  it('Deve comparar dois objetos de conteudo igual', () => {

/** Objetos são alocados em memoria,
 na verificação é verificado a igualdade interna dessas posições na memoria(referencia), dai eles são diferentes causando erro **/

    var obj1 = {valor: true};
    var obj2 = {valor: true};

    //expect(obj1).toBe(obj2)
    expect(obj1).not.toBe(obj2)
  })
})
