//calculator 2
function calculate(s) {
  if (s === null || s.length === 0) return 0;
  let length = s.length;
  let currentNumber = 0, lastNumber = 0, result = 0;
  let operation = '+';
  for (let i = 0; i < length; i++) {
    let currentChar = s.charAt(i);
    if (/\d/.test(currentChar)) {
      currentNumber = (currentNumber * 10) + (currentChar - '0');
    }
    if (!/\d/.test(currentChar) && !/\s/.test(currentChar) || i === length - 1) {
      if (operation === '+' || operation === '-') {
        result += lastNumber;
        lastNumber = (operation === '+') ? currentNumber : -currentNumber;
      } else if (operation === '*') {
        lastNumber *= currentNumber;
      } else if (operation === '/') {
        lastNumber = Math.trunc(lastNumber / currentNumber);
      }
      operation = currentChar;
      currentNumber = 0;
    }
  }
  result += lastNumber;
  return result;
}

// calculator 1 with paran

calculate(s) {
  let stack = [];
  let operand = 0;
  let result = 0; // For the ongoing result
  let sign = 1;  // 1 means positive, -1 means negative

  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);

    if (/\d/.test(ch)) {
      // Forming the operand - since it could be more than one digit
      operand = (10 * operand) + (parseInt(ch, 10));
    } else if (ch === '+') {
      // Evaluate the expression to the left, with result, sign, operand
      result += sign * operand;

      // Save the recently encountered '+' sign
      sign = 1;

      // Reset operand
      operand = 0;
    } else if (ch === '-') {
      result += sign * operand;
      sign = -1;
      operand = 0;
    } else if (ch === '(') {
      // Push the result and sign onto the stack, for later
      // We push the result first, then sign
      stack.push(result);
      stack.push(sign);

      // Reset the operand and result, as if a new evaluation begins for the new sub-expression
      sign = 1;
      result = 0;
    } else if (ch === ')') {
      // Evaluate the expression to the left, with result, sign, and operand
      result += sign * operand;

      // ')' marks the end of expression within a set of parenthesis
      // Its result is multiplied with the sign on top of the stack
      // as stack.pop() is the sign before the parenthesis
      result *= stack.pop();

      // Then add to the next operand on the top of the stack
      // as stack.pop() is the result calculated before this parenthesis
      // (operand on stack) + (sign on stack * result from parenthesis)
      result += stack.pop();

      // Reset the operand
      operand = 0;
    }
  }

  return result + (sign * operand);
}