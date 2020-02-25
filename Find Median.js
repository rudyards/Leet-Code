// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0

// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newArr = nums1.concat(nums2)
    newArr.sort((a, b) => a - b);
    if (newArr.length % 2 == 1){
        return newArr[newArr.length/2 - 0.5]
    } else {
        var median = newArr[newArr.length/2] + newArr[newArr.length/2 - 1]
        median = median / 2;
        return median
    }
};



// Runtime: 132 ms, faster than 37.36% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 39.4 MB, less than 59.57% of JavaScript online submissions for Median of Two Sorted Arrays.