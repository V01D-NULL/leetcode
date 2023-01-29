//
// https://leetcode.com/problems/two-sum/
//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    return runTimeEfficientHashMapTwo(nums, target); // Populate hashmap as we go
    return runTimeEfficientHashMap(nums, target);    // Populate entire hashmap before moving on (less efficient of course)
  
    return memoryEfficientBruteForce(nums, target);
};

// Submission results:
//
// Memory: Beats 19.33% : 43.4 MB 
// Runtime: Beats 96.86% : 62 ms
//
const runTimeEfficientHashMapTwo = (nums, target) => {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const _target = target - nums[i];
        const mapValue = map.get(_target);
        if (mapValue === undefined) {
            map.set(nums[i], i);
            continue;
        }

        return [i, mapValue]
    }
}

// Submission results:
//
// Memory: Beats 9.70% : 44.6 MB 
// Runtime: Beats 86.12% : 71 ms
//
const runTimeEfficientHashMap = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const _target = target - current;

        const operandIndex = map.get(_target);
        if (operandIndex === undefined || operandIndex === i) continue;
        
        return [i, operandIndex]
    }
}

// Submission results:
//
// Memory: Beats 60.93% : 42.4 MB 
// Runtime: Beats 28.38% : 167 ms
//
const memoryEfficientBruteForce = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const _target =  target - current;

        const containsTarget = nums.indexOf(_target);
        if (containsTarget === -1 || (current === _target && i === containsTarget)) continue;

        if (current + nums[containsTarget] === target) return [i, containsTarget]
    }
}
