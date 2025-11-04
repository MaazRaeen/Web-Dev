import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let posts = [];

app.get("/", (req, res) => {
  res.render("index", { posts });
});

app.get("/create", (req, res) => {
  res.render("create");
});

// Route: Handle new post submission
app.post("/create", (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    title,
    content,
    date: new Date().toLocaleString(), // Add current date & time
  };

  posts.push(newPost);
  res.redirect("/");
});


// Route: Edit post page (GET)
app.get("/edit/:index", (req, res) => {
  const index = req.params.index;
  const post = posts[index];

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("edit", { post, index });
});

//  Route: Save edited post (POST)
app.post("/edit/:index", (req, res) => {
  const index = req.params.index;
  const { title, content } = req.body;

  if (!posts[index]) {
    return res.status(404).send("Post not found");
  }

  posts[index] = { title, content }; // update post
  res.redirect("/");
});



// Route: Delete post
app.post("/delete/:index", (req, res) => {
  const index = req.params.index;
  posts.splice(index, 1);
  res.redirect("/");
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
