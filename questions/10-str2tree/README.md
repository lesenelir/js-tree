<h1>str2tree</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Given a str object, output relevant tree structure.

Given:
```js
const strObj = {
  'a-b-c-d':1,
  'a-b-c-e':2,
  'a-b-f':3,
  'a-j':4
}

```
Output:
```js
{
  a:{
    b:{
      c:{
        d:1, 
        e:2
      },
      f:3
    },
    j:4
  }
}
```
