const express = require("express");
const app = express();
const port = 8000;

  const countries = [
  { id: 1, name: "Pakistan", capital: "Islamabad", continent: "Asia" },
  { id: 2, name: "India", capital: "New Delhi", continent: "Asia" },
  { id: 3, name: "China", capital: "Beijing", continent: "Asia" },
  { id: 4, name: "United Kingdom", capital: "London", continent: "Europe" },
  { id: 5, name: "France", capital: "Paris", continent: "Europe" },
  { id: 6, name: "Germany", capital: "Berlin", continent: "Europe" },
  { id: 7, name: "Egypt", capital: "Cairo", continent: "Africa" },
  { id: 8, name: "South Africa", capital: "Cape Town", continent: "Africa" },
  { id: 9, name: "Kenya", capital: "Nairobi", continent: "Africa" },
  { id: 10, name: "United States of America", capital: "Washington D.C.", continent: "North America" },
  { id: 11, name: "Canada", capital: "Ottawa", continent: "North America" },
  { id: 12, name: "Mexico", capital: "Mexico City", continent: "North America" },
  { id: 13, name: "Brazil", capital: "Brasília", continent: "South America" },
  { id: 14, name: "Argentina", capital: "Buenos Aires", continent: "South America" },
  { id: 15, name: "Chile", capital: "Santiago", continent: "South America" },
  { id: 16, name: "Australia", capital: "Canberra", continent: "Australia" },
  { id: 17, name: "New Zealand", capital: "Wellington", continent: "Australia" },
  { id: 18, name: "Fiji", capital: "Suva", continent: "Australia" },
];

// GET all countries
app.get("/countries", (req, res) => {
  res.json(countries);
});

// GET country by ID
app.get("/countries/:id", (req, res) => {
  const id = Number(req.params.id);
  const country = countries.find((c) => c.id === id);

  if (!country) {
    return res.status(404).json({ message: "Country not found" });
  }

  res.json(country);
});

// GET countries by continent
app.get("/continent/:name", (req, res) => {
  const continentName = req.params.name;
  const result = countries.filter(
    (c) => c.continent.toLowerCase() === continentName.toLowerCase()
  );

  if (result.length === 0) {
    return res
      .status(404)
      .json({ message: "No countries found for this continent" });
  }

  res.json(result);
});

// Default 404 Route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`Country API running on port ${port}`);
});
