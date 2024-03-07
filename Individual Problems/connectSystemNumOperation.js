/*
There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network where connections[i] = [ai, bi] represents a connection between computers ai and bi. Any computer can reach any other computer directly or indirectly through the network.

You are given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected.

Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return -1.

 */


// DFS

var makeConnected = function(n, connections) {
  if (connections.length < n - 1) return -1;

  const graph = Array.from({length: n}, () => []);
  for (const [u, v] of connections) {
      graph[u].push(v);
      graph[v].push(u);
  }

  const visited = new Array(n).fill(false);

  const dfs = (node) => {
      visited[node] = true;
      for (const neighbor of graph[node]) {
          if (!visited[neighbor]) {
              dfs(neighbor);
          }
      }
  };

  let components = 0;
  for (let i = 0; i < n; i++) {
      if (!visited[i]) {
          dfs(i);
          components++;
      }
  }

  return components - 1;
};

// BFS
var makeConnected = function(n, connections) {
  if (connections.length < n - 1) return -1;

  const graph = Array.from({length: n}, () => []);
  for (const [u, v] of connections) {
      graph[u].push(v);
      graph[v].push(u);
  }

  const visited = new Array(n).fill(false);

  const bfs = (start) => {
      const queue = [start];
      visited[start] = true;
      while (queue.length > 0) {
          const node = queue.shift();
          for (const neighbor of graph[node]) {
              if (!visited[neighbor]) {
                  visited[neighbor] = true;
                  queue.push(neighbor);
              }
          }
      }
  };

  let components = 0;
  for (let i = 0; i < n; i++) {
      if (!visited[i]) {
          bfs(i);
          components++;
      }
  }

  return components - 1;
};

// union
function find(parent, i) {
  if (parent[i] !== i) {
      parent[i] = find(parent, parent[i]);
  }
  return parent[i];
}

function union(parent, rank, x, y) {
  let rootX = find(parent, x);
  let rootY = find(parent, y);
  if (rootX !== rootY) {
      if (rank[rootX] > rank[rootY]) {
          parent[rootY] = rootX;
      } else if (rank[rootX] < rank[rootY]) {
          parent[rootX] = rootY;
      } else {
          parent[rootY] = rootX;
          rank[rootX] += 1;
      }
  }
}

var makeConnected = function(n, connections) {
  if (connections.length < n - 1) return -1;
  let parent = Array.from({length: n}, (_, i) => i);
  let rank = new Array(n).fill(0);
  
  for (let [x, y] of connections) {
      union(parent, rank, x, y);
  }
  
  let components = new Set();
  for (let i = 0; i < n; i++) {
      components.add(find(parent, i));
  }
  
  return components.size - 1;
};