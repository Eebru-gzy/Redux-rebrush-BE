const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
const connectDB = require('./db')();
const app = express();


app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());


// app.get('/', (req, res)=> {
//   res.send('Hello Spending, Welcome to Todoer')
// })
app.use('/', router)

  const PORT = 7000;

  const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
  });


// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});