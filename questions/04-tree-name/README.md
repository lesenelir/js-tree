<h1>Object Tree Depth</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Given an object that simulates a tree structure, retrieve the file's pathname.

Given:
```js
const treeData = {
  name: "root",
  children: [
    {name: "src", children: [{name: "index.html", children: []}]},
    {name: "public", children: []}
  ]
}
```

Output:
```js
[ 'root/src/index.html', 'root/public' ]
```
