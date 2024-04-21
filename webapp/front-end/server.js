const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.text());

app.get('/variable', (req, res) => {
  fs.readFile('variable.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading variable:', err);
      res.status(500).send('Error reading variable');
    } else {
      res.send(data);
    }
  });
});

app.post('/updateVariable', (req, res) => {
  fs.writeFile('variable.txt', req.body, (err) => {
    if (err) {
      console.error('Error updating variable:', err);
      res.status(500).send('Error updating variable');
    } else {
      res.send('Variable updated successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
