const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const middleware = (req, res, next) => {
  console.log("This is middleware one");
  console.log("Getting the 1st request...!");
  next();
};
const middleware2 = (req, res, next) => {
  console.log("This is middleware Two");
  console.log("Getting the 2nd request...!");
  next();
};

/*Middlleware using routes */
app.get("/", (req, res) => {
  res.send(
    `<body style='text-align:center'><h1 style="color:red">"Home Page"</h1><h2 ><a href='/mid1'>Middleware 1</a></h2><h2><a href='/mid2'>Middleware 2</a></h2><h2><a href='/cors'>Cors</a></h2></body>`
  );
});
app.get("/mid1", middleware, (req, res) => {
  res.send(
    `<h1 style="color:green">"First Middleware"</h1><body style='text-align:center'><h1><a href='/mid2'>Middleware 2</a></h1><a href='/'>Home</a></body>`
  );
});
app.get("/mid2", middleware2, (req, res) => {
  res.send(
    `<h1 style="color:green">"Second Middleware"</h1><body style='text-align:center'><h1><a href='/cors'>Cors</a></h1><h3><a href='/mid1'>Middleware 1</a></h3><a href='/'>Home</a></body>`
  );
});

/*cors  */

app.get("/cors", cors(), (req, res) => {
  res.json({
    Data: [
      {
        name: "Ainan Salaha",
        Batch: "EA18",
      },
    ],
  });
});

app.listen(3001, () => {
  console.log("Application started...");
});
