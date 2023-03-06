<h1>List To Object Tree</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Given an array object that simulates a list, retrieve the corresponding tree object structure.

Given:
```js
const arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]
```

Output:
```js
let arr = {
  "id": 1,
  "name": "部门1",
  "pid": 0,
  "children": [
    {
      "id": 2,
      "name": "部门2",
      "pid": 1,
      "children": []
    },
    {
      "id": 3,
      "name": "部门3",
      "pid": 1,
      "children": [
        // ...
      ]
    }
  ]
}
```
