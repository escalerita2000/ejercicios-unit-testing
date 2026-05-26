const { capitalize, countOccurrences } = require('../src/textBasics');

describe('textBasics', () => {

  describe('capitalize()', () => {
    it('pone en mayúscula la primera letra', () => {
      expect(capitalize('hola mundo')).toBe('Hola mundo');
    });

    it('convierte el resto a minúsculas', () => {
      expect(capitalize('JAVASCRIPT')).toBe('Javascript');
    });

    it('devuelve cadena vacía si el texto está vacío o es solo espacios', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize('   ')).toBe('');
    });

    it('lanza TypeError si el argumento no es un string', () => {
      expect(() => capitalize(42)).toThrow(TypeError);
    });
  });

  describe('countOccurrences()', () => {
    it('cuenta correctamente las apariciones', () => {
      expect(countOccurrences('banana', 'a')).toBe(3);
    });

    it('devuelve 0 si el substring no aparece', () => {
      expect(countOccurrences('hola', 'z')).toBe(0);
    });

    it('devuelve 0 si el substring es una cadena vacía', () => {
      expect(countOccurrences('hola', '')).toBe(0);
    });
  });

});