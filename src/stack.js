class Stack {
  constructor() {
    this._items = [];
  }

  push(item) {
    this._items.push(item);
  }

  pop() {
    if (this.isEmpty()) throw new Error('El stack está vacío.');
    return this._items.pop();
  }

  peek() {
    if (this.isEmpty()) throw new Error('El stack está vacío.');
    return this._items[this._items.length - 1];
  }

  isEmpty() {
    return this._items.length === 0;
  }

  get size() {
    return this._items.length;
  }
}

module.exports = Stack;