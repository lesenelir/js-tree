<h1>collect name</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Given an object that simulates a tree structure, collect relevant name values.


Given:
```js
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
```

Output:
```js
[
  [ '前端', 'html1', 'vue1' ],
  [ '前端', 'html1', 'react1' ],
  [ '前端', 'html2', 'vue2' ],
  [ '前端', 'html2', 'react2' ]
]
```
