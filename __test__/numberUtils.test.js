const { factorial, isPrime, clamp } = require("../src/numberUtils");

describe("factorial", () => {
  test("caso normal", () => {
    expect(factorial(5)).toBe(120);
  });

  test("factorial de 0", () => {
    expect(factorial(0)).toBe(1);
  });

  test("n negativo", () => {
    expect(() => factorial(-1)).toThrow(RangeError);
  });

  test("n decimal", () => {
    expect(() => factorial(2.5)).toThrow(TypeError);
  });
});

describe("isPrime", () => {
  test("primo conocido", () => {
    expect(isPrime(7)).toBe(true);
  });

  test("no primo", () => {
    expect(isPrime(8)).toBe(false);
  });

  test("0 no es primo", () => {
    expect(isPrime(0)).toBe(false);
  });

  test("1 no es primo", () => {
    expect(isPrime(1)).toBe(false);
  });

  test("número negativo", () => {
    expect(isPrime(-5)).toBe(false);
  });
});

describe("clamp", () => {
  test("valor dentro del rango", () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  test("valor menor que min", () => {
    expect(clamp(-1, 0, 10)).toBe(0);
  });

  test("valor mayor que max", () => {
    expect(clamp(20, 0, 10)).toBe(10);
  });

  test("min mayor que max", () => {
    expect(() => clamp(5, 10, 1)).toThrow(RangeError);
  });
});