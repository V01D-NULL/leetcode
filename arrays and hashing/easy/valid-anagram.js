//
// https://leetcode.com/problems/valid-anagram
//

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return runTimeEfficientSortAndCompare(s, t); 
  return runTimeAndMemoryEfficientCharacterCodes(s, t);
};

// Submission results:
//
// Memory: Beats 8.39% : 49.6 MB 
// Runtime: Beats 38% : 117 ms
//
const runTimeEfficientSortAndCompare = (s, t) => {
    const str1 = [...s].sort().join('');
    const str2 = [...t].sort().join('');
    return str1 === str2;  
};

// NOTE: This is not mine, but it's really smart so I included it:
//   https://leetcode.com/problems/valid-anagram/solutions/2542513/javascript-faster-than-100-o-n-time-and-o-1-space/?languageTags=javascript
//
// Submission results:
//
// Memory: Beats 95.44% : 42.2 MB 
// Runtime: Beats 91.81% : 77 ms
//
const runTimeAndMemoryEfficientCharacterCodes = (s, t) => {
    if (s.length != t.length) {
        return false;
    }
    
    let freq = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {
        freq[s.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
        freq[t.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    
    return freq.every(index => index === 0);
}
