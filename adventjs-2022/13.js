function getFilesToBackup(lastBackup, changes) {
  const filterArray = changes.filter((x) => x[1] > lastBackup).map((x) => x[0]);
  return [...new Set(filterArray)].sort((a, b) => a - b);
}

const lastBackup = 1546300800;
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];

getFilesToBackup(lastBackup, changes); // => [ 1, 3 ]
// El archivo con id 1 ha sido modificado dos veces
// después del último backup.

// El archivo con id 2 no ha sido modificado después
// del último backup.

// El archivo con id 3 ha sido modificado una vez
// después del último backup.

// Tenemos que hacer una copia de seguridad
// de los archivos 1 y 3.

function getFilesToBackup2(lastBackup, changes) {
  const filtered = changes.reduce((acc, curr) => {
    curr[1] > lastBackup ? acc.push(curr[0]) : null;
    return acc;
  }, []);
  return [...new Set(filtered)].sort((a, b) => a - b);
}

function getFilesToBackup3(lastBackup, changes) {
  return [
    ...new Set(
      changes.reduce((accArray, change) => {
        if (lastBackup < change[1]) accArray.push(change[0]);
        return accArray;
      }, [])
    ),
  ].sort();
}
