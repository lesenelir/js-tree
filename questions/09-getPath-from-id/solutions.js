const tree = {
  id: 1,
  children: [
    {id: 2, children: [{id: 3, children: []}]},
    {
      id: 4,
      children: [
        {id: 5, children: []},
        {id: 6, children: []},
      ],
    },
    {id: 7, children: []}
  ]
}

function findNode(tree, targetId) {
  let path = [],
      res = []

  traversal(tree)
  return res.join('->')

  function traversal(node) {  // The parameter 'node' is an object
    if (!node) return

    path.push(node.id)
    if (node.id === targetId) {
      res.push(...path)
      path.pop()
      return
    }
    node.children && node.children.forEach(item => {
      traversal(item)
    })
    path.pop()
  }
}

console.log(findNode(tree, 5))
