import { expect } from 'chai';
import {
  Tree
} from './tree';
import { sampleTree } from './common-cases.spec';

describe('tree', function () {
  it('Generate the tree', () => {
    expect(new Tree(sampleTree).root)
      .to
      .eql(sampleTree);
  });

  const myTree = new Tree(sampleTree);
  let traversalResult = [];
  const iterator = (value) => {
    traversalResult.push(value);
  };

  it('Breadth first search', () => {
    traversalResult = [];
    myTree.breadthFirstTraversal(iterator);
    expect(traversalResult)
      .to
      .eql([1, 2, 12, 3, 4, 5, 9, 11, 13, 20, 6, 7, 8, 10, 14, 15, 16, 17, 18, 19]);
  });

  it('Depth first search', () => {
    traversalResult = [];
    myTree.depthFirstTraversal(iterator);
    expect(traversalResult)
      .to
      .eql([3, 4, 6, 7, 8, 5, 10, 9, 11, 2, 15, 16, 17, 18, 19, 14, 13, 20, 12, 1]);
  });

  it('Should return sum of each path', () => {
    expect(myTree.sumOfEachPath())
      .to
      .eql([6, 7, 14, 15, 16, 22, 14, 55, 56, 57, 58, 59, 33]);
  });

  it('Should return minimum of path sums', () => {
    expect(myTree.minimumOfPathSums())
      .to
      .eql(6);
  });
});
