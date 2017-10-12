import { expect } from 'chai';
import {
  Tree
} from './tree';
import { sampleTree } from './common-cases.spec';

describe('tree', function () {
  it('Generate the tree', () => {
    expect(new Tree(sampleTree.value, sampleTree.children))
      .to
      .eql(sampleTree);
  });

  it('Breadth first search', () => {
    const myTree = new Tree(sampleTree.value, sampleTree.children);
    const traversalResult = [];
    const BFSIterator = (value) => {
      traversalResult.push(value);
    };
    myTree.breadthFirstSearch(BFSIterator);
    expect(traversalResult)
      .to
      .eql([1, 2, 12, 3, 4, 5, 9, 11, 13, 20, 6, 7, 8, 10, 14, 15, 16, 17, 18, 19]);
  });
});
