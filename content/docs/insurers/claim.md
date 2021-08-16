---
title: "Claim"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "insurers"
weight: 620
toc: true
---

### List Claims

`GET /v1/claims`

##### URL Parameters

{{% query-filters %}}

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
total | The total of items
items.id | The ID of the claim

```json
{
  "total": 0,
  "items": [
    {
      "id": "string"
    }
  ]
}
```
