---
title: "Merchant"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "brokers"
weight: 410
toc: true
---

### Get Merchant Store

`GET /v1/merchant/stores/{broker_channel_id}`

##### URL Parameters

Parameter | Description
--------- | -----------
broker_channel_id | The ID of broker channel to retrieve the store from

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
broker_channel_id | The ID of the broker channel
logo_url | The public logo url for the broker channel
broker_products | The list of broker products available
broker_products.product | The insurer product information itself
broker_products.product.type | The insurer product type
broker_products.product.insurer | The insurer information itself

###### The insurer product type can be:

Type | Name
--------- | -----------
1 | Auto
2 | Business
3 | Educational
4 | Home
5 | Life
6 | Funeral
7 | Moneylender
8 | Electronic
9 | Global
10 | Warranty
11 | PersonalAccident
12 | Travel

```json
{
  "broker_channel_id": "string",
  "logo_url": "string",
  "broker_products": [
    {
      "id": "string",
      "product_id": "string",
      "name": "string",
      "commercial_image": "string",
      "commercial_text": "string",
      "commission_percent": 0,
      "description": "string",
      "participation_rules": "string",
      "product": {
        "id": "string",
        "name": "string",
        "currency": "string",
        "description": "string",
        "susep": "string",
        "type": 0,
        "insurer_id": "string",
        "insurer": {
          "cnpj": "string",
          "id": "string",
          "name": "string"
        }
      }
    }
  ]
}
```

### Get Merchant Vendor

`GET /v1/merchant/vendor/{product_id}`

##### URL Parameters

Parameter | Description
--------- | -----------
product_id | The ID of product to retrieve the vendor from

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the vendor itself
product_id | The ID of the product
active | The flag that marks if the current vendor/product is available
agency_percent | The agency percent for this product
commission_percent | The commission percent for this product
pro_labor_percent | The pro labor percent for this product
last_update | The last update of the vendor
date | The date when the vendor was created

```json
{
  "id": "string",
  "product_id": "string",
  "active": true,
  "agency_percent": 0.0,
  "commission_percent": 0.0,
  "pro_labor_percent": 0.0,
  "last_update": "string",
  "date": "string"
}
```
