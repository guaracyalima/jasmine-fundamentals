describe('jasmine.objectContaining', () => {
  let anos;

  beforeEach(() => {
    anos = [1666, 1999, 1333, 1349]
  })

  it('deve verificar se o array contain 1349', () => {
    expect(anos).toEqual(jasmine.arrayContaining([1349]))
  })

  it('deve verificar se o array contain todas as posições', () => {
    expect(anos).toEqual(jasmine.arrayContaining([1666, 1999, 1333, 1349]))
  })

  it('deve verificar se o array !contain 2020', () => {
    expect(anos).not.toEqual(jasmine.arrayContaining([2020]))
  })
})
