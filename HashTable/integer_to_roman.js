/*
I:	1,
V:	5,
X:	10,
L:	50,
C:	100,
D:	500,
M:	1000,
*/

let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

let initRoman = function (num) {
    let romanString = "";
    for (let key in roman) {
        // Loop through each numeral in descending order
        while (num >= roman[key]) {
            num -= roman[key];
            romanString += key;
        }
    }
    return romanString;
};

const str = initRoman(45);
console.log(str); // Output: "MMMDCCXLIX"


/*

Input: num = 3749

Output: "MMMDCCXLIX"

Explanation:

3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
*/