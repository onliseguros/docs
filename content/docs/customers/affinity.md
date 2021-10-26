---
title: "Affinity"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "customers"
weight: 510
toc: true
---

### Get Affinity Partner

Retrieve information about the current Affinity Partner. It will return available products and current status with insurers.

`GET /v1/affinity/partner`

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
customer | The complete customer data
products | List of products available for this affinity partner
products.id | The ID of the current product
products.name | The name of the current product
products.assists | List of assists available for the product
products.coverages | List of coverages available for the product

```json
{
  "customer": {},
  "products": [
    {
      "id": "string",
      "name": "string",
      "assists": [],
      "coverages": []
    }
  ]
}
```

### Create Affinity Request

Before trying to create an `affinity`, you must create a `affinity_request` to "prepare" the process of contracting, receiving
useful data for the rest of the process and to help proponent select desired configurations.

`POST /v1/affinity/request`

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
product_id | The ID of the product selected for your partner | Required

```json
{
  "product_id": "string"
}
```

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Affinity Request
plans | List of plans available for the product
plans.id | The ID of the current plan
plans.name | The name of the current plan
plans.assists | List of assists specified for the plan
plans.coverages | List of coverages specified for the plan

```json
{
  "id": "string",
  "plans": [
    {
      "id": "string",
      "name": "string",
      "assists": [],
      "coverages": []
    }
  ]
}
```

### Create Affinity

`POST /v1/affinity`

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
affinity_request_id | The ID of the affinity request | Required
lifetime_start | The lifetime start date | Required
lifetime_end | The lifetime end date | Required
plan_id | The ID of the plan chosen for this affinity | Optional
affinity_holder | The affinity holder data | Optional
item | The items associated with this affinity | Optional


> The `affinity_holder` and `item` parameters from Create Affinity can vary depending on which type of insurance product your are contracting. See our guides to understand the possible values for each product.

```json
{
  "affinity_request_id": "string",
  "lifetime_start": "string",
  "lifetime_end": "string",
  "plan_id": "string",
  "affinity_holder": {},
  "item": {}
}
```

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Affinity
items.attachments | The attachments and result of the affinity itself for each item
items.attachments.type | The attachment type
items.attachments.url | The attachment url
status | The status of affinity

###### The affinity status can be:

Status | Name
--------- | -----------
1 | Issued
2 | Canceled
3 | Expired
4 | Renewed

###### The affinity attachment types can be:

Status | Name
--------- | -----------
1 | Coi (Certificate of Insurance)
2 | General Condition
3 | Capitalization Regulation
4 | Cancel

```json
{
  "id": "string",
  "status": 0,
  "items": [
    {
      "attachments": [
        {
          "type": 0,
          "url": "string"
        }
      ]
    }
  ]
}
```

### List Affinity

`GET /v1/affinity`

##### URL Parameters

{{% query-filters %}}

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
total | The total of items
items | The complete affinity data

```json
{
  "total": 0,
  "items": [
    {
      "id": "string",
      ...
    }
  ]
}
```

### Cancel Affinity

`DELETE /v1/affinity/{affinity_id}`

##### URL Parameters

Parameter | Description
--------- | -----------
affinity_id | The ID of affinity to cancel

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Affinity
status | The status canceled for the Affinity
date_end | The date affinity was canceled

```json
{
  "id": "string",
  "status": 0,
  "date_end": "string"
}
```
