const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const data = req.body;

  fs.writeFile('data.json', JSON.stringify(data), err => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
      res.send('Data stored successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
