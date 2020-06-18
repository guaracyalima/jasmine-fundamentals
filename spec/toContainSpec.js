describe('toContain', () => {
  it('Deve buscar uma substring dentro de outra', () => {
    let string = "i hate god!";

    expect(string).toContain('hate');
  });

  it('Deve buscar um valor dentro de um array', () => {
    let array = [1, 2, 3, 4, 5, 6];

    expect(array).toContain(6);
  });

  it('Deve validar que um valor não existe dentro de um array', () => {
    let array = [1, 2, 3, 4, 5, 6];

    expect(array).not.toContain(7);
  });

  it("can be declared by calling 'pending' in the spec body", function() {
   expect(true).toBe(false);
   pending('this is why it is pending');
  });

  it("___", function() {
   let arr = [
     {name: "devil"},
     {name: "belzebu"},
     {name: "belial"},
     {name: "behemoth"},
     {name: "aztaroth"},
   ]

   expect(arr).not.toContain('devil');
  });
});
