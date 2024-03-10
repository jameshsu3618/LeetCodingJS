var validPalindrome = function(s) {
  function checkPalindrome(start, end, remainingDeletion) {
    while (start <= end) {
      if (s[start] !== s[end]) {
        if (remainingDeletion === 0) return false;

        return checkPalindrome(start + 1, end, remainingDeletion -1) ||
          checkPalindrome(start, end -1, remainingDeletion-1);
      }
      start ++;
      end --;
    }
  }
  return checkPalindrome(0, s.length-1, 1);
};