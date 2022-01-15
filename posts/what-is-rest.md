---
title : 'What is REST?'
date : '12 Aralık 2021'
excerpt : 'REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web...'
image : 'images/posts/4.jpeg'
---

### What is REST?
#### Answer

REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources.
Generally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like posts, users, comments, and a RESTful API exposes access to this data with:
- An identifier for the resource. This is known as the endpoint or URL for the resource.
- The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE.
Here is an example of the URL and HTTP method with a posts resource:
-   Reading: /posts/ => GET
-   Creating: /posts/new => POST
-   Updating: /posts/:id => PUT
-   Destroying: /posts/:id => DELETE

#### Good to hear

Alternatives to this pattern like GraphQL