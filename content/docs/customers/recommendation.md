---
title: "Recommendation"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "customers"
weight: 520
toc: true
---

The recommendation service uses **Machine Learning** models in order to predict the probability
of a person to buy certain insurance products. It's important that at the end of each recommendation, you
evaluate the results in order to help training the models and improving his predictions.

### Product Recommendation

`POST /v1/recommendations/product-type`

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
input | The recommendation value input | Required
input.product_type | The product type | Required
input.policy_holder_age | The policy holder age | Required
input.policy_holder_children | The policy holder children quantity | Required
input.policy_holder_gender | The policy holder gender | Required
input.policy_holder_marital_status | The policy holder marital status| Required
input.policy_holder_salary | The policy holder salary in cents | Required
input.location | The location | Required

###### The product type can be:

Type | Name
--------- | -----------
1 | Auto
4 | Home
5 | Life
12 | Travel

###### The policy holder gender can be:

One Of | 
--------- |
male, female

###### The policy holder marital status can be:

One Of | 
--------- |
single, married

###### The location can be:

One Of | 
--------- |
south, southeast, midwest, northeast

```json
{
  "input": {
    "product_type": 0,
    "policy_holder_age": 0,
    "policy_holder_children": 0,
    "policy_holder_gender": "string",
    "policy_holder_marital_status": "string",
    "policy_holder_salary": 0,
    "location": "string"
  }
}
```

##### Response

The above request returns JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the product recommendation
evaluate_token | The token used to evaluate the recommendation
output.percentage | The probability of having wanting to buy products like this

```json
{
  "evaluate_token": "string",
  "output": {
    "percentage": 0.0
  }
}
```

### Evaluate Product Recommendation

`POST /v1/recommendations/product-type/{id}/evaluate`


##### URL Parameters

Parameter | Description |
--------- | ----------- |-----------
id | The ID of product recommendation | 
token | The ID of product recommendation | In Query

##### Body Parameters

The request has the following parameters in body:

Parameter | Description |
--------- | ----------- | -----------
evaluation | The evaluation indicating the target for the recommendation | Required

```json
{
  "evaluation": true
}
```
