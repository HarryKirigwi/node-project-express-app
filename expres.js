//Importing modules
const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

const blogRoutes = require("./routes/blogRoutes");

//Declaring the app
const app = express();

//connecting to the database
const dburl =
  "mongodb+srv://[username]:[password]@cluster0.khoix9o.mongodb.net/NodeProject?retryWrites=true&w=majority";
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(3000, () => {
      console.log("Listening to port 3000");
    })
  )
  .catch((err) => console.log(err));

//setting up a view engine
app.set("view engine", "ejs");

//allowing publics access
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//rendering pages
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/create", (req, res) => {
  res.render("create", { title: "create" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.render("404", { title: "404 " });
});

//Mongoose and mongo sandbox routes
/*
app.get("/add-blog", (req, res) => {
  const blogs = new Blog({
    title: "A little girl get married",
    snippet: "At her age she have been able to meet her love",
    body: "nonesense",
  });

  blogs
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

*/
