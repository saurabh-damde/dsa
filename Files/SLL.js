class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
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
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      this.tail = current;
      this.tail.next = null;
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
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head || !this.tail) {
      return null;
    } else if (this.head === this.tail) {
      const value = this.head.value;
      this.head = this.tail = null;
      this.length--;
      return value;
    } else {
      const current = this.head;
      this.head = this.head.next;
      current.next = null;
      this.length--;
      return current.value;
    }
  }

  get(index) {
    if (index >= 0 && index < this.length) {
      let current = this.head;
      for (let pos = 0; pos < index; pos++) {
        current = current.next;
      }
      return current;
    } else {
      return null;
    }
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return node;
    }
    return undefined;
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
      const temp = this.get(index - 1);
      node.next = temp.next;
      temp.next = node;
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
      const prev = this.get(index - 1);
      const curr = prev.next;
      prev.next = curr.next;
      curr.next = null;
      this.length--;
      return curr;
    }
  }

  reverse() {
    if (this.head === this.tail) {
      return this;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  findMiddleNode() {
    if (!this.head) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  hasLoop() {
    if (!this.head) {
      return false;
    }

    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  findKthFromEnd(k) {
    if (k < 0) {
      return null;
    }
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < k; i++) {
      if (!fast) {
        return null;
      }
      fast = fast.next;
    }
    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }

  removeDuplicates() {
    if (!this.head) {
      return undefined;
    }

    const seen = new Set();
    let current = this.head;
    let prev = null;
    while (current) {
      if (seen.has(current.value)) {
        prev.next = current.next;
        this.length--;
      } else {
        seen.add(current.value);
        prev = current;
      }
      current = current.next;
    }
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  bubbleSort() {
    if (this.length < 2) return;

    let sortedUntil = null;
    while (sortedUntil !== this.head.next) {
      let current = this.head;
      while (current.next !== sortedUntil) {
        let nextNode = current.next;
        if (current.value > nextNode.value) {
          const temp = current.value;
          current.value = nextNode.value;
          nextNode.value = temp;
        }
        current = current.next;
      }
      sortedUntil = current;
    }
  }

  selectionSort() {
    if (this.length < 2) {
      return;
    }
    let current = this.head;
    while (current.next) {
      let smallest = current;
      let innerCurrent = current.next;
      while (innerCurrent) {
        if (innerCurrent.value < smallest.value) {
          smallest = innerCurrent;
        }
        innerCurrent = innerCurrent.next;
      }
      if (smallest !== current) {
        let temp = current.value;
        current.value = smallest.value;
        smallest.value = temp;
      }
      current = current.next;
    }
    this.tail.value = current.value;
  }

  insertionSort() {
    if (this.length < 2) {
      return;
    }
    let sortedHead = null;
    let current = this.head;
    while (current) {
      let nextNode = current.next;
      if (!sortedHead || current.value < sortedHead.value) {
        current.next = sortedHead;
        sortedHead = current;
      } else {
        let sortedCurrent = sortedHead;
        while (sortedCurrent.next && sortedCurrent.next.value < current.value) {
          sortedCurrent = sortedCurrent.next;
        }
        current.next = sortedCurrent.next;
        sortedCurrent.next = current;
      }
      current = nextNode;
    }
    this.head = sortedHead;
    this.tail = this.head;
    while (this.tail && this.tail.next) {
      this.tail = this.tail.next;
    }
  }
}
