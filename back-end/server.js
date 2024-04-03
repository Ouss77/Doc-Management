const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./UserRoutes'); // Import userRoutes
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

const uri = "mongodb+srv://oussama:oussama@cluster0.qgvvxvt.mongodb.net/Patients";

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
