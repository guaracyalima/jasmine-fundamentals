var matcherDeEmail = {
  toBeValidEmail: (util, customEqualityTesters) => {
    let regex = /\S+@\S+\.\S+/;
    return {
      compare: (actual, expected) => {
        //expected é uma regex que pode ser passado na chamada de toBeValidEmail(este_é_o_expected)
        let result = {}
        if(expected === undefined){
          result.pass = regex.test(actual)
        } else {
          result.pass = expected.test(expected)
        }
        if (result.pass) {
          result.message = actual + " é um email invalido"
        } else {
          result.message = actual + " não é um email valido"
        }
        return result;
      }
    }
  }
}

describe('customMathcers', () => {
  beforeEach(() => {
    jasmine.addMatchers(matcherDeEmail)
  })

  it('deve validar um email usando o matcherDeEmail', () => {
    expect('user@user.com').toBeValidEmail();
  })

  it('deve verificar que o email não é valido usando o matcherDeEmail', () => {
    expect('user.user.com').not.toBeValidEmail();
  })
})
