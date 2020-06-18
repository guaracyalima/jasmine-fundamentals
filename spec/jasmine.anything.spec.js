describe('jasmine.anything', () => {
  let somar;

  beforeEach(() => somar = jasmine.createSpy("somar"))

  it('deve validar objeto anything', () => {

    somar(1,1);

    expect(somar).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());

    expect({}).toEqual(jasmine.anything())
    
  })
})
