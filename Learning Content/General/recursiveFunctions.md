Recursive functions can be categorized into several common patterns, each serving different kinds of problems. Below, I'll outline some of these patterns and provide code examples to illustrate how each pattern is implemented.

### 1. **Simple Recursive Call**

This is the most basic form of recursion, where a function calls itself to solve a smaller instance of the same problem.

```python
def factorial(n):
    # Base case: factorial of 0 is 1
    if n == 0:
        return 1
    # Recursive case: n! = n * (n-1)!
    else:
        return n * factorial(n-1)
```
Time Complexity: O(n) - The recursion occurs n times before reaching the base case, making a total of n function calls.
Space Complexity: O(n) - Due to the call stack used for recursion, where n function calls will be stored in the stack.

### 2. **Divide and Conquer**

This pattern involves breaking the problem into smaller subproblems of the same type, solving these subproblems recursively, and combining their solutions.

```python
def mergeSort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        mergeSort(L) # Sorting the first half
        mergeSort(R) # Sorting the second half

        # Merge the sorted halves
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        # Checking if any element was left
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
```

Time Complexity: O(n log n) - The array is repeatedly divided in half (log n splits), and each level of the recursive tree processes n elements in total.
Space Complexity: O(n) - Merge sort requires additional space for the temporary arrays, and the maximum number of stack frames is log(n), but the space for the elements dominates.

### 3. **Backtracking**

Backtracking is used for searching all possible solutions to a problem. The algorithm tries to build a solution incrementally, one piece at a time, removing solutions that fail to satisfy the constraints of the problem at any point in time (backtracking).

```python
def permute(arr, start=0):
    if start == len(arr) - 1:
        print(arr)
    for i in range(start, len(arr)):
        # swap
        arr[start], arr[i] = arr[i], arr[start]
        # recurse
        permute(arr, start + 1)
        # backtrack
        arr[start], arr[i] = arr[i], arr[start]
```

Time Complexity: O(n!) - There are n! permutations of a list, and the algorithm generates all of them.
Space Complexity: O(n) - The depth of the recursion tree goes n levels deep, and the system needs to store all the stack frames.

### 4. **Dynamic Programming with Memoization**

Dynamic programming uses recursion to solve subproblems and memorizes the results to avoid redundant calculations. Memoization is a common technique used in dynamic programming to improve efficiency.

```python
def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
```

Time Complexity: O(n) - Each number from 1 to n is calculated once due to memoization, which eliminates the exponential time complexity of the naive recursive approach.
Space Complexity: O(n) - The memoization dictionary stores up to n key-value pairs, and the recursive stack also goes up to n levels deep.

### 5. **Depth-First Search (DFS) in Graphs or Trees**

DFS is a type of recursion used to traverse or search tree or graph data structures. The algorithm starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking.

```python
def dfs(node, visited=None):
    if visited is None:
        visited = set()
    visited.add(node)
    print(node)
    for neighbour in node.neighbours:
        if neighbour not in visited:
            dfs(neighbour, visited)
```

Time Complexity: O(V + E) - Where V is the number of vertices and E is the number of edges in the graph. Each vertex and edge is visited once.
Space Complexity: O(V) - In the worst case, the stack will have all vertices on it, plus the visited set will contain all vertices.

### 6. **Tail Recursion**

Tail recursion is a special case of recursion where the recursive call is the last operation in the function. Some languages and compilers can optimize tail recursive calls to avoid adding a new stack frame for the recursive call.

```python
def factorial(n, accumulator=1):
    if n == 0:
        return accumulator
    else:
        return factorial(n-1, n * accumulator)
```

Time Complexity: O(n) - Similar to the simple recursive call, it makes n recursive calls.
Space Complexity: O(n) - However, if the programming language/compiler supports tail call optimization (TCO), this can be reduced to O(1). Without TCO, it requires space for n stack frames.

These examples cover a range of common recursive patterns, each useful for different kinds of problems. Understanding these patterns and when to apply them is key to solving complex problems more efficiently.