class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let address = 0;
        for (let i = 0; i < key.length; i++) {
            address = (address + key.charCodeAt(i) * i) % this.data.length;
        }
        return address;
    }


    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this._hash(key);
        console.log(address)
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < this.data.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }

    keys() {
        const keys = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keys.push(this.data[i][j][0])
                    }
                }
                keys.push(this.data[i][0][0])
            }

        }
        return keys;
    }
}

const myHash = new HashTable(50);

myHash.set("apple", 100);
myHash.set("orange", 200);
myHash.set("grapes", 100);
myHash.set("banana", 900);
myHash.set("banana", 900);
myHash.set("banana", 900);
myHash.set("banana", 900);
myHash.set("banana", 900);


console.log(myHash.keys());
console.log(myHash.get("banana"))