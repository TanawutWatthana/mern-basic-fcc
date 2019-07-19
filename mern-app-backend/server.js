//import require module
const express = require("express");
const cors = require("cors");

//import config file
require("dotenv").config();

//initialize express app
const app = express();

//setup middleware
// setup cors
app.use(cors());
//setup json body parser from express to app
app.use(express.json());
//setup url encoder/decoder from express to app
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server started on port ${port}`));
