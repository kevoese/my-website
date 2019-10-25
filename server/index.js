const express = require('express');
const dotenv = require('dotenv');
const path = require('path');


dotenv.config();
const port = process.env.PORT || 7000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
});
