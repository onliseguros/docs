---
title: "Life Insurance"
description: "See how to quote a life insurance."
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 720
toc: true
---

### The Policyholder data for Life Insurance

See below the data available for the `policy_holder` at quotes:

Parameter | 
--------- | -----------
first_name | -
last_name | -
cpf | Brazilian's document of "CPF"
rg | Brazilian's document of "RG"
gender | -
birth_date | Birthdate as yyyy-mm-dd
marital_status | -
occupation_code | -
occupation_name | -
income_monthly | Amount in cents for monthly income
income_yearly | Amount in cents for yearly income
is_foreign | -
is_politically_exposed | -
contact | Contact data for this Policyholder
contact.email | -
contact.phone | -
address | Address data for this Policyholder
address.zip_code | -
address.city_name | -
address.district_name | -
address.state_code | State code as two letters only
address.street_name | -
address.number | -
address.complement | -

###### The policy holder gender can be:

One Of | 
--------- |
male, female

###### The policy holder marital status can be:

One Of | 
--------- |
single, married, divorced, widowed

```json
{
  "first_name": "string",
  "last_name": "string",
  "cpf": "string",
  "rg": "string",
  "gender": "string",
  "birth_date": "string",
  "marital_status": "string",
  "occupation_code": "string",
  "occupation_name": "string",
  "income_monthly": 0,
  "income_yearly": 0,
  "is_foreign": true,
  "is_politically_exposed": true,
  "contact": {
    "email": "string",
    "phone": "string"
  },
  "address": {
    "zip_code": "string",
    "city_name": "string",
    "district_name": "string",
    "state_code": "string",
    "street_name": "string",
    "number": "string",
    "complement": "string"
  }
}
```
