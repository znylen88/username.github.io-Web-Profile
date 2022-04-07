const express = require("express");
const logger = require("morgan");
// const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

// const Contact = require("./contactModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/contactdb", { useNewUrlParser: true });

// app.post("/submit", ({ body }, res) => {
//     Contact.create(body)
//         .then(reload => {
//             res.redirect("/");
//         })
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
