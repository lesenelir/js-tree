const data = [
  {
    "name": "1-1",
    "kind": "oo",
    "children": [
      {
        "name": "2-2",
        "kind": "ii"
      },
      {
        "name": "3-3",
        "children": [
          {
            "name": "4-4",
            "children": [
              {
                "name": '707'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "5-5",
  },
  {
    "name": "6-6"
  }
]


function getName(data) {
  let res = [],
      len = data.length

  for (let i = 0; i < len; i++) {
    traversal(data[i])
  }

  return res

  function traversal(node) { // The parameter 'node' is object
    if (!node) return

    res.push(node.name)
    node.children && node.children.forEach(item => {
      traversal(item)
    })
  }

}

console.log(getName(data))
