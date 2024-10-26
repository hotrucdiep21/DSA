
function gA (strs) {
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
}

console.log(gA(["eat","tea","tan","ate","nat","bat"]))
