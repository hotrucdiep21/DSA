//[2, 3, 2, 5] => output 2

function firstRecurring(array) {
    //Tao 1 map 
    let map = {}
    for (let i = 0; i < array.length; i++) {
        console.log(maps)
        if (map[array[i]] != undefined) {
            return array[i];
        }
        else {
            map[array[i]] = i;
        }
    }
    return undefined;
}

console.log(firstRecurring([3,5,2,5, 5]))
