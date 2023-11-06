export default function wrapGifts(gifts) {
  const LENGTH = gifts.length;
  if (LENGTH < 1) {
    return [];
  }

  const giftLength = gifts[0].length;
  console.log(giftLength);
  const res = ["*".repeat(2 + giftLength)];
  for (let i = 0; i < LENGTH; i++) {
    res.push(`*${gifts[i]}*`);
  }
  res.push("*".repeat(2 + giftLength));
  return res;
}

wrapGifts(["📷", "⚽️"]);
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"]);
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"]);
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
