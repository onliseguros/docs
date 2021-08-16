---
title: "Authorization"
description: "See how to do authorization in our APIs"
lead: "See how to do authorization in our APIs"
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
menu:
  docs:
    parent: "security"
weight: 200
toc: true
---

### OAuth2 protocol

For authorization for the API, we highly trust in the widely accepted industry standards protocols, like OAuth2 described in <a href='https://datatracker.ietf.org/doc/html/rfc6749'>RFC 6749</a>.

To be more specific, this API uses the "Client Credentials" as Authorization Grant.<br/>
<b>These Client Credentials you must obtain exclusively altogether with our Developer Center or Support.</b>

### The Audience param

Do not forget to add to your token request the "audience" parameter, the value will be 
provided to you in the registration.

### The Scope param

The scope param informs our authorization server which resources from our API you are trying to obtain.
Is important that you provide the scopes you requested earlier with the Client Credentials, 
and while using the credentials, request tokens with the scopes from resources that you realy need to use.

