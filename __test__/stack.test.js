const Stack = require('../src/stack');

describe('Stack', () => {
  let stack;

  // beforeEach garantiza que cada test empiece con un stack vacío
  beforeEach(() => {
    stack = new Stack();
  });

  it('inicia vacío', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size).toBe(0);
  });

  it('push agrega elementos y aumenta el tamaño', () => {
    stack.push('A');
    stack.push('B');
    expect(stack.size).toBe(2);
  });

  it('pop devuelve el último elemento agregado', () => {
    stack.push(10);
    stack.push(20);

    const result = stack.pop();

    expect(result).toBe(20);
    expect(stack.size).toBe(1);   // queda un elemento
  });

  it('pop lanza error si el stack está vacío', () => {
    expect(() => stack.pop()).toThrow('El stack está vacío.');
  });

  it('peek devuelve el tope sin eliminarlo', () => {
    stack.push('X');
    expect(stack.peek()).toBe('X');
    expect(stack.size).toBe(1);   // sigue intacto
  });
});