function checkJump(heights) {
  let reachHigh = false;
  let currentHigh = heights[0];

  for (let i = 1; i < heights.length; i++) {
    if (!reachHigh) {
      if (currentHigh !== heights[i]) {
        currentHigh < heights[i]
          ? (currentHigh = heights[i])
          : (reachHigh = true);
      }
    } else {
      if (heights[i - 1] < heights[i]) return false;
    }
  }
  return reachHigh;
}

function checkJumpOptimized(heights) {
  const maxHeightIndex = heights.indexOf(Math.max(...heights));

  return (
    maxHeightIndex > 0 &&
    maxHeightIndex !== heights.length - 1 &&
    heights
      .slice(1, maxHeightIndex + 1)
      .every((height, index) => height >= heights[index]) &&
    heights
      .slice(maxHeightIndex + 1)
      .every((height, index) => height <= heights[index + maxHeightIndex])
  );
}

const heights = [1, 3, 8, 5, 2];
checkJump(heights); // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights2 = [1, 7, 3, 5];
checkJump(heights2); // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/
