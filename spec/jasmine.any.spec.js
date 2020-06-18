describe('jasmine.any()', () => {
  let somar;

  beforeEach(() => {
    somar = jasmine.createSpy("somar");
  });

  it('deve verificar uso do any', () => {
    somar(1, 9);
    expect(somar).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Number));

    expect({}).toEqual(jasmine.any(Object));
  })

  it('um texto qualquer deve ser do tipo string', () => {
    expect('Texto xpto').toEqual(jasmine.any(String))
  })
})
