---
title: "Plans"
description: "See how to quote using plans in an appropriate manner."
lead: "See how to quote using plans in an appropriate manner. The resource are important because is has a pre-defined set of assists, coverages and options to help proponent quote more easily."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 740
toc: true
---

At this point, you may have in your integration flow a `quote_request` like this, containing a 
list of plans available to quote:

```json
{
  ...
  "plans": []
}
```

> Some plans already have a premium amount or `installments` defined. But you still need to call the requests for quote.

### Plan spec from Quote Request

The plan returned from quote request has a JSON structured like this:

Parameter | Description
--------- | -----------
id | The ID of the Plan
name | Plan name
assists | List of assists for this Plan
coverages | List of coverages for this Plan
installments | List of installments for this Plan

```json
{
  "id": "string",
  "name": "string",
  "assists": [],
  "coverages": [],
  "installments": []
}
```

### Use Plans at Quote

Given a `quote_request` allowing you to use plans, you can send a body at `quote` the JSON structured like this:

Parameter | Description |
--------- | ----------- | -----------
plan_id | The ID of the Plan chosen | Required

```json
{
  ...
  "plan_id": "string"
}
```
