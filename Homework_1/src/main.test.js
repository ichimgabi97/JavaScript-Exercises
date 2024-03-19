import {
  sumOfEvenNumbers,
  sumOfOddNumbers,
  encrypt,
  isPalindrome,
  sumOfEvenPosInArray,
  sumOfOddPosInArray,
  sumOfElements,
  isElementInArray,
  isElementInArrayBinarySearch
} from "./main";

describe("1. Function sumOfEvenNumbers():", () => {
  it("should return 2 for given input 3.", () => {
    expect(sumOfEvenNumbers(3)).toBe(2);
  });
  it("should return 30 for given input 10.", () => {
    expect(sumOfEvenNumbers(10)).toBe(30);
  });
  it("should return 102720 for given input 641.", () => {
    expect(sumOfEvenNumbers(641)).toBe(102720);
  });
  it("should return 'Input is not a valid number' for given input -20.", () => {
    expect(sumOfEvenNumbers(-20)).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input Infinity.", () => {
    expect(sumOfEvenNumbers(Infinity)).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input NaN.", () => {
    expect(sumOfEvenNumbers(NaN)).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input '5'.", () => {
    expect(sumOfEvenNumbers("5")).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input 'test'.", () => {
    expect(sumOfEvenNumbers("test")).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for no input.", () => {
    expect(sumOfEvenNumbers()).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input true.", () => {
    expect(sumOfEvenNumbers(true)).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input {}.", () => {
    expect(sumOfEvenNumbers({})).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input [1,2,3].", () => {
    expect(sumOfEvenNumbers([1, 2, 3])).toBe("Input is not a valid number");
  });
});

describe("2. Function sumOfOddNumbers():", () => {
  it("should return 2 for given input 3.", () => {
    expect(sumOfOddNumbers(3)).toBe(4);
  });
  it("should return 30 for given input 10.", () => {
    expect(sumOfOddNumbers(10)).toBe(25);
  });
  it("should return 146689 for given input 765.", () => {
    expect(sumOfOddNumbers(765)).toBe(146689);
  });
  it("should return 'Input is not a valid number' for given input -20.", () => {
    expect(sumOfOddNumbers(-20)).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input Infinity.", () => {
    expect(sumOfOddNumbers(Infinity)).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input NaN.", () => {
    expect(sumOfOddNumbers(NaN)).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input '5'.", () => {
    expect(sumOfOddNumbers("5")).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input 'test'.", () => {
    expect(sumOfOddNumbers("test")).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for no input.", () => {
    expect(sumOfOddNumbers()).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input true.", () => {
    expect(sumOfOddNumbers(true)).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input {}.", () => {
    expect(sumOfOddNumbers({})).toBe("Input is not a valid number");
  });
  it("should return 'Input is not a valid number' for given input [1,2,3].", () => {
    expect(sumOfOddNumbers([1, 2, 3])).toBe("Input is not a valid number");
  });
});

describe("3. Function sumOfEvenPosInArray():", () => {
  it("should return 0 for given input [].", () => {
    expect(sumOfEvenPosInArray([])).toBe(0);
  });
  it("should return 4 for given input [1, 2, 3].", () => {
    expect(sumOfEvenPosInArray([1, 2, 3])).toBe(4);
  });
  it("should return 69 for given input [1, 2, 3, 76, 8, 3, 1, 33, 56, 7].", () => {
    expect(sumOfEvenPosInArray([1, 2, 3, 76, 8, 3, 1, 33, 56, 7])).toBe(69);
  });
  it("should return -43 for given input [1, 2, 3, 76, 8, 3, 1, -33, -56, 7].", () => {
    expect(sumOfEvenPosInArray([1, 2, 3, 76, 8, 3, 1, -33, -56, 7])).toBe(-43);
  });
  it("should return 4 for given input [Infinity, 1, 4, 6].", () => {
    expect(sumOfEvenPosInArray([Infinity, 1, 4, 6])).toBe(4);
  });
  it("should return 24 for given input [NaN, 1, 24, 6].", () => {
    expect(sumOfEvenPosInArray([NaN, 1, 24, 6])).toBe(24);
  });
  it("should return 3 for given input [3, 1, '5', 6].", () => {
    expect(sumOfEvenPosInArray([3, 1, "5", 6])).toBe(3);
  });
  it("should return 0 for given input ['test', 1, '5', 6].", () => {
    expect(sumOfEvenPosInArray(["test", 1, "5", 6])).toBe(0);
  });
});

