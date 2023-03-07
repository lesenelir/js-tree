<h1>Tree Object Get Code</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Given an object that simulates a tree structure, input a name and find the corresponding code from the object.

Given:
```js
const tree = {
  name: '中国',
  children: [
    {
      name: '北京',
      children: [
        {
          name: '朝阳群众'
        },
        {
          name: '海淀区'
        },
        {
          name: '昌平区'
        }
      ]
    },
    {
      name: '浙江省',
      children: [
        {
          name: '杭州市',
          code: '0571',
        },
        {
          name: '嘉兴市'
        },
        {
          name: '绍兴市'
        },
        {
          name: '宁波市'
        }
      ]
    }
  ]
}
```

Output:
```js
{ name: '杭州市', code: '0571' }
```
