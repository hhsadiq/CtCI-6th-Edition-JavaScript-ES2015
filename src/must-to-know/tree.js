import {Queue} from './queue';
import {
  Tree as sampleTree
} from './tree';

export class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  breadthFirstSearch(callback) {
    const q = new Queue();
    callback(this.value);
    this.children.forEach((value) => q.enqueue(value));
    while (!q.isEmpty()) {
      const node = q.dequeue();
      callback(node.value);
      node.forEach((value) => q.enqueue(value));
    }
  }
}


const myTree = new Tree(sampleTree.value, sampleTree.children);
const traversalResult = [];
const BFSIterator = (value) => {
  traversalResult.push(value);
};
myTree.breadthFirstSearch(BFSIterator);
