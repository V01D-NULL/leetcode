//
// https://leetcode.com/problems/top-k-frequent-elements
//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  return sortedHashmap(nums, k);
};

// Submission results:
//
// Memory: Beats 60.41% : 45.1 MB 
// Runtime: Beats 85.19% : 78 ms
//
const sortedHashmap = (nums, k) => {
  if (nums.length === 1) return [nums[0]];
    
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const entry = map.get(nums[i]);
      if (entry !== undefined) {
        entry.push(nums[i]);
      }
      else {
        map.set(nums[i], [nums[i]]);
      }
  }

  // For those not familiar with javascript, this code does the following:
  //
  // Iterate over the hashmap ([...map.values()]), sort the sub arrays from largest to smallest, select 0-k sub arrays, flatten the array,
  // filter duplicates by converting it to a set, convert the set back to an array and return the result.
  //
  return Array.from(new Set([...map.values()].sort((a,b) => b.length - a.length).splice(0, k).flat()));
}
