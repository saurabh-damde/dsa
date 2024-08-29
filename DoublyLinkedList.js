class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head || !this.tail) {
      return null;
    } else if (this.head === this.tail) {
      const value = this.head.value;
      this.head = this.tail = null;
      this.length--;
      return value;
    } else {
      const current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
      current.prev = null;
      this.length--;
      return current.value;
    }
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head || !this.tail) {
      return null;
    } else if (this.head === this.tail) {
      this.head = this.tail = null;
      this.length--;
    } else {
      const current = this.head;
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
      this.length--;
      return current.value;
    }
  }

  get(index) {
    if (index >= 0 && index < this.length) {
      let node = null;
      if (index < this.length / 2) {
        node = this.head;
        for (let i = 0; i < index; i++) {
          node = node.next;
        }
      } else {
        node = this.tail;
        for (let i = this.length - 1; i > index; i--) {
          node = node.prev;
        }
      }
      return node;
    } else {
      return null;
    }
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
    } else {
      return undefined;
    }
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else if (index < 0 || index > this.length) {
      return undefined;
    } else {
      const node = new Node(value);
      const current = this.get(index);
      node.next = current;
      node.prev = current.prev;
      current.prev = node;
      this.length++;
      return node;
    }
  }

  remove(index) {
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else if (index < 0 || index >= this.length) {
      return undefined;
    } else {
      const current = this.get(index);
      current.prev.next = current.next;
      current.next.prev = current.prev;
      current.prev = current.next = null;
      this.length--;
      return current;
    }
  }

  reverse() {
    if (this.head === this.tail) {
      return this;
    } else {
      let current = this.head;
      let temp = null;

      while (current) {
        temp = current.next;
        current.next = current.prev;
        current.prev = temp;
        current = current.prev;
      }

      temp = this.head;
      this.head = this.tail;
      this.tail = temp;
    }
    return this;
  }

  isPalindrome() {
    if (this.head === this.tail) {
      return true;
    } else {
      const itr = Math.floor(this.length / 2);
      let next = this.head;
      let prev = this.tail;
      let pal = false;
      for (let i = 0; i <= itr; i++) {
        pal = next.value === prev.value;
        next = next.next;
        prev = prev.prev;
        if (!pal) {
          break;
        }
      }
      return pal;
    }
  }

  swapFirstLast() {
    if (this.head === this.tail) {
      return true;
    } else {
      let value = this.head.value;
      this.head.value = this.tail.value;
      this.tail.value = value;
      return true;
    }
  }
}
