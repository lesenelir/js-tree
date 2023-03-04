<h1>DOM To JSON</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Convert a given DOM structure to a corresponding JavaScript object.

Given:
```html
<div class="box">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
```

Output:
```js
{
  tag: 'DIV',
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
```




