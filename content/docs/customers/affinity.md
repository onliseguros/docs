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
item | The item associated with this affinity | Optional


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
status | The status of affinity
attachments | The attachments and result of the affinity itself for each item
attachments.type | The attachment type
attachments.url | The attachment url

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
  "attachments": [
    {
      "type": 0,
      "url": "string"
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

### Webhooks

In most cases, affinities may introduce a complexity that requires an async process in order to update their data.
In order to keep users updated about Affinity status, attachments, and another details from Insurer, you can make the 
use of Webhooks to get the updates and do the necessary business logic in your system if necessary.

> The endpoint that our API uses to communicate with your server is configured in our stack. To configure your endpoint or change it, please, **get in touch with our support**.

When an update occur, the following request will be make to your endpoint:

`POST 'YOUR_ENDPOINT'`

In the body at the request, the complete data of the Affinity will be sent as well:

```json
{
  "affinity_request_id": "string",
  "lifetime_start": "string",
  "lifetime_end": "string",
  "plan_id": "string",
  "affinity_holder": {},
  "item": {},
  "status": 0,
  "attachments": [
    {
      "type": 0,
      "url": "string"
    }
  ]
}
```

**Your server must return a HTTP Status Code 200.** Otherwise, new requests will be made periodically until your server returns the expected Http Status Code.
If multiple requests to your server endpoint fails, the updates/requests will be dammed, than requests will be made in sequence and order as soon as they were successful.
