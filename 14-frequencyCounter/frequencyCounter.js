function frequencyCounter(word) {
  // Insert code here;
  var freqCount = {}
  for (let i = 0; i< word.length; i++){
    var c = word.charAt(i)
    if (freqCount [c]){
      freqCount[c]++;
    }
    else {
      freqCount[c] = 1
    }
  }
  return freqCount
}

// Do not edit this line;
module.exports = frequencyCounter;