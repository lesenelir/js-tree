const data = {
  id: 1,
  name: '前端',
  children: [
    {
      id: 2,
      name: 'html1',
      children: [
        {id: 5, name: 'vue1', children: []},
        {id: 6, name: 'react1', children: []},
      ]
    },
    {
      id: 3,
      name: 'html2',
      children: [
        {id: 7, name: 'vue2', children: []},
        {id: 8, name: 'react2', children: []},
      ]
    }
  ]
}

function show(data) {
  let res = [],
      path = []

  traversal(data)
  return res

  function traversal(node) { // the parameter 'node' is an object
    if (!node) return

    path.push(node.name)
    if (node.children.length === 0) {
      res.push([...path])
      path.pop()
      return
    }
    node.children && node.children.forEach(item => {
      traversal(item)
    })
    path.pop()
  }
}

console.log(show(data))
