const multidimensionalFunction = (arr) => {
  let single_dimensional_arr = [];

  const flattenArr = (subArray) => {
    subArray.forEach((element) => {
      if (Array.isArray(element)) {
        flattenArr(element);
      } else {
        single_dimensional_arr.push(element);
      }
    });
  };

  flattenArr(arr);
  return single_dimensional_arr;
};

const multi_dimension_arr = [
  [
    [
      [0, 2],
      [4, 5],
    ],
    [
      [7, 8],
      [9, 3],
    ],
  ],
  [
    [
      [10, 12],
      [14, 15],
    ],
    [
      [17, 18],
      [19, 13],
    ],
  ],
];

multidimensionalFunction(multi_dimension_arr);
