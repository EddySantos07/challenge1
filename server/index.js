const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../public"));
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/mainForm", (req, res) => {
  console.log(req.body, "bODY");

  let count = 0;

  for (let i = 0; i < req.body.length; i++) {
    if (req.body[i] === "") continue;

    if (req.body[i] === "calculus") {
      count++;
    }

    if (count > 0) {
      res.sendStatus(200);
    }

    res.sendStatus(400);
  }

  res.send("good");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
