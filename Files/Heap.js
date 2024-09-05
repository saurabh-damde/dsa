export class Heap {
  #heap = [];

  getHeap() {
    return this.#heap.slice();
  }

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;

    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.#parent(current)]
    ) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }

  remove() {
    if (this.#heap.length === 0) {
      return null;
    }
    if (this.#heap.length === 1) {
      return this.#heap.pop();
    }

    const max = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#sink(0);
    return max;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #leftChild(index) {
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2;
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  #sink(index) {
    let max = index;
    let size = this.#heap.length;

    while (true) {
      let left = this.#leftChild(index);
      let right = this.#rightChild(index);
      if (left < size && this.#heap[left] > this.#heap[max]) {
        max = left;
      }
      if (right < size && this.#heap[right] > this.#heap[max]) {
        max = right;
      }
      if (max !== index) {
        this.#swap(index, max);
        index = max;
      } else {
        return;
      }
    }
  }
}
