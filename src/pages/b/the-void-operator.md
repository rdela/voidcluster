---
templateKey: blog-post
title: the void operator
date: 2019-01-15T09:40:25.076Z
description: signal that the return value is unimportant
tags:
  - void
---
> To more clearly signal that the return value is unimportant you can use the void operator:


```js
function(err, results) {
  if (err) return void handleError(err)
  // ...
}
```
