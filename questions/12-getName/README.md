<h1>collect name</h1>

<blockquote><p>by Lesenelir Zhou<a href="https://github.com/lesenelir" target="_blank"> @lesenelir </a></p></blockquote>

Given an object that simulates a tree structure, collect relevant name values.


Given:
```js
const data = [
  {
    "name": "1-1",
    "kind": "oo",
    "children": [
      {
        "name": "2-2",
        "kind": "ii"
      },
      {
        "name": "3-3",
        "children": [
          {
            "name": "4-4",
            "children": [
              {
                "name": '707'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "5-5",
  },
  {
    "name": "6-6"
  }
]
```

Output:
```js
[
  '1-1', '2-2',
  '3-3', '4-4',
  '707', '5-5',
  '6-6'
]
```
