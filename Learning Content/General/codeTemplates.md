### Two Pointers: One Input, Opposite Ends
```javascript
function twoPointersOppositeEnds(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        // do some logic here with left and right
        if (CONDITION) {
            left++;
        } else {
            right--;
        }
    }
}
```

### Two Pointers: Two Inputs, Exhaust Both
```javascript
function twoPointersTwoInputs(arr1, arr2) {
    let i = 0, j = 0, ans = 0;
    
    while (i < arr1.length && j < arr2.length) {
        // do some logic here
        if (CONDITION) {
            i++;
        } else {
            j++;
        }
    }

    while (i < arr1.length) {
        // do logic
        i++;
    }

    while (j < arr2.length) {
        // do logic
        j++;
    }

    return ans;
}
```

### Sliding Window
```javascript
function slidingWindow(arr, k) {
    let left = 0, ans = 0, curr = 0;

    for (let right = 0; right < arr.length; right++) {
        // do logic here to add arr[right] to curr

        while (WINDOW_CONDITION_BROKEN) {
            // remove arr[left] from curr
            left++;
        }

        // update ans
    }

    return ans;
}
```

### Build a Prefix Sum
```javascript
function buildPrefixSum(arr) {
   let prefix = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        prefix.push(prefix[prefix.length - 1] + arr[i]);
    }

    return prefix;
}
```

### Efficient String Building
```javascript
// arr is a list of characters
let fn = arr => {
    let ans = [];
    for (const c of arr) {
        ans.push(c);
    }

    return ans.join("")
}
// In JavaScript, benchmarking shows that concatenation with += is faster than using .join().
let fn = arr => {
    let ans = "";
    for (const c of arr) {
        ans += c;
    }

    return ans;
}
```

### Linked List: Fast and Slow Pointer
```javascript
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    return false; // No cycle
}
```

### Reversing a Linked List
```javascript
function reverseLinkedList(head) {
    let curr = head;
    let prev = null;
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}
```

### Find Number of Subarrays That Fit an Exact Criteria
```javascript
function findSubarrays(arr, target) {
    let counts = new Map();
    counts.set(0, 1);
    let ans = 0, curr = 0;

    for (const num of arr) {
        // do logic to change curr
        ans += counts.get(curr - k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1);
    }

    return ans;
}
```

### Monotonic Increasing Stack
```javascript
function monotonicIncreasingStack(nums) {
    let stack = [];
    for (let num of nums) {
        while (stack.length > 0 && stack[stack.length - 1] > num) {
            stack.pop();
        }
        stack.push(num);
    }
    return stack;
}
``` 

### Binary Tree: DFS (Recursive)
```javascript
let dfs = root => {
    if (!root) {
        return;
    }

    let ans = 0;

    // do logic
    dfs(root.left);
    dfs(root.right);
    return ans;
}
```

### Binary Tree: DFS (Iterative)
```javascript
let dfs = root => {
    let stack = [root];
    let ans = 0;

    while (stack.length) {
        let node = stack.pop();
        // do logic
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }

    return ans;
}
```

### Binary Tree: BFS
```javascript
function bfs(root) {
    let queue = [root];
    let ans = 0;

    while (queue.length) {
        let currentLength = queue.length;
        // do logic for current level

        let nextQueue = [];

        for (let i = 0; i < currentLength; i++) {
            let node = queue[i];
            // do logic
            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        }

        queue = nextQueue;
    }

    return ans;
}
```
Certainly! I'll continue with the thorough and formatted JavaScript code templates for the remaining patterns you've listed, following the detailed style as shown in your example.

### Graph: DFS (Recursive)
Assume the graph is represented as an adjacency list.

```javascript
function dfsRecursive(node, visited, graph) {
    if (visited[node]) return;
    visited[node] = true;
    // Process the node

    for (let neighbor of graph[node]) {
        dfsRecursive(neighbor, visited, graph);
    }
}

let fn = graph => {
    let dfs = node => {
        let ans = 0;
        // do some logic
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                ans += dfs(neighbor);
            }
        }

        return ans;
    }

    let seen = new Set([START_NODE]);
    return dfs(START_NODE);
}
```

Usage example:
```javascript
let visited = Array(graph.length).fill(false);
dfsRecursive(0, visited, graph); // Assuming 0 as the starting node
```

### Graph: DFS (Iterative)
Assume the graph is represented as an adjacency list.

```javascript
function dfsIterative(start, graph) {
    let visited = Array(graph.length).fill(false);
    let stack = [start];

    while (stack.length > 0) {
        let node = stack.pop();
        if (visited[node]) continue;
        visited[node] = true;
        // Process the node

        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                stack.push(neighbor);
            }
        }
    }
}

let fn = graph => {
    let stack = [START_NODE];
    let seen = new Set([START_NODE]);
    let ans = 0;

    while (stack.length) {
        let node = stack.pop();
        // do some logic
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                stack.push(neighbor);
            }
        }
    }

    return ans;
}
```

