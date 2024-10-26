function firstUniqChar(s) {
    let map = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            map[s[i]] = null; // Set to null indicating non-unique
        } else {
            map[s[i]] = i; // Set the index as the value for the first occurrence
            count++;
        }
    }

    // Find the first unique character
    for (let char in map) {
        console.log(map)
        if (map[char] !== null) {
            return map[char];
        }
    }
    

    return -1; // Return -1 if no unique character found
}

console.log(firstUniqChar("loveleetcode")); // Output: 2
