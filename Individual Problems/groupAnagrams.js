/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/
// O (N K log K) (needs sort)
var groupAnagrams = function(strs) {
  let ansMap = new Map();
  for (let str of strs) {
      const sortedStr = str.split('').sort().join('');
      if (ansMap.has(sortedStr)){
          ansMap.set(sortedStr, [...ansMap.get(sortedStr), str]);
      } else {
          ansMap.set(sortedStr, [str]);
      }
  }
  return [...ansMap.values()];
};

// save as hash of count instead of sort O(N K)
var groupAnagrams = function(strs) {
  let ansMap = new Map();
  for (let str of strs) {
      let charCodeHash = new Array(26).fill(0);
      for (char of str) {
          charCodeHash[char.charCodeAt(0) - "a".charCodeAt(0)]++;
      }
      charCodeHash = charCodeHash.toString();
      if (ansMap.has(charCodeHash)) {
          ansMap.set(charCodeHash, [...ansMap.get(charCodeHash), str]);
      } else {
          ansMap.set(charCodeHash, [str])
      }
  }
  return [...ansMap.values()];
};