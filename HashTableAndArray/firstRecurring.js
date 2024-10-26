function firstRecurring(array) {
    for (let i = 0; i < array.length; i++) {
        let reNumber = array[i];
        for (let j = i+1; j < array.length; j++) {
            if (reNumber === array[j])
                return reNumber;
        }
    }
    return undefined;
 
}

// console.log(firstRecurring([2, 3, 4, 4, 5]))
function firstRecurring2 (array) {
    let map = {}
    for (let i =0; i < array.length; i++) {
        console.log(map)
        if (map[array[i]] !== undefined) {
            return array[i];
        }
        else {
            map[array[i]] = i;
        }
    }
    
    return undefined
}

console.log(firstRecurring2("loveleetcode"))
/*
    arr[i] {2}
    let arr = []

    [{2}]
*/ 