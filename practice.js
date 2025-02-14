function changeString(word) {
  return word.split("").reverse().join("");
}
console.log(changeString("Hello"));

function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}
console.log(isPalindrome("racecar"));

function checkpalindrome(string) {
  return string === string.split("").reverse().join("");
}
console.log(checkpalindrome("hello"));
// Find Maximum & Minimum in a List

// Ek function likho jo kisi bhi list mein se sabse bara aur sabse chhota number return kare.
// Example: [10, 3, 5, 8, 2] → (10, 2)

function LargeSmall(arr) {
  return [Math.max(...arr), Math.min(...arr)];
}
console.log(LargeSmall([15, 10, 5, 2, 8, 3, 1]));

function findMinMax(numArr) {
  return [Math.max(...numArr), Math.min(...numArr)];
}
console.log(findMinMax([5, 100, 2, 0, 1, -1, 8]));

// Count Vowels in a String

// Ek function likho jo kisi bhi string mein vowels (a, e, i, o, u) ki count return kare.
// Example: "hello world" → 3

function checkvowels(word) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let char of word.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(checkvowels("eeliyane"));

function vowelsCount(string) {
  let count = 0;
  let vowelschar = ["a", "e", "i", "o", "u"];
  for (let charac of string.toLowerCase()) {
    if (vowelschar.includes(charac)) {
      count++;
    }
  }
  return count;
}

console.log(vowelsCount("Hinaa"));

// Even or Odd Check

// Ek function likho jo check kare ke diya gaya number even hai ya odd.
// Example: 5 → Odd, 8 → Even

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
}
console.log(checkEvenOdd(8));

// Find the Missing Number

// Ek function likho jo n numbers ki ek list mein se ek missing number ko dhunday.
// Example: [1, 2, 4, 5] → 3
