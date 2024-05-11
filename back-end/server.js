const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./UserRoutes'); // Import userRoutes
var cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const Patient = require('./UserModel');

const app = express();
const PORT = process.env.PORT || 3002;

const uri = "mongodb+srv://oussama:oussama@cluster0.qgvvxvt.mongodb.net/Patients";
//const uri = "mongodb+srv://oussama:oussama@cluster0.qgvvxvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//const uri = "mongodb+srv://oussama:oussama@cluster0.21sdqm1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(cors())
app.use(express.json());
app.use('/api/users', userRoutes)

mongoose.connect(uri, { })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
