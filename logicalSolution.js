function reverseString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString("racecar"));

for (let i = 0; i < 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

function findMissingNumber(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2; //sum of first natural number
  let actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
console.log(findMissingNumber([3, 0, 1]));

function countVowels(string) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
countVowels("Aleena");

function twoSum(nums, target) {
  let numMap = new Map();
  console.log(numMap);
  for (let num of nums) {
    let complement = target - num;
    if (numMap.has(complement)) {
      return [complement, num];
    }
    numMap.set(num, true);
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));

function MoveZerotoEnd(nums) {
  let index = 0;
  for (let num of nums) {
    if (num !== 0) {
      nums[index++] = num;
      // console.log(nums[index++] = num)
    }
  }
  while (index < nums.length) {
    nums[index++] = 0;
    // console.log(nums[index++] = 0)
  }
  return nums;
}
console.log(MoveZerotoEnd([0, 1, 0, 3, 12]));


function isValid (s){
  let stack = []
  let brackets = {
    ")" :"(",
    "}" :"{",
    "]" :"[",
  }
}