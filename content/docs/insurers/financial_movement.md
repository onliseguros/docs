---
title: "Financial Movement"
description: ""
lead: ""
date: 2020-10-30T15:21:01+02:00
lastmod: 2020-10-30T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "insurers"
weight: 650
toc: true
---

### List Financial Movement

`GET /v1/insurer-accounting/financial-movement`

##### URL Parameters

{{% query-filters %}}

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
total | The total of items
items.amount | Amount for the financial movement
items.balance | Balance amount when the movement has ben processed
items.is_processing | The flag that marks if the current movement is being processed
items.process_date | The process date for this movement
items.date | The date when the movement was created

##### Response complementary

Some financial movements can also be related with following entities:

Parameter | Description
--------- | -----------
items.policy | The policy associated with this movement
items.cash_flow | The cash flow record associated with this movement

```json
{
  "total": 0,
  "items": [
    {
      "id": "string",
      "amount": 0,
      "balance": 0,
      "is_processing": false,
      "policy": {},
      "cash_flow": {},
      "process_date": "string",
      "date": "string"
    }
  ]
}
```
