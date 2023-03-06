<h1>Object Tree To List</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Given an object that simulates a tree structure, retrieve the corresponding list.

Given:
```js
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
```

Output:
```js
[
  { id: 1, text: '节点1', parentId: 0 },
  { id: 2, text: '节点1_1', parentId: 1 }
]
```
