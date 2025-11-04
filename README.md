Express.js Backend – Concepts Explanation Document (GET Requests Only)

Introduction
Express.js is a lightweight and powerful framework for building backend servers using JavaScript. It allows developers to create APIs (Application Programming Interfaces) that can send and receive data between the client (browser) and server.
In this document, we will learn the core concepts used in building two basic Express.js APIs using only **GET** requests.

1. What is a Backend API?
Backend APIallows communication between the frontend (like a website or app) and the server.
When the frontend needs data, it sends a request to the backend API, and the backend responds with data in "JSON" format.

Example:
If a user wants to see a list of movies, the frontend calls the API, and the backend sends movie data.

2. Setting Up an Express Server
To create any backend in Express, we must:

1. Install Express
2. Import Express in our file
3. Start the server on a specific port

We use:
const express = require("express");
const app = express();
app.listen(8000, () => console.log("Server Started"));


This creates a working server.
A port is like a door number through which requests enter the server.

Example:

 Port 8000 for Country API
 Port 8080 for Movies API

3. Understanding GET Request
A GET request is used when we want to retrieve data from the server.

Example:

 Get all countries
 Get details of a movie

In Express, we create a GET route like this:
app.get("/route", (req, res) => {
  res.json(data);
});

4. JSON – The Data Format Used in APIs
JSON stands for JavaScript Object Notation
It is the standard format used to send data between the client and server because:

It is easy to read
It is lightweight
It works with all programming languages

Example JSON:
{ "id": 1, "name": "Pakistan" }

When we send data, we use `res.json()`.
This converts JavaScript arrays/objects into JSON automatically.


5. Route Parameters (`req.params`)
Route Parameters allow us to send dynamic values in the URL.
For example, if we want to get a specific country by ID:

`/countries/3` → here, 3 is a route parameter.

In code:
app.get("/countries/:id", (req, res) => {
  req.params.id;
});


This is used when fetching one specific item.

6. Query Parameters (`req.query`)
Query parameters are used for searching or filtering data.
They appear after a `?` in the URL.

Example:
`/movies/search?year=2020`

Here, year=2020 is a query parameter.
We access it with:
req.query.year

This is used when multiple results may match.


7. Using Arrays to Store Data
In both assignments, we used arrays to store our data temporarily.
Example:
const countries = [ ... ];
const movies = [ ... ];

The Country API stored a list of countries from different continents.
The Movie API stored a list of 20 Bollywood movies.

These arrays acted as our database substitute for learning purposes.


8. Handling Invalid Routes (404 Error)
If a user enters the wrong URL, we must show a friendly error message.
This is done using a 404 route handler:

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});


This prevents the server from crashing and gives a clear response.

