/*
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/
var groupAnagrams = function(strs) {
    const anagramsMap = {};
    
    for (let str of strs) {
        // Sort the characters of the string alphabetically
        const sortedStr = str.split('').sort().join('');
        // console.log(sortedStr)
        
        // If the sorted string is already a key in the map, push the original string to its array
        if (anagramsMap[sortedStr]) {
            anagramsMap[sortedStr].push(str);
        } else {
            // Otherwise, initialize a new array with the original string as its first element
            anagramsMap[sortedStr] = [str];
        }
    }
    
    // Convert the map values (arrays of anagrams) to an array and return
    return Object.values(anagramsMap);
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

const sortedStr = "bca".split('').join('');
console.log(sortedStr)



