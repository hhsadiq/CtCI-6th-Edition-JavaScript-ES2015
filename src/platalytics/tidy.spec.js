import { expect } from 'chai';
import {
  solution,
  isTidy
} from './tidy';

describe('test', function () {
  [
    {
      N: 1,
      expected: true
    },
    {
      N: 129,
      expected: true
    },
    {
      N: 132,
      expected: false
    },
    {
      N: 10,
      expected: false
    },
    {
      N: 321,
      expected: false
    },
    {
      N: 495,
      expected: false
    },
    {
      N: 9990,
      expected: false
    },
    {
      N: 999,
      expected: true
    },
    {
      N: 8,
      expected: true
    },
    {
      N: 123,
      expected: true
    },
    {
      N: 224488,
      expected: true
    },
    {
      N: 224188,
      expected: false
    }
  ].forEach(context => {
    it(`${context.N} is tidy: ${context.expected}`, function () {
      expect(isTidy(context.N))
        .to
        .eql(context.expected);
    });
  });
  [
    {
      N: 132,
      expected: 129
    },
    {
      N: 971,
      expected: 899
    },
    {
      N: 1000,
      expected: 999
    },
    {
      N: 137,
      expected: 137
    },
    {
      N: 1,
      expected: 1
    },
    {
      N: 9,
      expected: 9
    },
    {
      N: 21,
      expected: 19
    },
    {
      N: 100,
      expected: 99
    },
    {
      N: 811,
      expected: 799
    },
    {
      N: 887,
      expected: 799
    },
    {
      N: 799,
      expected: 799
    },
    {
      N: 10,
      expected: 9
    },
    {
      N: 888,
      expected: 888
    }
  ].forEach(context => {
    it(`largest tidy number from 1 to ${context.N} is ${context.expected}`, function () {
      expect(solution(context.N))
        .to
        .eql(context.expected);
    });
  });
});
