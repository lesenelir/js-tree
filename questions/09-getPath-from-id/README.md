<h1>Get path from id</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Given an object that simulates a tree structure, input an id and find the corresponding path name from the object.

Given:
```js
const tree = {
  id: 1,
  children: [
    {id: 2, children: [{id: 3, children: []}]},
    {
      id: 4,
      children: [
        {id: 5, children: []},
        {id: 6, children: []},
      ],
    },
    {id: 7, children: []}
  ]
}

```
Output:
```js
findNode(tree, 5) // 1->4->5
```
