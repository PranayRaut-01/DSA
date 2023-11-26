// Find the number that appears once, and the other numbers twice
// Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.



//optimal approach xor property
function getSingleEl(arr) {
    let xorr = 0
    for(let i=0;i<arr.length;i++){
        xorr = xorr ^ arr[i]    // xor property 1^1 = 0 , 0^1 =1
    }
    return xorr   
}

console.log(getSingleEl([1,1,2,3,3,4,4]))