//To import (at the beginning of your test file)
const {
  addNumbers,
  isEven,
  getLength,
  capitalize,
  multiplyArray,
} = require("../functions.js");

  describe("Test for addNumbers function", () => {
    test('adding 3 + 2 should return 5', () => {
      expect(addNumbers(3, 2)).toBe(5);
    });
    test('adding (-3) + (-2) should return (-5)', () => {
        expect(addNumbers(-3, -2)).toBe(-5);
      });
    test('adding 3 + 2 should return 5', () => {
        expect(addNumbers(3, 2)).toBe(5);
      });
    test('adding (-3) + (2) should return -1', () => {
          expect(addNumbers(-3, 2)).toBe(-1);
        });
    test('adding 0 + 2 should return 2', () => {
            expect(addNumbers(0, 2)).toBe(2);
          });    
   });

   describe("Test for isEven function", () => {
    test('4 is even number', () => {
      expect(isEven(4)).toBeTruthy();
    });
    test('3 is no even number', () => {
        expect(isEven(3)).toBeFalsy();
      });
    test('0 is even number', () => {
        expect(isEven(0)).toBeTruthy();
      });
   })

   describe("Test for getLength function", () => {
    test('length of "" is 0', () => {
        expect(getLength("")).toBe(0);
     })
     test('length of "a" is 1', () => {
        expect(getLength("1")).toBe(1);
     })
    test('length of "qwerty" is 6', () => {
      expect(getLength("qwerty")).toBe(6);
   })
})

describe("Test for capitalize function", () => {
    test('"abc" is "ABC"', () => {
        expect(capitalize("abc")).toBe("ABC");
     })
     test('"ABC" is "ABC"', () => {
        expect(capitalize("ABC")).toBe("ABC");
     })
     test('"ABC" is "AbC"', () => {
        expect(capitalize("AbC")).toBe("ABC");
     })
})

describe("Test for multiplyArray function", () => {
    test('[1, 2, 3] product is 6', () => {
        expect(multiplyArray([1, 2, 3])).toBe(6);
     })
     test('[-1, -2, -3] product is -6', () => {
        expect(multiplyArray([-1, -2, -3])).toBe(-6);
     })
     test('[0, 1, 2] product is 0', () => {
        expect(multiplyArray([0, 1, 2])).toBe(0);
     })
})
 