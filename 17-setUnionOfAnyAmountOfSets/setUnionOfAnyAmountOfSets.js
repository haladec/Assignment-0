function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  return new Set([].concat(...args.map(set => [...set])))
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;