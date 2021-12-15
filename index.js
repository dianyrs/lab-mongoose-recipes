const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb+srv://dianysecrets5.0@gmail.com:Aste1991@@cluster0.tgxey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });



  const pizza = {
    title: 'pizza',
    level: 'Amateur Chef',
    ingredients: ['dough', 'cheese', 'sauce'],
    cuisine: 'Italian',
    dishType: 'main_course',
    duration: 30,
    creator: 'Diany'
  }

  Recipe.create(pizza).then(results => console.log(results))
  .catch((error) => console.log('Something went wrong', error))




  // Iteration 3
  Recipe.insertMany(data).then((dataFromDB) => {
    console.log(dataFromDB.length)
  })