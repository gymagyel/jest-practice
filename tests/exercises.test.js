const { capitalize, reverse, sum, subtract, divide, multiply,caesarCipher, analyzeArray} = require('../src/exercises');

test ("capitalize first letter", () => {
    expect(capitalize( "hello")).toBe("Hello")
})

test ("reverse string", () => {
    expect(reverse("hello")).toBe("olleh")
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtruct 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});

test('divide 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});
 test ('multiply 3 *2 to equal 6', () =>{
    expect(multiply(3,2)).toBe(6);
 })

test("caesar cipher wrap", () => {
  expect(caesarCipher("xyz",3)).toBe("abc");
});

test("caesar cipher case", () => {
  expect(caesarCipher("HeLLo",3)).toBe("KhOOr");
});

test("caesar cipher punctuation", () => {
  expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!");
});
test ('analyze array', ()=> {
     expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
})