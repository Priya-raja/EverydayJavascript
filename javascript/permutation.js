/*Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order). 

Note:  A permutation of an array of integers refers to a specific arrangement of its elements in a sequence or linear order.

Examples:
*/
var nextPermutation = function(nums) {
    let pivot = -1
     
    for (let i = nums.length - 2; i >= 0; i--){
        if(nums[i] < nums[i + 1]) {
            pivot = i
            break  // Add break here too
        }
    }
     
    if(pivot === -1) {
        nums.reverse()
        return
    }
     
    let swapIdx = -1
    // ✅ Scan from RIGHT to LEFT
    for(let i = nums.length - 1; i > pivot; i--){
        if(nums[i] > nums[pivot]) {
            swapIdx = i
            break
        }
    }
    
    // ✅ Use square brackets for destructuring swap
    [nums[pivot], nums[swapIdx]] = [nums[swapIdx], nums[pivot]]
    
    let left = pivot + 1
    let right = nums.length - 1
    while (left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
};

// Example usage:[2, 4, 1, 7, 5, 0]