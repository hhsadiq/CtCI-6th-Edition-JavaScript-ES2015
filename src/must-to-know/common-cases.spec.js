export const sortingCases = [
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

export const sampleTree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
          children: [
          ]
        },
        {
          value: 4,
          children: [
          ]
        },
        {
          value: 5,
          children: [
            {
              value: 6,
              children: [
              ]
            },
            {
              value: 7,
              children: [
              ]
            },
            {
              value: 8,
              children: [
              ]
            }
          ]
        },
        {
          value: 9,
          children: [
            {
              value: 10,
              children: [
              ]
            }
          ]
        },
        {
          value: 11,
          children: [
          ]
        }
      ]
    },
    {
      value: 12,
      children: [
        {
          value: 13,
          children: [
            {
              value: 14,
              children: [
                {
                  value: 15,
                  children: [
                  ]
                },
                {
                  value: 16,
                  children: [
                  ]
                },
                {
                  value: 17,
                  children: [
                  ]
                },
                {
                  value: 18,
                  children: [
                  ]
                },
                {
                  value: 19,
                  children: [
                  ]
                }
              ]
            }
          ]
        },
        {
          value: 20,
          children: [
          ]
        }
      ]
    }
  ]
};
