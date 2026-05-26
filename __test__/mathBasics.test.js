const { isEven, safeSquareRoot } = require('../src/mathBasics');

describe('mathBasics', () => {

  describe('isEven()', () => {
    it('devuelve true para un número par', () => {
      // Arrange
      const n = 4;
      // Act
      const result = isEven(n);
      // Assert
      expect(result).toBe(true);
    });

    it('devuelve false para un número impar', () => {
      expect(isEven(7)).toBe(false);
    });

    it('funciona con el número 0 (es par)', () => {
      expect(isEven(0)).toBe(true);
    });

    it('lanza TypeError si el argumento no es un entero', () => {
      expect(() => isEven('hola')).toThrow(TypeError);
      expect(() => isEven(3.5)).toThrow(TypeError);
    });
  });

  describe('safeSquareRoot()', () => {
    it('devuelve la raíz cuadrada correcta', () => {
      expect(safeSquareRoot(9)).toBe(3);
      expect(safeSquareRoot(0)).toBe(0);
    });

    it('lanza RangeError para números negativos', () => {
      expect(() => safeSquareRoot(-4)).toThrow(RangeError);
      expect(() => safeSquareRoot(-4)).toThrow('negativo');
    });
  });

});