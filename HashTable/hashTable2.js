class hashTable {
    constructor (size) {
        this.data = new Array(size);
    }
    // Hash = return number <=> index
    _hash (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)*i) % this.data.length
        }
        return hash;
    }
    // Set
    set(key, value) {
        let address = this._hash(key);
        // if this address not exit
        if(!this.data[address]) {
            this.data[address] = [];
        }
        // push vaod dưới dạng một mang
        this.data[address].push([key, value]);
        return this.data;
    }
    // Get
    get (key) {
        let address = this._hash(key);
        let currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) 
                    return currentBucket[i][1];
            }
        }
        return undefined;
    }

    keys () {
        let keyArrays = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                console.log(this.data[i][0][0])
                keyArrays.push(this.data[i][0]);
            }
        }
        return keyArrays;
    }

    keyss() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              if (this.data.length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  result.push(this.data[i][j][0])
                }
              } else {
                result.push(this.data[i][0])
              } 
            }
        }
        return result; 
      }

}

let newHash = new hashTable(50);

console.log(newHash.set("apple", 100));
console.log(newHash.set("apple", 100));
console.log(newHash.set("oranges", 200));
console.log(newHash.set("bananas", 300));

// console.log(newHash.get("apple"));
// console.log(newHash.get("apple"));
console.log("keys");
console.log(newHash.keys());

console.log(newHash.keyss());

