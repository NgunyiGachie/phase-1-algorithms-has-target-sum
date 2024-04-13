function hasTargetSum(array, target) {
  const seen = new Set();
  for (const num of array) {
   const diff = target - num;

     if (seen.has(diff)) {
        return true;
    }

    seen.add(num);
}


return false;
}
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));
console.log(hasTargetSum([1, 2, 5], 4));
/* 
  O(n)
*/

/* 
  Input: Find two numbers in an array when added equals the target.
  Output: Return true if there are two numbers that equal the target in the array and false if not.
*/

/*
  Create a new set of seen numbers using the declaration cost seen = new Set();
  Iterate through the array using the for loop. The function then calculates a difference between the target number and the current number. If the difference is in the set, the function returns true. If the difference is not there, it is added to the current set.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
