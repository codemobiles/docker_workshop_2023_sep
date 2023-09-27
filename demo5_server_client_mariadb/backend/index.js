const mysql = require("mysql2");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Cross Origin middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", async (req, res) => {
  // Execute a SQL query
  const query = "SELECT * FROM products";
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error:", error);
      res.json([]);
    } else {
      console.log("Results:", results);
      res.json(results);
    }
  });
});

app.get("/add/:name", async (req, res) => {
  // Execute a SQL query
  const name = req.params.name;
  const min = 50;
  const max = 100;
  const randomPrice = Math.floor(Math.random() * (max - min + 1)) + min;

  const query = `INSERT INTO products (name, price) VALUES ('${name}', ${randomPrice})`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error:", error);
      res.json({ result: "nok" });
    } else {
      console.log("Results:", results);
      res.json({ result: "ok" });
    }
  });
});

app.get("/clear", async (req, res) => {
  // Execute a SQL query
  const query = "DELETE FROM products";
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error:", error);
      res.json({ result: "nok" });
    } else {
      console.log("Results:", results);
      res.json({ result: "ok" });
    }
  });
});

// Create a connection to the database
const config = {
  host: process.env.db_server || "localhost",
  user: process.env.db_user || "root",
  password: process.env.db_password || "my-secret-pW7770",
  database: process.env.db_name || "test",
};
console.log("config: \n" + JSON.stringify(config));
const connection = mysql.createConnection(config);

// Establish the connection
connection.connect();
app.listen(process.env.server_port || 8080, () =>
  console.log(`Example app listening on ${process.env.server_port || 8080}`)
);
