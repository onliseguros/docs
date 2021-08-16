---
title: "Important Notes"
description: "Important notes about security."
lead: "Important notes about security."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "security"
weight: 210
toc: true
---

### Using Client Credentials

Do not use the credentials in front-end devices. The credentials must be used exclusively by servers at back-end.

### Refresh Tokens

Re-use access-tokens between requests, respecting his expiration date. Use the refresh-token, 
when available, to keep consistency and performance.
