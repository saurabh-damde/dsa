class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

export class RBST {
  constructor() {
    this.root = null;
  }

  #insert(value, current = this.root) {
    if (!current) {
      return new Node(value);
    }
    if (value < current.value) {
      current.left = this.#insert(value, current.left);
    } else if (value > current.value) {
      current.right = this.#insert(value, current.right);
    }
    return current;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.#insert(value);
    }
  }

  contains(value, current = this.root) {
    if (!current) {
      return false;
    }
    if (value === current.value) {
      return true;
    }
    if (value < current.value) {
      return this.contains(value, current.left);
    } else {
      return this.contains(value, current.right);
    }
  }

  minValue(current) {
    if (!current.left) {
      return current.value;
    }
    return this.minValue(current.left);
  }

  maxValue(current) {
    if (!current.right) {
      return current.value;
    }
    return this.maxValue(current.right);
  }

  #delete(value, current) {
    if (!current) {
      return null;
    }
    if (value < current.value) {
      current.left = this.#delete(value, current.left);
    } else if (value > current.value) {
      current.right = this.#delete(value, current.right);
    } else {
      if (!current.left && !current.right) {
        return null;
      } else if (!current.left) {
        current = current.right;
      } else if (!current.right) {
        current = current.left;
      } else {
        let min = this.minValue(current.right);
        current.value = min;
        current.right = this.#delete(min, current.right);
      }
    }
    return current;
  }

  delete(value) {
    this.root = this.#delete(value, this.root);
  }
}
