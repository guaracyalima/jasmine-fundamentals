describe('jasmine.stringMatching', () => {
  let stringueiro;

  beforeEach(() => {
    stringueiro = jasmine.createSpy('exibirTexto')
  })

  it('deve verificar se existe uma string', () => {
    stringueiro("Fulano de talco");
    expect(stringueiro).toHaveBeenCalledWith(jasmine.stringMatching("Fulano"));
  });

  it('Deve verificar uma string por RE', () => {
    expect('Toda porca tem sua arruela').toEqual(jasmine.stringMatching(/^toda/i))
  })

})
