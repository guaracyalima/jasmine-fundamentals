describe('jasmine.clock', () => {
  let somar;

  beforeEach(() => {
    somar = jasmine.createSpy('somar')
    jasmine.clock().install();
  })

  afterEach(() => {
    jasmine.clock().uninstall();
  })

  it('deve executar setTimeout sincronamente', () => {
    setTimeout(()=> {
      somar()
    }, 200)

    jasmine.clock().tick(100)

    expect(somar).not.toHaveBeenCalled();

    jasmine.clock().tick(200)

    expect(somar).toHaveBeenCalled();
  });

  it('deve executar setInterval sincronamente', () => {
    setInterval(()=> {
      somar()
    }, 100)
    
    jasmine.clock().tick(100)
    expect(somar).toHaveBeenCalled();
  });
})
