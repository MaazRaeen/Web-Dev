import express from "express";
const app = express();
const port =3001;

app.get("/", (req, res)=>{
    res.send("Hello Maaz");
});

app.listen(port, ()=>{
    console.log(`Server Running on port ${port}.`);
});
