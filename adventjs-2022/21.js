function printTable(gifts) {
  let maxGiftLength = 4,
    maxQuantityLength = 8;
  gifts.forEach((x) => {
    maxGiftLength = Math.max(maxGiftLength, x.name.length);
    maxQuantityLength = Math.max(
      maxQuantityLength,
      x.quantity.toString().length
    );
  });

  let result = "+".repeat(maxGiftLength + maxQuantityLength + 7) + "\n";
  result += `| Gift${" ".repeat(maxGiftLength - 4)} | Quantity${" ".repeat(
    maxQuantityLength - 8
  )} |\n`;
  result += `| ${"-".repeat(maxGiftLength)} | ${"-".repeat(
    maxQuantityLength
  )} |\n`;
  gifts.forEach((x) => {
    result += `| ${x.name}${" ".repeat(maxGiftLength - x.name.length)} | ${
      x.quantity
    }${" ".repeat(maxQuantityLength - x.quantity.toString().length)} |\n`;
  });
  result += "*".repeat(maxGiftLength + maxQuantityLength + 7);
  return result;
}

printTable([
  { name: "PlayStation 5", quantity: 9234782374892 },
  { name: "Book Learn Web Dev", quantity: 23531 },
]);

// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************
