// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema for the Person model
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
  birthday: Date
});

// Create a model based on the schema
const Person = mongoose.model('Person', personSchema);

app.use(bodyParser.json());

// Endpoint to insert a new person into the database
app.post('/api/persons', async (req, res) => {
  const { name, age, address, birthday } = req.body;
  try {
    const person = new Person({ name, age, address, birthday });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to fetch all persons from the database
app.get('/api/persons', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
