---
title: "Charge"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "brokers"
weight: 470
toc: true
---

### Charge from Sale

`POST /v1/broker-charges`

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
sale_id | The ID of the sale to charge | Required
card | The card data | Optional
card.brand | The card brand name | Required
card.expiration_date | The card expiration date (mm/yyyy) | Required
card.holder | The card holder name | Required
card.number | The card number | Required
card.security_code | The card security code | Required

```json
{
  "sale_id": "string",
  "card": {
    "brand": "string",
    "expiration_date": "string",
    "holder": "string",
    "number": "string",
    "security_code": "string"
  }
}
```

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Invoice from previous Sale
status | The status of the Invoice related to the last Payment try
payment_tries.id | The ID of the Payment Try
payment_tries.currency | The currency associated with the Payment try
payment_tries.status | The status of the Payment Try
payment_tries.type | The payment type

###### The payment try status can be:

Status | Name
--------- | -----------
1 | Card Error
2 | Card Canceled
3 | Card Blocked
4 | Card Expired
5 | Not Allowed
6 | Success
7 | Pending
8 | Canceled
9 | Error
10 | Cancel Requested
11 | Cancel Error
12 | Pending Capture

###### The payment type can be:

One Of | 
--------- |
Billet, CreditCard, DebitCard, WireTransfer, AccountDebit, Pix

###### The invoice status can be:

Status | Name
--------- | -----------
1 | Pending
2 | Pending Capture
3 | Paid

```json
{
  "id": "string",
  "status": 0,
  "payment_tries": [
    {
      "id": "string",
      "currency": "string",
      "type": "string",
      "date": "string",
      "status": 0
    }
  ]
}
```
