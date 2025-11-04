const express = require("express");
const app = express();
const port = 8080;

const movies = [
   { id: 1, title: "3 Idiots", genre: "Comedy", year: 2009 },
  { id: 2, title: "Dangal", genre: "Sports", year: 2016 },
  { id: 3, title: "Bahubali: The Beginning", genre: "Action", year: 2015 },
  { id: 4, title: "Bahubali 2: The Conclusion", genre: "Action", year: 2017 },
  { id: 5, title: "Chennai Express", genre: "Romance", year: 2013 },
  { id: 6, title: "Koi Mil Gaya", genre: "Sci-Fi", year: 2003 },
  { id: 7, title: "K.G.F: Chapter 1", genre: "Action", year: 2018 },
  { id: 8, title: "K.G.F: Chapter 2", genre: "Action", year: 2022 },
  { id: 9, title: "PK", genre: "Comedy", year: 2014 },
  { id: 10, title: "Lagaan", genre: "Sports", year: 2001 },
  { id: 11, title: "Kabhi Khushi Kabhie Gham", genre: "Family", year: 2001 },
  { id: 12, title: "Jab We Met", genre: "Romance", year: 2007 },
  { id: 13, title: "Bajrangi Bhaijaan", genre: "Drama", year: 2015 },
  { id: 14, title: "Golmaal 3", genre: "Comedy", year: 2010 },
  { id: 15, title: "Dilwale Dulhania Le Jayenge", genre: "Romance", year: 1995 },
  { id: 16, title: "War", genre: "Action", year: 2019 },
  { id: 17, title: "Pathaan", genre: "Action", year: 2023 },
  { id: 18, title: "Munna Bhai M.B.B.S", genre: "Comedy", year: 2003 },
  { id: 19, title: "Don 2", genre: "Action", year: 2011 },
  { id: 20, title: "Zindagi Na Milegi Dobara", genre: "Drama", year: 2011 },
];

// GET all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// GET movie by ID
app.get("/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json(movie);
});

// GET movies by genre
app.get("/movies/genre/:type", (req, res) => {
  const genreType = req.params.type;
  const result = movies.filter(
    (m) => m.genre.toLowerCase() === genreType.toLowerCase()
  );

  if (result.length === 0) {
    return res.status(404).json({ message: "No movies found for this genre" });
  }

  res.json(result);
});

// GET movies by year using query
app.get("/movies/search", (req, res) => {
  const year = Number(req.query.year);
  const result = movies.filter((m) => m.year === year);

  if (result.length === 0) {
    return res
      .status(404)
      .json({ message: "No movies found for this year" });
  }

  res.json(result);
});

// Default 404 Route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(` Movies API running on port ${port}`);
});
