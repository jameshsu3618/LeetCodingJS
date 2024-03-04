/* 
A cafeteria table consists of a row of \( N \) seats, numbered from 1 to \( N \) from left to right. Social distancing guidelines require that every diner be seated such that \( K \) seats to their left and \( K \) seats to their right (or all the remaining seats to that side if there are fewer than \( K \)) remain empty.

There are currently \( M \) diners seated at the table, the \( i^{th} \) of whom is in seat \( S_i \). No two diners are sitting in the same seat, and the social distancing guidelines are satisfied.

Determine the maximum number of additional diners who can potentially sit at the table without social distancing guidelines being violated for any new or existing diners, assuming that the existing diners cannot move and that the additional diners will cooperate to maximize how many of them can sit down.

Please take care to write a solution that runs within the time limit.

**Constraints**
- \( 1 \leq N \leq 10^{15} \)
- \( 1 \leq K \leq N \)
- \( 1 \leq M \leq 500,000 \)
- \( M \leq N \)
- \( 1 \leq S_i \leq N \)

**Sample Test Case #1**
- \( N = 10 \)
- \( K = 1 \)
- \( M = 2 \)
- \( S = [2, 6] \)
- Expected Return Value = 3

**Sample Test Case #2**
- \( N = 15 \)
- \( K = 2 \)
- \( M = 3 \)
- \( S = [11, 6, 14] \)
- Expected Return Value = 1

**Sample Explanation**

*/

function getMaxAdditionalDinersCount(N, K, M, S) {
  // Sort the occupied seats to prepare for the calculation
  S.sort((a, b) => a - b);
    
  let additionalDinersCount = 0;
  const spacePerDiner = K + 1; // Space needed per additional diner

  // If no diners are initially seated, fit as many as possible
  if (M === 0) {
    return Math.ceil(N / spacePerDiner);
  }

  // Calculate additional diners before the first seated diner
  additionalDinersCount += Math.max(0, Math.ceil((S[0] - 1 - K) / spacePerDiner));

  // Iterate over intervals between seated diners to calculate potential additional diners
  for (let i = 1; i < M; i++) {
    let distance = S[i] - S[i - 1] - 1;
    additionalDinersCount += Math.max(0, Math.ceil((distance - 2 * K) / spacePerDiner));
  }

  // Calculate additional diners after the last seated diner
  additionalDinersCount += Math.max(0, Math.ceil((N - S[M - 1] - K) / spacePerDiner));

  return additionalDinersCount;
}
