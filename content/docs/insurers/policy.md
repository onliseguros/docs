---
title: "Policy"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "insurers"
weight: 630
toc: true
---

### List Policies

`GET /v1/policies`

##### URL Parameters

{{% query-filters %}}

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
total | The total of items
items.id | The ID of the policy

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

### Cancel Policy

`DELETE /v1/policies/{policy_id}`

##### URL Parameters

Parameter | Description
--------- | -----------
policy_id | The ID of policy to cancel

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
cancel_reason | The cancel reason of the policy | Required
cancel_description | The cancel description of the policy | Optional
reversal_method | The reversal method | Optional
reversal_bank_account | The reversal bank account | Optional

###### The cancel reason can be:

Reason | Name
--------- | -----------
1 | Policyholder requested
2 | Default
3 | Claimed
4 | Insurer request

###### The reversal method can be:

One Of | 
--------- |
CreditCard, WireTransfer, Pix

```json
{
  "cancel_reason": 0,
  "cancel_description": "string",
  "reversal_method": "string",
  "reversal_bank_account": {}
}
```

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Policy
status | The status canceled for the Policy
date_end | The date policy was canceled

```json
{
  "id": "string",
  "status": 0,
  "date_end": "string"
}
```
