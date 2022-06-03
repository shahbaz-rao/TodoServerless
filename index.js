const express = require('express');
const { default: mongoose } = require('mongoose');
const todoRoute = require('./Routes/todoroute')

const app = express();

// app.get('/', (req, res)=> {
//     res.send('hello world');
// });
mongoose.connect('mongodb://localhost:27017/todoDB');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(express.json());
app.use('/api/', todoRoute);

app.listen(7000,  () => {
    console.log('Example app listening on port 7000!')
  });
