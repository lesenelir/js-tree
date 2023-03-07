<h1>List To Object Tree</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Given an object that simulates a tree structure, retrieve the corresponding dfs result.

Given:
```js
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
```

Output:
```js
['root', 'c1','c11', 'c12', 'c2', 'c21', 'c22']
```
