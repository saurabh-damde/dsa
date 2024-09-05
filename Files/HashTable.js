class HashTable {
  constructor(size = 11) {
    this.map = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 11) % this.map.length;
    }
    return hash;
  }

  // setting different value for existing key needs to be implemented;
  set(key, value) {
    let index = this._hash(key);
    if (!this.map[index]) {
      this.map[index] = [];
    }
    this.map[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.map[index]) {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) {
          return this.map[index][i][1];
        }
      }
    }
    return null;
  }

  get Keys() {
    let keys = [];
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        for (let j = 0; j < this.map[i].length; j++) {
          keys.push(this.map[i][j][0]);
        }
      }
    }
    return keys;
  }
}
