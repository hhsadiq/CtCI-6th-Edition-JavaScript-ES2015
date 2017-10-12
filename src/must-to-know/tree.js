import {Queue} from './queue';

export class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  breadthFirstSearch(callback) {
    const q = new Queue();
    callback(this.value);
    this.children.forEach((node) => q.enqueue(node));
    while (!q.isEmpty()) {
      const node = q.dequeue();
      callback(node.value);
      node.forEach((value) => q.enqueue(value));
    }
  }
}
