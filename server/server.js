const express = require('express');
const router = require("./src/routes/index");

const app = express();
var cors = require('cors');

const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);
app.use("/uploads", express.static("uploads"));

app.listen(port, () => { console.log(`Your server is running on ${port}`); });