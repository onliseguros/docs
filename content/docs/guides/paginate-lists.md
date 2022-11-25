---
title: "How to Paginate"
description: "See how to paginate lists in an appropriate manner."
lead: "See how to paginate lists in an appropriate manner."
date: 2020-10-30T08:49:31+00:00
lastmod: 2020-10-30T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 750
toc: true
---

## Paginate using Page Numbers

To paginate using page number is very straightforward. You just need to pass as parameter the 
page number that you need. Optionally, you may indicate the number of rows you are expecting for each page.

See the following example of a retrieving a first page or no pagination at all:

`GET /v1/resource`

Is the same as:

`GET /v1/resource?rows=10&page=1`

This query will return the first page, with the default page size:

```json
{
  "total": 20,
  ...
}
```

You can use the total number of rows to continue asking for other pages. 
Given or previous response of `20 in total` - this query will return the second and last page:

`GET /v1/resource?page=2`

## Paginate using Cursor

Some page lists allows you to paginate using a cursor. This gives you more consistence between the
responses for each page. It guarantees that when asking for other pages, the API will return only 
the exact "next" or "previous" resources, avoiding returning recently created or updated, repeating resources.

For example, imagine the following response for the first page:

```json
{
  "total": 20,
  "cursor": "string",
  ...
}
```

Now you have a cursor value to be passed in the next request, to obtain the second page:

`GET /v1/resource?cursor=string`

Keep updating the cursor value passed in the query, always using the last cursor value returned by the API.
But when the API returns an empty or null cursor, it indicates that you reached the last page, so no following requests are needed.
