---
title: "Sale"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "brokers"
weight: 460
toc: true
---

### Create Sale Request

`POST /v1/sales/request`

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
quote_id | The ID of the quote | Required

```json
{
  "quote_id": "string"
}
```

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Sale Request

```json
{
  "id": "string"
}
```

### Create Sale

`POST /v1/sales`

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
sale_request_id | The ID of the sale request | Required
installment_id | The ID of the installment chosen | Required
payment_method | The payment method chosen | Required
complement | The complement for data | Optional

> The `complement` parameter from Create Sale can vary depending on which type of insurance product your are selling. See our guides to understand the possible values for each product.

```json
{
  "sale_request_id": "string",
  "installment_id": "string",
  "payment_method": "string",
  "complement": {}
}
```

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Sale
status | The status of sale

###### The sale status can be:

Status | Name
--------- | -----------
1 | Started
2 | Pending
3 | Failed
4 | Finished
5 | Canceled

```json
{
  "id": "string",
  "status": 0
}
```

### Detail Sale

`GET /v1/sales/{sale_id}`

##### URL Parameters

Parameter | Description
--------- | -----------
sale_id | The ID of sale to detail

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Sale
status | The status of sale

###### The sale status can be:

Status | Name
--------- | -----------
1 | Started
2 | Pending
3 | Failed
4 | Finished
5 | Canceled

```json
{
  "id": "string",
  "status": 0
}
```

### Timeline

`GET /v1/consultant/timeline/{sale_id}`

##### URL Parameters

Parameter | Description
--------- | -----------
sale_id | The ID of sale to retrieve the timeline

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Timeline
last_update | The date Timeline was updated
events | The list of events associated with the Sale
events.date | Event date
events.policy | Policy event for this sale, has a complete policy object
events.policy.document_url | Policy document URL

```json
{
  "id": "string",
  "last_update": "string",
  "events": [
    {
      "date": "string",
      "policy": {
        "document_url": "string"
      }
    }
  ]
}
```
