export class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjList[vertex1] && this.adjList[vertex2]) {
      this.adjList[vertex1].push(vertex2);
      this.adjList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjList[vertex1] && this.adjList[vertex2]) {
      this.adjList[vertex1] = this.adjList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjList[vertex2] = this.adjList[vertex2].filter(
        (v) => v !== vertex1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (this.adjList[vertex]) {
      while (this.adjList[vertex].length) {
        let temp = this.adjList[vertex].pop();
        this.adjList[temp] = this.adjList[temp].filter((v) => v !== vertex);
      }
      delete this.adjList[vertex];
      return this;
    }
    return undefined;
  }
}
