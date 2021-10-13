---
title: "Cash Flow"
description: ""
lead: ""
date: 2020-10-30T15:21:01+02:00
lastmod: 2020-10-30T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "insurers"
weight: 640
toc: true
---

### List CashFlow

`GET /v1/cash-flow`

##### URL Parameters

{{% query-filters %}}

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
total | The total of items
items.amount | Amount for the cash flow record, net value
items.amount_deductions | Total amount of the deductions for the record
items.category | Category of the cash flow record
items.description | A little description
items.is_parceled | The flag that marks if the current record is parceled/has installments
items.is_paid | The flag that marks if the current record is paid
items.installment_total | Total number of installments (if parceled is true)
items.installment_period | The installment period (if parceled is true)
items.installment_number | The current number of installment that this record represents
items.is_recurrence | The flag that marks if the current record is recurrent
items.recurrence_sequence_number | The sequence number for the recurrence record
items.payment_method | The payment method
items.broker_commission_id | The ID of the broker commission associated
items.policy_id | The ID of the policy associated
items.claim_id | The ID of the claim associated
items.payer_name | Payer name for this record
items.payer_document | Payer document for this record
items.drawer_name | Drawer name for this record
items.drawer_document | Drawer document for this record
items.drawer_bank_account | Drawer bank account
items.deductions | The deductions for each item
items.deductions.amount | The deduction amount
items.deductions.description | The deduction description
items.deductions.factor | The deduction factor percentage if applicable
items.date | The date when the record was created
items.deleted_at | The deletion date for this record
items.date_cash_in_out | The date for cash in/out
items.date_cash_in_out_forecast | The forecast date for cash in/out

###### The cash flow category can be:

One Of | 
--------- |
ChannelSale, ChannelRecurrentSale, Deductible, PolicyReversal, Fine, Taxes, BrokerAgency, BrokerCommission, StipulateProLabor, Claim, BalanceAdjustment

###### The cash flow installment period can be:

One Of | 
--------- |
daily, monthly, yearly

```json
{
  "total": 0,
  "items": [
    {
      "id": "string",
      "amount": 0,
      "amount_deductions": 0,
      "category": "string",
      "description": "string",
      "is_parceled": true,
      "is_paid": false,
      "installment_total": 0,
      "installment_period": "string",
      "installment_number": 0,
      "is_recurrence": true,
      "recurrence_sequence_number": 0,
      "payment_method": "string",
      "broker_commission_id": "string",
      "policy_id": "string",
      "claim_id": "string",
      "payer_name": "string",
      "payer_document": "string",
      "drawer_name": "string",
      "drawer_document": "string",
      "drawer_bank_account": {},
      "deductions": [
        {
          "amount": 0,
          "description": "string",
          "factor": 1.0
        }
      ],
      "date": "string",
      "deleted_at": "string",
      "date_cash_in_out": "string",
      "date_cash_in_out_forecast": "string"
    }
  ]
}
```
