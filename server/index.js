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

app.post("/mainForm", async (req, res) => {
  console.log(req.body, "bODY");

  let count = 0;

  for (let i = 0; i < req.body.length; i++) {
    if (req.body[i] === "") continue;

    if (req.body[i] === "calculus") {
      count++;
    }

    if (count > 0) {

      let result = await saveDataToDB();

      res.status(200).json({ "message" : "Successfully saved to DB", result });
    }

    res.sendStatus(400);
  }

  res.send("good");
});

let saveDataToDB = ( ) => {
    //DB logic / Mongo Or MySQL to save data here
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
