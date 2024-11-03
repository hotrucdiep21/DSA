class hashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    _hash (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash+key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }

}

let newHashTable = new hashTable(20);

console.log(newHashTable._hash("example"))

console.log("exam".charCodeAt(1)%20)
