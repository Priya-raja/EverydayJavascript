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