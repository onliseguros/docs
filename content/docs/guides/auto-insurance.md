---
title: "Auto Insurance"
description: "See how to quote a auto insurance."
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 710
toc: true
---

### The Item data for Auto Insurance

See below the data available for the `items` at quotes:

Parameter |
--------- | -----------
plate | -
chassis | -
model_year | -
model_name | -
model_variant | -
manufacture_year | -
brand_name | -
fipe_code | Brazilian's "FIPE" identification code
fuel_type | -
is_0km | Flag that determines if the vehicle is new or used
drivers | List of drivers for the vehicle
drivers.first_name | -
drivers.last_name | -
drivers.cpf | Brazilian's document of "CPF"
drivers.gender | -
drivers.birth_date | Driver birthdate as yyyy-mm-dd
drivers.days_per_week | Days per week this driver uses the vehicle
drivers.questions | List of questions for the driver, quiz and answers


###### The fuel type can be:

One Of | 
--------- |
gasoline, ethanol, flex, diesel, battery, hybrid

```json
{
  "plate": "string",
  "chassis": "string",
  "model_year": 0,
  "model_name": "string",
  "model_variant": "string",
  "manufacture_year": 0,
  "brand_name": "string",
  "fipe_code": "string",
  "fuel_type": "string",
  "is_0km": true,
  "drivers": [
    {
      "first_name": "string",
      "last_name": "string",
      "cpf": "string",
      "gender": "string",
      "birth_date": "string",
      "days_per_week": 0,
      "questions": []
    }
  ]
}
```
