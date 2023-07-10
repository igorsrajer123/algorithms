class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  /*
  Private method
  Hash value is a sum of all characters ASCII values that are in the key
  Since table has only 127 buckets, hash method must return number between 0 and 127
  (for this we use mod operator)
  */

  _hash(key) {
    let hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    console.log(this.table[index]);
    return this.table[index];
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table.splice(index, 1);
      this.size--;
    }
  }
}
