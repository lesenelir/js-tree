const treeData = {
  name: "root",
  children: [
    {name: "src", children: [{name: "index.html", children: []}]},
    {name: "public", children: []}
  ]
}


function getPath(tree) {
  let res = [],
      path = []

  traversal(tree)
  return res

  function traversal(node) { // The parameter 'node' is an object
    if (!node) return

    path.push(node.name)
    if (node.children.length === 0) {
      res.push([...path].join('/'))
      path.pop() // Roll back immediately to the node in the path array.
      return
    }
    node.children && node.children.forEach(item => {
      traversal(item)
    })
    path.pop()
  }
}

console.log(getPath(treeData))
