/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

var isAnagram = function(s, t) {
  let counter = new Array(26).fill(0);
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i ++) {
      counter[s.charCodeAt(i) - 'a'.charCodeAt(0)] ++;
      counter[t.charCodeAt(i) - 'a'.charCodeAt(0)] --;
  }
  for (count of counter) {
      if (count !== 0) return false;
  }
  return true;
};