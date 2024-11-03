
var lengthOfLongestSubstring = function (s) {
    let mySet = new Set();
    let longest = 0;
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        while (mySet.has(s[end])) {
            mySet.delete(s[start]);
            start++;
        }
        mySet.add(s[end]);
        longest = Math.max(longest, end-start+1);
    }

    return longest;
};

console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
