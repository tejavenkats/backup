const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

// get all the articles
app
  .route("/articles")
  .get(function (req, res) {
    Article.find(function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save(function (err) {
      if (!err) {
        res.send("Article created.");
      } else {
        res.send(err);
      }
    });
  });

// get specific articles

app
  .route("/articles/:articleTitle")
  .get(function (req, res) {
    Article.findOne({ title: req.params.articleTitle }, function (
      err,
      foundArticle
    ) {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("Article not found");
      }
    });
  })
  .put(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (!err) {
          res.send("Update successful");
        }
      }
    );
  })
  .patch(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      { overwrite: true },
      function (err) {
        if (!err) {
          res.send("Patch update succesful");
        }
      }
    );
  })
  .delete(function (req, res) {
    Article.deleteOne({ title: req.params.articleTitle }, function (err) {
      if (!err) {
        res.send("Deleted specified article succesfully.");
      }
    });
  });

app.listen(3000, function () {
  console.log("server up and running!");
});
