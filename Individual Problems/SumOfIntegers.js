// using bits

var getSum = function(a, b) {
  while (b != 0) {
      // Carry now contains common set bits of a and b
      let carry = (a & b) << 1; // &  is AND
      
      // Sum of bits of a and b where at least one of the bits is not set
      a = a ^ b; // ^ is XOR
      
      // Carry is shifted by one so that adding it to a gives the required sum
      b = carry;
  }
  return a;
};