require('dotenv').config();
const express = require('serverless-express/express');
const { default: mongoose } = require('mongoose');
const todoRoute = require('./Routes/todoroute');
const serverless = require('serverless-express/handler');

const app = express();

// app.get('/', (req, res)=> {
//     res.send('hello world');
// });
console.log(process.env.MONGO_URI, "fghjk")
mongoose.connect(process.env.MONGO_URI);
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

//exports.http = serverless(app);

