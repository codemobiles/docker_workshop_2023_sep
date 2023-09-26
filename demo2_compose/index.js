const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ result: "ok" });
});

// http://localhost:3000/register?username=lek&password=6666
app.get("/register", (req, res) => {
  res.json({ result: "register ok", detail: req.query });
});

// linux
// export PORT=3000  
// echo $PORT

// win
// set PORT 3000  
// echo %PORT%

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servier is running port ${process.env.PORT}`);
});
