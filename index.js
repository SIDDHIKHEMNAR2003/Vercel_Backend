import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


import cors from 'cors';

import userRoute from './route/userroute.js'; // ✅ include .js extension

const app = express();

app.use(cors());
app.use(express.json()); // ✅ to parse JSON body
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB", error);
}

// Define routes
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