describe("4. Function sumOfOddPosInArray():", () => {
  it("should return 0 for given input [].", () => {
    expect(sumOfOddPosInArray([])).toBe(0);
  });
  it("should return 2 for given input [1, 2, 3].", () => {
    expect(sumOfOddPosInArray([1, 2, 3])).toBe(2);
  });
  it("should return 121 for given input [1, 2, 3, 76, 8, 3, 1, 33, 56, 7].", () => {
    expect(sumOfOddPosInArray([1, 2, 3, 76, 8, 3, 1, 33, 56, 7])).toBe(121);
  });
  it("should return 55 for given input [1, 2, 3, 76, 8, 3, 1, -33, -56, 7].", () => {
    expect(sumOfOddPosInArray([1, 2, 3, 76, 8, 3, 1, -33, -56, 7])).toBe(55);
  });
  it("should return 4 for given input [0, Infinity, 1, 4, 6].", () => {
    expect(sumOfOddPosInArray([0, Infinity, 1, 4, 6])).toBe(4);
  });
  it("should return 6 for given input [1, NaN, 24, 6].", () => {
    expect(sumOfOddPosInArray([1, NaN, 24, 6])).toBe(6);
  });
  it("should return 1 for given input [3, '5', 6, 1].", () => {
    expect(sumOfOddPosInArray([3, "5", 6, 1])).toBe(1);
  });
  it("should return 1 for given input ['test', '5', 6, 1].", () => {
    expect(sumOfOddPosInArray(["test", "5", 6, 1])).toBe(1);
  });
});

describe("5. Function sumOfElements():", () => {
  it("should return 0 for given input ([], []).", () => {
    expect(sumOfElements([], [])).toBe(0);
  });
  it("should return 17 for given input ([0,10,1], [5, 2, 2]).", () => {
    expect(sumOfElements([0, 10, 1], [5, 2, 2])).toBe(17);
  });
  it("should return 158 for given input ([0, 43, 10, 1], [5, 2, 9, 1, 100]).", () => {
    expect(sumOfElements([0, 43, 10, 1], [5, 2, 9, 1, 100])).toBe(158);
  });
  it("should return 114 for given input ([], [5, 2, 9, 1, 100]).", () => {
    expect(sumOfElements([], [5, 2, 9, 1, 100])).toBe(114);
  });
});

describe("6. Function isElementInArray():", () => {
    it("should return true for given input (1, [8, 4, 32, 1, 6]).", () => {
      expect(isElementInArray(1, [8, 4, 32, 1, 6])).toBe(true);
    });
    it("should return false for given input (10, [8, 4, 32, 1, 6]).", () => {
      expect(isElementInArray(10, [8, 4, 32, 1, 6])).toBe(false);
    });
  });

  describe("7. Function isElementInArrayBinarySearch():", () => {
    it("should return true for given input (1, [8, 4, 32, 1, 6]).", () => {
      expect(isElementInArrayBinarySearch(1, [8, 4, 32, 1, 6])).toBe(true);
    });
    it("should return false for given input (10, [8, 4, 32, 1, 6]).", () => {
      expect(isElementInArrayBinarySearch(10, [8, 4, 32, 1, 6])).toBe(false);
    });
  });

describe("8. Function isPalindrome():", () => {
  it("should return true for given input 'abab'", () => {
    expect(isPalindrome("abab")).toBe(true);
  });

  it("should return true for given input 'ababa'", () => {
    expect(isPalindrome("ababa")).toBe(true);
  });

  it("should return false for given input 'ab'", () => {
    expect(isPalindrome("ab")).toBe(false);
  });
  it("should return false for given input 'abc'", () => {
    expect(isPalindrome("abc")).toBe(false);
  });
});

describe("9. Function encrypt():", () => {
  it("should return CRKQFLK for given input ('FUNCTION', 3)", () => {
    expect(encrypt("FUNCTION", 3)).toBe("CRKZQFLK");
  });

  it("should return HYTYQAPNR for given input ('JAVASCRIPT',2)", () => {
    expect(encrypt("JAVASCRIPT", 2)).toBe("HYTYQAPGNR");
  });

  it("should return HELLO for given input ('HELLO', 0)", () => {
    expect(encrypt("HELLO", 0)).toBe("HELLO");
  });
  it("should return HELLO for given input ('HELLO', -4)", () => {
    expect(encrypt("HELLO", -4)).toBe("HELLO");
  });
});
