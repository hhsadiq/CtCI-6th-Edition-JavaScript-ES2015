import {Queue} from './queue';

export class Tree {
  /**
   * Generate the tree from JSON like structure
   * @param value
   * @param children
   */
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  /**
   * Breadth first traversal
   * @param callback
   */
  breadthFirstTraversal(callback) {
    const q = new Queue();
    callback(this.value);
    this.children.forEach((node) => q.enqueue(node));
    while (!q.isEmpty()) {
      const node = q.dequeue();
      callback(node.value);
      node.children.forEach((value) => q.enqueue(value));
    }
  }
}
