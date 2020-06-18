describe('createSpySpec', () => {
  let operacao = jasmine.createSpy("somar");

  it('deve validar a operacao criada', () => {
    operacao(1,1)
    expect(operacao).toHaveBeenCalled()
  })
})
