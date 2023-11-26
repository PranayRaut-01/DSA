var removeDuplicates = function(nums) {
    if(nums.length===0) return 0

    let k = 1
    for (let i=1;i<nums.length;i++){
        if(nums[k-1]!==nums[i]){
            nums[k]=nums[i]
            k++
        }
    }
    return k
    
};

console.log(removeDuplicates([1,1,2,2,2,3,4,4]))