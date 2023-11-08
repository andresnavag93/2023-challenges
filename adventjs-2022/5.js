function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(
    ...giftsCities
      .sort((x, y) => y - x)
      .reduce(
        (result, _, i) => (
          i && giftsCities.unshift(giftsCities.pop()),
          (i = giftsCities
            .slice(0, maxCities)
            .reduce((acc, curr) => (acc += curr), 0)),
          i <= maxGifts && result.push(i),
          i - giftsCities[maxCities - 1] <= maxGifts &&
            result.push(i - giftsCities[maxCities - 1]),
          result
        ),
        []
      ),
    0
  );
}

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const allowedGiftsCities = giftsCities.filter(
    (giftsCity) => giftsCity <= maxGifts
  );

  if (allowedGiftsCities.length <= 1 || maxCities === 1)
    return Math.max(0, ...allowedGiftsCities);

  return Math.max(
    ...allowedGiftsCities.map(
      (giftsCity, index) =>
        giftsCity +
        getMaxGifts(
          allowedGiftsCities.slice(index + 1),
          maxGifts - giftsCity,
          maxCities - 1
        )
    )
  );
}

getMaxGifts([12, 3, 11, 5, 7], 20, 3); // 20
getMaxGifts([50], 15, 1); // 0
getMaxGifts([50], 100, 1); // 50
getMaxGifts([50, 70], 100, 1); // 70
getMaxGifts([50, 70, 30], 100, 2); // 100
getMaxGifts([50, 70, 30], 100, 3); // 100
getMaxGifts([50, 70, 30], 100, 4); // 100
