//
// https://leetcode.com/problems/contains-duplicate/
//

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return runTimeEfficientSet(nums);
    return runTimeEfficientHashmap(nums);
    return memoryEfficient(nums);
};

// Submission results:
//
// Memory: Beats 11.44% : 55.1 MB 
// Runtime: Beats 79.88% : 91 ms
//
const runTimeEfficientSet = (nums) => {
  return new Set(nums).size !== nums.length;
};

// Submission results:
//
// Memory: Beats 5.10% : 58.7 MB 
// Runtime: Beats 62.32% : 102 ms
//
const runTimeEfficientHashmap = (nums) => {
  const map = new Map();
  for (let i = 0; i != nums.length; i++) {
    if (map.get(nums[i])) return true;
      map.set(nums[i], 1);
    }

    return false;
};

// Submission results:
//
// Memory: Beats 89.75% : 49.2 MB 
// Runtime: Beats 5% : 8603 ms
//
const memoryEfficient = (nums) => {
  var originalLength = nums.length;
    for (i = 0; i < originalLength; i++) {
        if (nums.indexOf(nums.shift()) !== -1) return true;
    }
    
    return false;
};
