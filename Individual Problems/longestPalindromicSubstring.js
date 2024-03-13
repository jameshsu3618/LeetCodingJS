/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let n = s.length;
  let start = 0;
  let maxLen = 1;
  let dp = Array.from({ length: n }, ()=> new Array(n).fill(false));
  
  for (let i = 0; i < n; i++) {
      dp[i][i] = true;
  }

  for (let i = 0; i < n; i++) {
      if (s[i] === s[i+1]) {
          dp[i][i+1] = true;
          start = i;
          maxLen = 2;
      }
  }

  for (let len = 3; len <= n; len++ ) {
      for (let i = 0; i < n - len + 1; i++) {
          let j = i + len - 1;
          if (s[i] == s[j] && dp[i+1][j-1]) {
              dp[i][j] = true;
              start = i;
              maxLen = len;
          }
      }
  }

  return s.slice(start, start+maxLen);
};

// brute force

