const express = require('express');
const app = express();
const router = require("./routes/api");
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
  });
}

module.exports = app;