class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor(value) {
    const node = new Node(value);
    this.top = node;
    this.height = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.height++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    } else if (this.top.next === null) {
      const value = this.top.value;
      this.top = null;
      this.height--;
      return value;
    } else {
      const current = this.top;
      this.top = this.top.next;
      current.next = null;
      this.height--;
      return current.value;
    }
  }
}
