const data = {
  id: 1,
  text: '节点1',
  parentId: 0,
  children: [
    {
      id: 2,
      text: '节点1_1',
      parentId: 1
    }
  ]
}


function tree2list(data) {
  let res = [],
      path = {}

  traversal(data)
  return res

  function traversal(node) { // The parameter 'node' is an object
    if (!node) return

    path.id = node.id
    path.text = node.text
    path.parentId = node.parentId
    res.push({...path})
    node.children && node.children.forEach(item => {
      traversal(item)
    })
    delete path.id
    delete node.text
    delete node.parentId
  }
}

console.log(tree2list(data))
