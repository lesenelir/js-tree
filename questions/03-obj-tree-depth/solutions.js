const tree = {
  name: 'root',
  children: [
    {name: '叶子1-1'},
    {name: '叶子1-2'},
    {
      name: '叶子2-1',
      children: [{
        name: '叶子3-1',
        children: [{
          name: '叶子4-1',
          children: [{}]
        }]
      }]
    }
  ]
}


// 1. Method1: DFS
function getDepth(tree) {
  let depth = 0,
      maxDepth = 0

  traversal(tree)
  return maxDepth

  function traversal(node) { // The parameter 'node' is an object
    if (!node) return

    depth++
    maxDepth = Math.max(maxDepth, depth)
    node.children && node.children.forEach((el) => {
      traversal(el)
    })
    depth--
  }

}

console.log(getDepth(tree))


// 2. Method1: BFS
function getDepthBFS(tree) {
  let queue = [],
      res = 0

  if (tree) queue.push(tree)

  while (queue.length) {
    let levelCount = queue.length
    res++
    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()

      node.children && node.children.forEach(el => {
        queue.push(el)
      })
    }
  }

  return res
}

console.log(getDepthBFS(tree))
