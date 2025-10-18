import express from "express";
const app = express();
const port =3001;

app.get("/", (req, res)=>{
    res.send("<h1>Hello Maaz</h1>");
    // console.log(req.rawHeaders);
});

app.get("/about", (req, res)=>{
    res.send("<h1>About Maaz</h1>");

});


app.listen(port, ()=>{
    console.log(`Server Running on port ${port}.`);
});
