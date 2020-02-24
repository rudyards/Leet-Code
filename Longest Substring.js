// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.




/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var substring = [];
    var longest = 0
    for (j = 0; j < s.length; j++){
        for (i = j; i < s.length; i++){
            if (substring.includes(s[i])){
                if (longest < substring.length){
                    longest = substring.length
                }
                substring = []
                break
            } else {
                substring.push(s[i])
            }
        }
        if (j == s.length-1 && longest < substring.length){
            longest = substring.length
        }
    }
    if (s == " "){
        longest = 1
    }
    return longest
};



// Runtime: 500 ms, faster than 12.31% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 41.9 MB, less than 23.89% of JavaScript online submissions for Longest Substring Without Repeating Characters.


//Personal notes: Runtime is absolutely hideous. This is an exponential length program. Brute forced, with bad fail cases. Figure out how to improve later