### Graph: BFS
Assume the graph is represented as an adjacency list.

```javascript
function bfs(start, graph) {
    let visited = Array(graph.length).fill(false);
    let queue = [start];

    while (queue.length > 0) {
        let node = queue.shift();
        if (visited[node]) continue;
        visited[node] = true;
        // Process the node

        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                queue.push(neighbor);
            }
        }
    }
}

let fn = graph => {
    let queue = [START_NODE];
    let seen = new Set([START_NODE]);
    let ans = 0;

    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];

        for (let i = 0; i < currentLength; i++) {
            let node = queue[i];
            // do some logic
            for (const neighbor of graph[node]) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }

        queue = nextQueue;
    }

    return ans;
}
```

### Find Top k Elements with Heap
This template assumes you're using a library that provides a heap/priority queue. JavaScript doesn't have a built-in heap, but you can use libraries like `heap-js`.

```javascript
const MaxHeap = require('heap-js').MaxHeap;

function findTopKElements(nums, k) {
    let maxHeap = new MaxHeap();
    nums.forEach(num => maxHeap.push(num));

    let topK = [];
    for (let i = 0; i < k; i++) {
        if (maxHeap.isEmpty()) break;
        topK.push(maxHeap.pop());
    }
    return topK;
}
```

### Binary Search
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            // do something
            return;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // left is the insertion point
    return left;
}
```
Sure, I'll continue with the rest of the JavaScript code templates for the patterns you've listed.

### Binary Search: Duplicate Elements, Left-Most Insertion Point
```javascript
function leftMostBinarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] >= target) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans; // Returns the left-most index at which target should be inserted
}
```

### Binary Search: Duplicate Elements, Right-Most Insertion Point
```javascript
function rightMostBinarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] <= target) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans; // Returns the right-most index at which target should be inserted
}
```

### Binary Search for Greedy Problems
- **Looking for a minimum:**
```javascript
function binarySearchMin(arr, isFeasible) {
    let left = 0, right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (isFeasible(mid)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans; // Returns the minimum element that satisfies isFeasible
}

let fn = arr => {
    let check = x => {
        // this function is implemented depending on the problem
        return BOOLEAN;
    }

    let left = MINIMUM_POSSIBLE_ANSWER;
    let right = MAXMIMUM_POSSIBLE_ANSWER;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
```

- **Looking for a maximum:**
```javascript
function binarySearchMax(arr, isFeasible) {
    let left = 0, right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (isFeasible(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans; // Returns the maximum element that satisfies isFeasible
}

let fn = arr => {
    let check = x => {
        // this function is implemented depending on the problem
        return BOOLEAN;
    }

    let left = MINIMUM_POSSIBLE_ANSWER;
    let right = MAXMIMUM_POSSIBLE_ANSWER;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}
```

### Backtracking
```javascript
function backtrack(start, path, used, results) {
    // base case: if path is complete, add to results (or return true, etc.)
    if (path.length === targetLength) {
        results.push([...path]); // Or handle the complete path as needed
        return;
    }

    for (let i = start; i < options.length; i++) {
        if (!used[i]) {
            path.push(options[i]);
            used[i] = true;
            backtrack(i + 1, path, used, results);
            path.pop();
            used[i] = false;
        }
    }
}

let fn = arr => {
    let check = x => {
        // this function is implemented depending on the problem
        return BOOLEAN;
    }

    let left = MINIMUM_POSSIBLE_ANSWER;
    let right = MAXMIMUM_POSSIBLE_ANSWER;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}
```

### Dynamic Programming: Top-Down Memoization
```javascript
function dpTopDown(n, memo) {
    if (n in memo) return memo[n];
    if (n <= baseCase) return baseValue; // base case

    // recurrence relation
    memo[n] = someFunction(dpTopDown(n - 1, memo), dpTopDown(n - 2, memo));
    return memo[n];
}
```

### Build a Trie
```javascript
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
}
```

### Dijkstra's Algorithm
Assuming we have a graph represented as an adjacency list where `graph[u] = [[v, weight], ...]`.

```javascript
function dijkstra(graph, start) {
    let distances = Array(graph.length).fill(Infinity);
    distances[start] = 0;
    let pq = new MinPriorityQueue({ priority: (x) => x[1

] });
    pq.enqueue([start, 0]);

    while (!pq.isEmpty()) {
        let [u, dist] = pq.dequeue().element;
        if (dist > distances[u]) continue;
        for (let [v, weight] of graph[u]) {
            let nextDist = dist + weight;
            if (nextDist < distances[v]) {
                distances[v] = nextDist;
                pq.enqueue([v, nextDist]);
            }
        }
    }

    return distances;
}
```
