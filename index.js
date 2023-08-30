function isPalindrome(word) {
  // Write your algorithm here
  let drow = ''
  for(letter of word){
    drow = letter + drow
  }
  return drow.toLowerCase() === word.toLowerCase()
}

/* 
  drow = ""
  for letter of word
    drow = letter + drow
  if drow === word
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  The for loop will iterate through each character in the string and add it to the beginning creating
  a backwards string for word (drow is backwards word). if the two are equal then it will return true
  if not it will return false. setting the original drow to an empty string is also important as it 
  will keep the undefined if you just append the letters to it. I also added a toLowerCase to the if
  statement because a palindrom may have altered capitalization without losing its status as a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false")
  console.log('=>', isPalindrome("Jakob"))

  console.log("")

  console.log("Expecting: true")
  console.log("=>", isPalindrome("Radar"))

  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
