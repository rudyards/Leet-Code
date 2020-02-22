// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // iterate through the nums
    // Save your starting position to make sure we don't use the same element twice
    // Then iterate through the rest of the nums to see if any of them add up
    //if not, ++
    for (i = 0; i < nums.length-1; i++){
        for (y = i+1; y<nums.length; y++){
            if (nums[y] + nums[i] == target){
                return [i, y];
            }
        }
    }
};

// Runtime: 180 ms, faster than 14.31% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.7 MB, less than 58.68% of JavaScript online submissions for Two Sum.