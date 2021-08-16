---
title: "Quote"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "brokers"
weight: 450
toc: true
---

### Create Quote Request

`POST /v1/quotes/request`

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
broker_product_id | The ID of the broker product | Required
broker_channel_id | The ID of the broker channel | Optional
lead_id | The ID of the lead | Optional

```json
{
  "broker_product_id": "string",
  "broker_channel_id": "string",
  "lead_id": "string"
}
```

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Quote Request

```json
{
  "id": "string"
}
```

### Create Quote

`POST /v1/quotes`

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
quote_request_id | The ID of the quote request | Required
lifetime_start | The lifetime start date | Required
lifetime_end | The lifetime end date | Required
policy_holder | The policy holder data | Optional
items | The list of items for quote | Optional

> The `policy_holder` and `items` parameters from Create Quote can vary depending on which type of insurance product your are quoting. See our examples to understand the possible values for each product.

```json
{
  "quote_request_id": "string",
  "lifetime_start": "string",
  "lifetime_end": "string",
  "policy_holder": {},
  "items": []
}
```

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Quote
items.installments | The installments and result of the quote itself for each item
items.installments.id | The installment ID
items.installments.amount | The installment amount
items.installments.total_amount | The installment total amount
items.installments.installment_quantity | The quantity of installments, that the amount is represented divided by the total_amount
items.installments.payment_methods | The installment payment method available
items.installments.taxes | The installment taxes information
items.installments.recurrence | The installment recurrence information
status | The status of quote

###### The installments payment methods can be:

Many Of | 
--------- |
Billet, CreditCard, DebitCard, WireTransfer, AccountDebit, Pix

###### The quote status can be:

Status | Name
--------- | -----------
1 | Started
2 | Pending
3 | Failed
4 | Finished
5 | Rejected

```json
{
  "id": "string",
  "status": 0,
  "items": [
    {
      "installments": [
        {
          "id": "string",
          "amount": 0,
          "total_amount": 0,
          "installment_quantity": 0,
          "payment_methods": ["string"],
          "taxes": {},
          "recurrence": {}
        }
      ]
    }
  ]
}
```
