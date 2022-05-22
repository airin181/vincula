require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000

const router = require("./routes/routes-vincula");
const mongoDBConnection = require('./config/mongodbConfig');

app.use("/api", router)


const init = async () => {
  try {
      await mongoDBConnection();
      app.listen(port, () => {
          console.log(`App listening on port ${port}...`);
      })
  }
  catch (error) {
      console.log(error);
  }
}

init();