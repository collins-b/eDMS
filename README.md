# eDMS [![Build Status](https://travis-ci.org/andela-cwekesa/eDMS.svg?branch=chore/142486373/Troubleshoot-Travis)](https://travis-ci.org/andela-cwekesa/eDMS) [![Coverage Status](https://coveralls.io/repos/github/andela-cwekesa/eDMS/badge.svg?branch=chore%2F142486373%2FTroubleshoot-Travis)](https://coveralls.io/github/andela-cwekesa/eDMS?branch=chore%2F142486373%2FTroubleshoot-Travis)
eDMS - Electronic Document Management System

- eDMS is a scalable web-based document handler.It allows users to manage their documents online.It runs on a public API created by Collins

Core Technologies
-----------
- [NodeJs](http://nodejs.org)
- [Express](http://expressjs.com)
- [Postgres](http://postgresql.com)
- [Sequelize](http://sequelizejs.com)
- [UnderscoreJS](http://underscorejs.org/)

How to run
------------
1.  Install Node and Postgresql in your machine 
2.  Clone project `git clone https://github.com/andela-cwekesa/eDMS`
3.  `cd eDMS`
4.  Run`npm install` to install dependencies
5.  To start the app,run `npm start` and head to Postman to interact with the API

## API ENDPOINTS

**Users**

VERB | Endpoint | Action
------------ | -------- | ------
POST | /api/users | This endpoint creates a new user
GET | /api/users | This endpoint fetches all users
GET | /api/users/:id | This endpoint gets details of a specific user
PUT | /api/users/:id | This endpoint edits user's details
DELETE | /api/users/id |This endpoint deletes a user from the system
POST | /api/login | This endpoint signs a user into the system
GET | /api/logout | This endpoint ends a user's session
POST | /api/forgot/:email | This endpoint allows users to recover account incase of forgotten password


**Documents**

VERB| Endpoint | Action
------------ | -------- | ------
POST | /api/documents | This endpoint creates a new document
GET | /api/documents | This endpoint gets all the documents
GET | /api/documents/:id | This endpoint gets a specific document
GET | /api/documents/private | This endpoint gets user's private documents
GET | /api/documents/myDocument | This endpoint gets user's documents
POST | /api/documents/search | This endpoint searches against documents.It's a global search
POST | /api/documents/title | This endpoint searches against documents by title
GET | /api/search/documents?q=components | This endpoint searches against documents by title
GET | /api/users/:docId/documents | This endpoint Finds documents belonging to a certain user
GET | /api/documents?offset=2&limit=4 | This endpoint Displays documents starting from the second document and lists only maximum of 4 documents
PUT | /api/documents/:id | This endpoint Update a specific document
DELETE | /api/documents/:id | This endpoint Delete a specific document


**Roles**

VERB | Endpoint | Action
------------ | -------- | ------
POST | /api/roles | This endpoint adds a new role into the system
GET | /api/roles | This endpoint displays available roles
PUT | /api/roles/:id | This endpoint updates a specific role
DELETE | /api/roles/:id | This endpoint deletes a role

**Documentation**

VERB | Endpoint | Action
------------ | -------- | ------
GET | /docs | This endpoint displays the API documentation

Deployment can be found [here](https://edms-online.herokuapp.com/)

Detailed documentation can be found [here](https://edms-online.herokuapp.com/docs)
