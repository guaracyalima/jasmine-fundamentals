describe('fail', () => {
  let operation = (execOrNo, callback) => {
    if(execOrNo){
      callback()
    }

    it('Not exec callback', () => {
      fail()
      // operation(false, () => {
      //   fail('callback not executed')
      // })
    })
  }
})
