---
title: "Product"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "brokers"
weight: 430
toc: true
---

### List Broker Products

`GET /v1/broker-products`

##### URL Parameters

{{% query-filters %}}

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
total | The total of items
items.id | The ID of the broker product

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
