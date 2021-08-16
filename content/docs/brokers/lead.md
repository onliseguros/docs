---
title: "Lead"
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

### Create a Lead

`POST /v1/leads`

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
name | The name of the lead | Required
email | The email of the lead | Required
phone | The phone of the lead | Optional
broker_channel_id | The ID of the broker product | Optional
broker_product_id | The ID of the broker product | Optional

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "broker_channel_id": "string",
  "broker_product_id": "string"
}
```

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the lead

```json
{
  "id": "string"
}
```

### List Leads

`GET /v1/leads`

##### URL Parameters

{{% query-filters %}}

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
total | The total of items
items.id | The ID of the lead
items.name | The name of the lead
items.email | The email of the lead
items.phone | The phone of the lead
items.broker_channel_id | The ID of the broker product
items.broker_product_id | The ID of the broker product

```json
{
  "total": 0,
  "items": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "phone": "string",
      "broker_channel_id": "string",
      "broker_product_id": "string"
    }
  ]
}
```
