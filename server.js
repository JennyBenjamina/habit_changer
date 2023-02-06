const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const { restart } = require('nodemon');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
// Routes
const routes = require('./src/routes/user');
app.use('/', routes);

app.use(express.json());
app.use(cors());

const options = {
  dbName: 'Habits',
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB, options).then(
  () => {
    console.log('connected to mongodb');
  },
  (err) => {
    console.log(err);
  }
);

app.listen(PORT, () => console.log('server running on PORT ' + PORT));
