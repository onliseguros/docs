---
title: "Troubleshooting"
description: "Solutions to common problems."
lead: "Solutions to common problems."
date: 2020-11-12T15:22:20+01:00
lastmod: 2020-11-12T15:22:20+01:00
draft: false
images: []
menu: 
  docs:
    parent: "help"
weight: 720
toc: true
---

### Merchant does not authorize the product for broker

It's a common problem that affect brokers trying to quote or sell products that they are not authorized for.
To solve the problem, the broker needs to verify his credentials with the insurer, and check if the product or plans are in active state.

### Payment method not available for this installment

The payment method that you are trying the use from installment is not in the list of available ones. You must review
your inputs in order to check the available payments methods, and request in the sale a valid one.

### Quote is expired

The quotes has a certain validity depending of product and insurer. You must validate it before trying to create a sale from a quote.

### Quote not available to perform a sale

Quotes can only be used to create sales once. Also, only sales with valid statuses and valid installments are eligible to create sales from.

### Invoice not available to pay

This message appears when the invoice status or conditions are not well suited to pay. Invoices that already have payments with success statuses can't be paid repeatedly.
