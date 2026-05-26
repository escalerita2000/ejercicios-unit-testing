// Devuelve true si n es par, false si es impar
function isEven(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('Se esperaba un entero.');
  }
  return n % 2 === 0;
}

// Devuelve la raíz cuadrada o lanza error si n es negativo
function safeSquareRoot(n) {
  if (n < 0) throw new RangeError('No se puede calcular la raíz de un número negativo.');
  return Math.sqrt(n);
}

module.exports = { isEven, safeSquareRoot };