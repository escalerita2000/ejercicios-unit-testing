// Convierte la primera letra a mayúscula, el resto a minúscula
function capitalize(text) {
  if (typeof text !== 'string') throw new TypeError('Se esperaba un string.');
  if (text.trim() === '') return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Cuenta cuántas veces aparece `substring` dentro de `text`
function countOccurrences(text, substring) {
  if (!substring) return 0;
  let count = 0;
  let index = text.indexOf(substring);
  while (index !== -1) {
    count++;
    index = text.indexOf(substring, index + 1);
  }
  return count;
}

module.exports = { capitalize, countOccurrences };