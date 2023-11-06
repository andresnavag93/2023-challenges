export default function checkIsSameTree(treeA, treeB) {
  // ¡No olvides compartir tu solución en redes!
  const stackTreeA = [];
  const stackTreeB = [];

  let nodeA = treeA;
  let nodeB = treeB;

  while (
    nodeA != null ||
    nodeB != null ||
    stackTreeA.length > 0 ||
    stackTreeB.length > 0
  ) {
    while (nodeA != null) {
      stackTreeA.push(nodeA);
      nodeA = nodeA.left;
    }

    while (nodeB != null) {
      stackTreeB.push(nodeB);
      nodeB = nodeB.left;
    }

    nodeA = stackTreeA.pop();
    nodeB = stackTreeB.pop();
    if (nodeA.value !== nodeB.value) {
      return false;
    }
    nodeA = nodeA.right;
    nodeB = nodeB.right;
  }

  return true;
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

checkIsSameTree(tree, tree); // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

checkIsSameTree(tree, tree2); // false
checkIsSameTree(tree2, tree2); // true
