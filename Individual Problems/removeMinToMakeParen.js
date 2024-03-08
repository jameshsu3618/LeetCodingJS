var minRemoveToMakeValid = function(s) {
  let openP = [];
  let remove = new Set();
  let result = "";
  for (let i = 0; i < s.length; i ++) {
      if (s[i] === '(' ) {
          openP.push(i);
      }
      if (s[i] === ')') {
          if (openP.length > 0) {
              openP.pop();
          }
          else {
              remove.add(i);
          }
      }
  }
  openP.forEach((i) => remove.add(i));
  for (let i = 0; i < s.length; i++) {
      if (remove.has(i)) continue;
      result += s[i];
  }
  return result;
};