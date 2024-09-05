class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor(value) {
    const node = new Node(value);
    this.first = this.last = node;
    this.length = 1;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    } else if (this.first === this.last) {
      const value = this.first.value;
      this.first = this.last = null;
      this.length--;
      return value;
    } else {
      const current = this.first;
      this.first = this.first.next;
      current.next = null;
      this.length--;
      return current.value;
    }
  }
}
