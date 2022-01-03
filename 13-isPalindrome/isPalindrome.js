function isPalindrome(word) {
  // Insert code here;
  var rev = word.split("").reverse().join("")
  return rev === word
}


// Do not edit this line;
module.exports = isPalindrome;