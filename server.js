
const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
