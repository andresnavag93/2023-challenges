function fitsInOneBox(boxes) {
  const l = boxes.length;
  return boxes
    .sort((a, b) => a.l + a.w + a.h - (b.l + b.w + b.h))
    .every((a, i) =>
      i === l - 1
        ? true
        : a.l < boxes[i + 1].l && a.w < boxes[i + 1].w && a.h < boxes[i + 1].h
    );
}

function fitsInOneBox2(boxes) {
  return (
    boxes
      .sort((x, y) => y.l + y.w + y.h - (x.l + x.w + x.h))
      .filter(
        (box, i) =>
          !i ||
          (boxes[i - 1].l > box.l &&
            boxes[i - 1].w > box.w &&
            boxes[i - 1].h > box.h)
      ).length == boxes.length
  );
}

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
]); // true

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

fitsInOneBox(boxes); // false

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

fitsInOneBox(boxes2); // true
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
]); // true
