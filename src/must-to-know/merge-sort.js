/**
 * Merge sort algorithm
 * @param arr
 * @param leftArrayStart
 * @param leftArrayEnd
 * @param rightArrayStart
 * @param righArrayEnd
 * @returns {*}
 */
export function mergeSort(arr,
                          leftArrayStart = 0,
                          leftArrayEnd = Math.floor((arr.length) / 2),
                          rightArrayStart = Math.floor((arr.length) / 2) + 1,
                          righArrayEnd = arr.length - 1) {
  if (arr.length === 1) {
    return arr[0];
  }
  sort(mergeSort());
}

export function mergeSortedArrays(arr1, arr2) {
  if (!Array.isArray(arr1)|| !Array.isArray(arr2)) {
    return 'invalid input';
  }
  let i = 0, j = 0, k = 0, arr3 = [];
  while ( i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr3[k++] = arr1[i++];
    } else {
      arr3[k++] = arr2[j++];
    }
  }
  if (i >= arr1.length) {
    for (j; j < arr2.length; j++) {
      arr3[k++] = arr2[j];
    }
  } else {
    for (i; i < arr1.length; i++) {
      arr3[k++] = arr1[i];
    }
  }
  return arr3;
}
