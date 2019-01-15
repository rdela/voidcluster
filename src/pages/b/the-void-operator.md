---
templateKey: blog-post
title: the void operator
date: 2019-01-15T09:40:25.076Z
description: signal that the return value is unimportant
tags:
  - void
---
[Avoid Else, Return Early](http://blog.timoxley.com/post/47041269194/avoid-else-return-early) by Tim Kevin Oxley

> To more clearly signal that the return value is unimportant you can use the [void operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void):
>
> ```js
> function(err, results) {
>  if (err) return void handleError(err)
>   // ...
> }
> ```
