const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./UserRoutes');
const visitRoutes = require('./VisitRoutes');
const adminRoutes = require('./AdminRoutes');
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

const uri = "mongodb+srv://oussama:oussama@cluster0.qgvvxvt.mongodb.net/Patients";
//const uri = "mongodb+srv://oussama:oussama@cluster0.qgvvxvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//const uri = "mongodb+srv://oussama:oussama@cluster0.21sdqm1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(cors())
app.use(express.json());
app.use('/api/users', userRoutes)
app.use('/api', visitRoutes)
app.use('/',  adminRoutes)

mongoose.connect(uri, { })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express server listening on port ${PORT}`);
});