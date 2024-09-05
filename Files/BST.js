class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

export class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (node.value === current.value) {
          return undefined;
        } else {
          if (node.value < current.value) {
            if (!current.left) {
              current.left = node;
              return this;
            } else {
              current = current.left;
            }
          } else {
            if (!current.right) {
              current.right = node;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return null;
    } else {
      let current = this.root;
      while (current) {
        if (current.value === value) {
          return true;
        } else {
          if (value < current.value) {
            current = current.left;
          } else {
            current = current.right;
          }
        }
      }
      return false;
    }
  }
}
