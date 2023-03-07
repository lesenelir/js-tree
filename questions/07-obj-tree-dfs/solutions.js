const tree = {
  name: 'root',
  children: [
    {
      name: 'c1',
      children: [
        {
          name: 'c11',
          children: []
        },
        {
          name: 'c12',
          children: []
        }
      ]
    },
    {
      name: 'c2',
      children: [
        {
          name: 'c21',
          children: []
        },
        {
          name: 'c22',
          children: []
        }
      ]
    }
  ]
}


function getName(tree) {
  let res = []

  traversal(tree)
  return res

  function traversal(node) {  // The parameter 'node' is an object
    if (!node) return

    res.push(node.name)
    node.children && node.children.forEach(item => {
      traversal(item)
    })
  }
}

console.log(getName(tree))
