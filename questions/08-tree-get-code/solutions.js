let tree = {
  name: '中国',
  children: [
    {
      name: '北京',
      children: [
        {
          name: '朝阳群众'
        },
        {
          name: '海淀区'
        },
        {
          name: '昌平区'
        }
      ]
    },
    {
      name: '浙江省',
      children: [
        {
          name: '杭州市',
          code: '0571',
        },
        {
          name: '嘉兴市'
        },
        {
          name: '绍兴市'
        },
        {
          name: '宁波市'
        }
      ]
    }
  ]
}


function getCode(tree, name) {
  let res = {}

  traversal(tree)
  return res

  function traversal(node) { // The parameter 'node' is an object
    if (!node) return

    if (node.name === name) {
      res = {...node}
      return
    }

    node.children && node.children.forEach(item => {
      traversal(item)
    })
  }
}

console.log(getCode(tree, '杭州市'))
