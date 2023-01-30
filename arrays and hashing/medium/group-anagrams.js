//
// https://leetcode.com/problems/group-anagrams
//

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    return hashmap(strs);
};

// Submission results:
//
// Memory: Beats 77.91% : 52.6 MB 
// Runtime: Beats 99.35% : 101 ms
//
const hashmap = (strs) => {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const substring = strs[i];
        const s = [...substring].sort().join('');
        
        const entry = map.get(s);
        if (entry) {
            entry.push(substring);
        } else {
            map.set(s, [substring]);
        }
    }

    return Array.from(map, ([key, value]) => value);
};
