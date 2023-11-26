//Union of Two Sorted Arrays
//Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

//The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

// Time complexity O(n)
// Space complexity O(1)
function unionArr(arr1,arr2){
    let i=0,j=0
    let union =[]
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            union.push(arr1[i])
            while(arr1[i+1]==arr1[i]) i++
            i++   
        }else if(arr1[i]==arr2[j]){
            union.push(arr1[i])
            i++;
            j++
        }else{
            union.push(arr2[j])
            while(arr2[j+1]==arr2[j]) j++
            j++   
        }
    }
    while(i<arr1.length){
        union.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        union.push(arr2[j])
        j++
    }
    return union

}

console.log(unionArr([1,1,2,3,4,5],[2,3,4,4,5,6]))