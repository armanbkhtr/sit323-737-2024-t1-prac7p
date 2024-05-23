const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const databaseIngfo = `mongodb://localhost:27017/ecommerce`
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(databaseIngfo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
