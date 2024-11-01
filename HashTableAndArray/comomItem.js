//['a', 'b', 'c', 'z']
//['a', 'b', 'c', 'z']
//return true

//['a', 'b', 'c', 'z']
//['e', 'g', 'u', 'v']
//return false

function commonItem(arr1, arr2) {
    let map = {}
    for (let i = 0; i < arr2.length; i++) {
        if (!map[arr2[i]]) {
            map[arr2[i]] = 1;
        }

    }

    for (let i = 0; i < arr1.length; i++) {
        if (map[arr1[i]]) {
            return true
        }

    }
    return false;
}


console.log(commonItem(['a', 'b', 'c', 'z'], ['f', 'y', 'c', 'z']))
console.log(commonItem(['a', 'b', 'c', 'z'], ['e', 'g', 'u', 'v']))

