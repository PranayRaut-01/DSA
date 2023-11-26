//Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

//Note: Two consecutive equal values are considered to be sorted.

const isSorted = (arr)=>{
    let i=1;
    while(i<arr.length){
        if(arr[i]<arr[i-1]) return false
        i++
    }
    return true


}

console.log(isSorted([1,2,1,4]))
