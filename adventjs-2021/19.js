export default function learn(time, courses) {
  const visited = {};
  const possibleResult = {};
  const array = courses.map((current, index) => {
    if (visited.hasOwnProperty(current)) {
      visited[current].push(index);
    } else {
      visited[current] = [index];
    }
    return { current, index };
  });

  for (let i = 0; i < array.length; i++) {
    let firstItem = array[i];
    if (firstItem.current >= time) {
      continue;
    }

    let timeResult = Math.abs(time - firstItem.current);

    while (timeResult > 0) {
      let key = timeResult + firstItem.current;
      let sameValue = timeResult === firstItem.current;

      if (key === time) {
        if (sameValue) {
          if (
            visited.hasOwnProperty(timeResult) &&
            visited[timeResult].length > 1
          ) {
            return [
              firstItem.index,
              visited[timeResult].find((x) => x != firstItem.index),
            ];
          }
        } else {
          if (visited.hasOwnProperty(timeResult)) {
            return [
              firstItem.index,
              visited[timeResult].find((x) => x != firstItem.index),
            ];
          }
        }
      } else {
        if (sameValue) {
          if (
            visited.hasOwnProperty(timeResult) &&
            visited[timeResult].length > 1
          ) {
            if (!possibleResult.hasOwnProperty(key)) {
              possibleResult[key] = [];
            }
            possibleResult[key].push([
              firstItem.index,
              visited[timeResult].find((x) => x != firstItem.index),
            ]);
          }
        } else {
          if (visited.hasOwnProperty(timeResult)) {
            if (!possibleResult.hasOwnProperty(key)) {
              possibleResult[key] = [];
            }
            possibleResult[key].push([
              firstItem.index,
              visited[timeResult].find((x) => x != firstItem.index),
            ]);
          }
        }
      }
      timeResult--;
    }
  }

  while (time > 0) {
    if (possibleResult.hasOwnProperty(time)) {
      return possibleResult[time][0];
    }
    time--;
  }
  return null;
}

// learn(10, [2, 3, 8, 1, 4]); // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

// learn(15, [2, 10, 4, 1]); // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

// learn(25, [10, 15, 20, 5]); // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

// learn(8, [8, 2, 1]); // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

// learn(8, [8, 2, 1, 4, 3]); // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

// learn(4, [10, 14, 20]); // null -> no nos da tiempo a hacer dos cursos

// learn(5, [5, 5, 5]); // null -> no nos da tiempo a hacer dos cursos

function learn2(time, courses) {
  const current = { sum: 0, key: [0, 0] };
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      let courseOne = courses[i];
      let courseTwo = courses[j];
      const sumTime = courseOne + courseTwo;
      if (sumTime === time) {
        return [i, j];
      } else if (sumTime < time) {
        if (current.sum < sumTime) {
          current.sum = sumTime;
          current.key[0] = i;
          current.key[1] = j;
        }
      }
    }
  }
  if (current.sum > 0) {
    return current.key;
  }

  return null;
}
