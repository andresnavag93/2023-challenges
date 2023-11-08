function getOptimalPath(path) {
  return path.reduceRight((previous, current) =>
    current.map((v, i) => v + Math.min(previous[i], previous[i + 1]))
  )[0];
}

function getOptimalPath2(path) {
  const getMinimumSumPath = (row, column) => {
    if (row === path.length) return 0;

    return (
      path[row][column] +
      Math.min(
        getMinimumSumPath(row + 1, column),
        getMinimumSumPath(row + 1, column + 1)
      )
    );
  };

  const optimalPath = getMinimumSumPath(0, 0);
  return optimalPath;
}

getOptimalPath([[0], [2, 3]]); // 2
// 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]); // 5
// 0 -> 4 -> 1

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]); // 8
// 1 -> 1 -> 5 -> 1
