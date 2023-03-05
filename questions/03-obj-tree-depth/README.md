<h1>Object Tree Depth</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Given an object that simulates a tree structure, and calculate the depth of the object tree. 

There are two methods to solve this question: DFS or BFS.

This question is similar with [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

Given:
```js
const tree = {
  name: 'root',
  children: [
    {name: '叶子1-1'},
    {name: '叶子1-2'},
    {
      name: '叶子2-1',
      children: [{
        name: '叶子3-1',
        children: [{
          name: '叶子4-1',
          children: [{}]
        }]
      }]
    }
  ]
}
```

Output:
```js
4
```
