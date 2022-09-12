const express = require("express");
const req = require("express/lib/request");
const app = express();

app.listen(5000, () => console.log("Server is listening!"));

app.get("/", (req, res) => {
  res.json({ status: "working" });
});

const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://gautamchaterji:Monsoonrain2022@cluster0.ke2uf9w.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  const database = client.db("test");
  const developers = database.collection("developers");
  const developer = await developers.findOne();
  console.log(developer);
  return developer;
}

app.get("/database", (req, res) => {
  run()
    .then((result) => {
      res.json(result);
    })
    .catch(console.dir)
    .finally(() => {
      client.close();
    });
});
