/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if(map[sortedStr]) {
            map[sortedStr].push(str)
        }
        else {
            map[sortedStr] = [str];
        }
    }
    return Object.values(map)
};

// let strs = ["eat","tea","tan","ate","nat","bat"]
// console.log(groupAnagrams(strs))

console.log("eat".split(''))
console.log("eat".split('').sort())
console.log("eat".split('').sort().join(''))
