//Question:
// You are going to be given an array of integers. 
// Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.


function findEvenIndex(arr)
{
let right_sum = 0, left_sum = 0;

for (let i=1; i<arr.length; i++)
    right_sum = right_sum + arr[i];

for (let i=0, j=1; j<arr.length; i++, j++){
    right_sum = right_sum - arr[j];
    left_sum = left_sum + arr[i];
    
    if (left_sum === right_sum)
    return i+1;
}
return 

}
  
console.log(findEvenIndex([20,10,-80,10,10,15,35]))
console.log(findEvenIndex([1,2,3,4,3,2,1]))