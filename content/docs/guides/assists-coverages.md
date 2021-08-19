---
title: "Assists and Coverages"
description: "See how to quote assists and coverages in an appropriate manner."
lead: "See how to quote assists and coverages in an appropriate manner. This resources are important to determine the value of the quote itself."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 730
toc: true
---

At this point, you may have in your integration flow a `quote_request` like this, containing a 
list of assists and/or coverages available to quote:

```json
{
  ...
  "assists": [],
  "coverages": []
}
```

### Assist spec from Quote Request

The assist returned from quote request has a JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Assist
name | Assist name
description | Assist description
options | List of options
options.id | The ID of the Assist Option
options.name | Option name
options.description | Option description

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "options": [
    {
      "id": "string",
      "name": "string",
      "description": "string"
    }
  ]
}
```

### Coverage spec from Quote Request

The coverage returned from quote request has a JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Coverage
name | Coverage name
description | Coverage description
default | Default value for this coverage determined by insurer
rage | List of available range values for coverage amount
multiple | If the coverage allows the use multiple times
required | If the coverage is required for quote
coverages | Nested coverages that can be used if the parent one is in use

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "default": "string",
  "range": [
    0, 1, 2
  ],
  "multiple": false,
  "required": false,
  "coverages": []
}
```

### Use Assists at Quote

Given a `quote_request` allowing you to use assists, you can send a body at `quote` the JSON structured like this:

Parameter | Description |
--------- | ----------- | -----------
items.assists | List of Assists to use | Optional
items.assists.id | The ID of the Assist | Required
items.assists.assistance_option_id | The ID of the Assist Option | Required

```json
{
  "items": [
    {
      ...
      "assists": [
        {
          "id": "string",
          "assistance_option_id": "string"
        }
      ]
    }
  ]
}
```

### Use Coverages at Quote

Given a `quote_request` allowing you to use coverages, you can send a body at `quote` the JSON structured like this:

Parameter | Description |
--------- | ----------- | -----------
items.coverages | List of Coverages to use | Optional
items.coverages.id | The ID of the Coverage | Required
items.coverages.coverage_option_id | The ID of the Coverage Option | Optional
items.coverages.insured_amount | Insured amount in cents | Optional
items.coverages.value | The appropriated value as string | Optional

> `insured_amount` and `value` parameters from coverages can vary depending on which type of insurance product your are quoting. See insurer appropriated documentation values for each product.

> `coverage_option_id` parameter must be used when the coverage has options available.

```json
{
  "items": [
    {
      ...
      "coverages": [
        {
          "id": "string",
          "coverage_option_id": "string",
          "value": "string",
          "insured_amount": 0
        }
      ]
    }
  ]
}
```
