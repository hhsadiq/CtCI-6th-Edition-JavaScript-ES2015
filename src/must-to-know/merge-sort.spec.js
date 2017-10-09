import { expect } from 'chai';
import {
  mergeSort,
  mergeSortedArrays
} from './merge-sort';

const cases = [
  {
    arr: [6, 5, 3, 1, 8, 7, 2, 4],
    expected: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    arr: [2],
    expected: [2]
  },
  {
    arr: [9, 2],
    expected: [2, 9]
  },
  {
    arr: [],
    expected: []
  },
  {
    arr: ['Hassaan', 'Ali', 'Basim'],
    expected: ['Ali', 'Basim', 'Hassaan']
  },
  {
    arr: [234, 435, 4, 23, 2, 25, 7,76,24, 756, 86, 86, 9, 234, 435, 4, 23, 2, 25, 7,76,24, 756, 86, 86, 9, 0, 2390],
    expected: [0, 2, 2, 4, 4, 7, 7, 9, 9, 23, 23, 24, 24, 25, 25, 76, 76, 86, 86, 86, 86, 234, 234, 435, 435, 756, 756, 2390],
    order: 'asc'
  },
  {
    arr: [234, 435, 4, 23, 2, 25, 7,76,24, 756, 86, 86, 9, 234, 435, 4, 23, 2, 25, 7,76,24, 756, 86, 86, 9, 0, 2390],
    expected: [2390, 756, 756, 435, 435, 234, 234, 86, 86, 86, 86, 76, 76, 25, 25, 24, 24, 23, 23, 9, 9, 7, 7, 4, 4, 2, 2, 0],
    order: 'DESC'
  },
  {
    arr: [6, 5, 3, 1, 8, 7, 2, 4],
    expected: [8, 7, 6, 5, 4, 3, 2, 1],
    order: 'DESC'
  },
  {
    arr: [6, 5, 3, 1, 8, 7, 2, 4],
    expected: [8, 7, 6, 5, 4, 3, 2, 1],
    order: 'desc'
  },
  {
    arr: [2, 9, 4, 3],
    expected: [9, 4, 3, 2],
    order: 'DESC'
  },
  {
    arr: [9, 2],
    expected: [9, 2],
    order: 'DESC'
  },
  {
    arr: [],
    expected: [],
    order: 'DESC'
  },
  {
    arr: ['Ali', 'Wajid', 'Hassaan', 'Basim'],
    expected: ['Wajid', 'Hassaan', 'Basim', 'Ali'],
    order: 'dEsC'
  }
];

describe('merge sort', function () {
  cases.forEach(context => {
    it(`Sorting ${context.arr}`, function () {
      expect(mergeSort(context.arr, context.order))
        .to
        .eql(context.expected);
    });

  });
});

describe('merge two sorted arrays', () => {
  [
    {
      arr1: [10, 19, 21, 22, 23, 24],
      arr2: [2, 3],
      expected: [2, 3, 10, 19, 21, 22, 23, 24]
    },
    {
      arr1: [2, 3],
      arr2: [10, 19, 21, 22, 23, 24],
      expected: [2, 3, 10, 19, 21, 22, 23, 24]
    },
    {
      arr1: [10],
      arr2: [2],
      expected: [2, 10]
    },
    {
      arr1: [1, 2, 3],
      arr2: [3, 4, 5],
      expected: [1, 2, 3, 3, 4, 5]
    },
    {
      arr1: [10, 19, 23, 27],
      arr2: [1, 2, 12, 21, 26, 31, 39],
      expected: [1, 2, 10, 12, 19, 21, 23, 26, 27, 31, 39]
    },
    {
      arr1: [],
      arr2: [2],
      expected: [2]
    },
    {
      arr1: [2],
      arr2: [],
      expected: [2]
    },
    {
      arr1: [],
      arr2: [],
      expected: []
    },
    {
      arr1: 12,
      arr2: 23,
      expected: 'invalid input'
    },
    {
      arr1: [12],
      arr2: 23,
      expected: 'invalid input'
    },
    {
      arr1: [24, 23, 21, 7, 4],
      arr2: [29, 25],
      order: 'DESC',
      expected: [29, 25, 24, 23, 21, 7, 4]
    },
    {
      arr1: [24],
      arr2: [29],
      order: 'DESC',
      expected: [29, 24]
    },
    {
      arr1: [24, 21],
      arr2: [29, 18],
      order: 'DESC',
      expected: [29, 24, 21, 18]
    },
    {
      arr1: [29, 25],
      arr2: [24, 23, 21, 7, 4],
      order: 'DESC',
      expected: [29, 25, 24, 23, 21, 7, 4]
    },
    {
      arr1: [2, 3],
      arr2: [10, 19, 21, 22, 23, 24],
      expected: [2, 3, 10, 19, 21, 22, 23, 24]
    },
    {
      arr1: [10],
      arr2: [2],
      expected: [2, 10]
    },
    {
      arr1: [1, 2, 3],
      arr2: [3, 4, 5],
      expected: [1, 2, 3, 3, 4, 5]
    },
    {
      arr1: [10, 19, 23, 27],
      arr2: [1, 2, 12, 21, 26, 31, 39],
      expected: [1, 2, 10, 12, 19, 21, 23, 26, 27, 31, 39]
    },
    {
      arr1: [],
      arr2: [2],
      expected: [2]
    },
    {
      arr1: [2],
      arr2: [],
      expected: [2]
    },
    {
      arr1: [],
      arr2: [],
      expected: []
    },
    {
      arr1: 12,
      arr2: 23,
      expected: 'invalid input'
    },
    {
      arr1: [12],
      arr2: 23,
      expected: 'invalid input'
    }
  ].forEach(context => {
    it(`Merging ${context.arr1} and ${context.arr2}`, () => {
      expect(mergeSortedArrays(context.arr1, context.arr2, context.order))
        .to
        .eql(context.expected);
    });
  });
});
