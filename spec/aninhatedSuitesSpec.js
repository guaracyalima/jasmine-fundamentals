describe('suite a', () => {
  let counter = 0

  beforeAll(() => {
    counter = 10
  })

  beforeEach(() => {
    counter ++
  })

  it('deve valer 11 na primeira suite', () => {
    expect(counter).toEqual(11)
  })

  xdescribe('suite b', () => {
    it('deve valer 11 na primeira suite', () => {
      expect(counter).toEqual(12)
    })

    describe('suite c', () => {

      xit('deve valer 11 na primeira suite', () => {
        expect(counter).toEqual(13)
      })

      it('deve valer 11 na primeira suite', () => {
        expect(counter).toEqual(14)
        pending()
      })
    })
  })
})
