describe('toThrowError', () => {

  let calcularDobro = (number) => {
      if(number <= 0 ){
        throw new TypeError("o Numero deve ser maior que zero")
      }

      return number * number;
  }

  it('valida o lançamento da exception exception', () => {
    expect(() => {calcularDobro(0)}).toThrowError()
  });

  it('valida o lançamento da exception exception e a mensagem', () => {
    expect(() => {calcularDobro(0)}).toThrowError('o Numero deve ser maior que zero')
  });
  it('valida o tipo da exceção', () => {
    expect(() => {calcularDobro(0)}).toThrowError(TypeError)
  });

  it('valida o tudo junto', () => {
    expect(() => {calcularDobro(0)}).toThrowError(TypeError, 'o Numero deve ser maior que zero')
  });

});
