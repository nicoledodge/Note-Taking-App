const express = require("express");

// Sets up the Express App
const app = express();
// Create a port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);n