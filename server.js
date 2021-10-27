const express = require("express");
const htmlRoutes = require ('./routes/htmlRoutes.js');
const apiRoutes = require ('./routes/apiRoutes.js');
// Sets up the Express App
const app = express();
// Create a port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);