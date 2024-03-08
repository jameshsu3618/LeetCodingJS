// two pass
var isPalindrome = function(s) {
  let parsed = ""
  for (str of s) {
      if (str.charCodeAt(0) >= "a".charCodeAt(0) && str.charCodeAt(0) <= "z".charCodeAt(0)) {
          parsed += str;
      }
      if (str.charCodeAt(0) >= "0".charCodeAt(0) && str.charCodeAt(0) <= "9".charCodeAt(0)) {
          parsed += str;
      }
      if (str.charCodeAt(0) >= "A".charCodeAt(0) && str.charCodeAt(0) <= "Z".charCodeAt(0)) {
          parsed += str.toLowerCase();
      }
  }
  let j = 0, k = parsed.length-1;

  while (j <= k ) {
      if (parsed[j] !== parsed[k]) return false;
      j ++;
      k --;
  }
  return true
};

// one pass.
var isPalindrome = function(s) {
  let i = 0;
  let j = s.length-1;
  while (i <= j) {
      while (i < s.length && !isAlphaNumeric(s[i])) i++;
      while (j >= 0 && !isAlphaNumeric(s[j])) j--;
      if (i <= j && s[i].toLowerCase() !== s[j].toLowerCase()) return false
      i++;
      j--;
  }
  return true;
};

function isAlphaNumeric(str) {
  if (str.length === 0) return false;
  
  return (str.charCodeAt(0) >= "a".charCodeAt(0) && str.charCodeAt(0) <= "z".charCodeAt(0)
      || str.charCodeAt(0) >= "0".charCodeAt(0) && str.charCodeAt(0) <= "9".charCodeAt(0)
      || str.charCodeAt(0) >= "A".charCodeAt(0) && str.charCodeAt(0) <= "Z".charCodeAt(0))
}

//using regex
var isPalindrome = function(s) {
  // Define a function to filter out non-alphabetic characters from a string
  const filterNonAlphabet = (str) => {
      return str.replace(/[^0-9a-zA-Z]/g, '');
  };

  // Filter out non-alphabetic characters
  s = filterNonAlphabet(s);

  // Convert the string to lowercase for case-insensitive comparison
  s = s.toLowerCase();

  // Reverse the string using built-in methods
  let rev_s = s.split('').reverse().join('');

  // Check if the reversed string is equal to the original string
  return rev_s === s;
};