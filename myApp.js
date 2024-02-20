require("dotenv").config();
//#1
let uri =
  "mongodb+srv://alfinaditia:" +
  process.env.PW +
  "@freecodecamp.hxxdwff.mongodb.net/db1?retryWrites=true&w=majority";
let mongoose = require("mongoose");
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//#2
let personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

let Person = mongoose.model("Person", personSchema);
/*let dave = new Person({ name: "Dave", age: 39, favoriteFoods: ["Pizza"] });
console.log(dave);*/

//#3
const createAndSavePerson = (done) => {
  let alfin = new Person({
    name: "alfin",
    age: 25,
    favoriteFoods: ["hamburger"],
  });

  alfin.save((err, data) => {
    if (err) {
      return console.log(err);
    } else {
      done(null, data);
    }
  });
};

//#4
let arrayOfPeople = [
  { name: "Alice", age: 21, favoriteFoods: ["pizza", "sushi"] },
  { name: "Max", age: 34, favoriteFoods: ["gado", "sushi"] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, createdPeople) => {
    if (err) {
      return console.log(err);
    } else {
      done(null, createdPeople);
    }
  });
};
//#6
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) {
      return console.log(err);
    } else {
      done(null, data);
    }
  });
};
//#7
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: { $all: [food] } }, (err, data) => {
    if (err) {
      return console.log(err);
    } else {
      done(null, data);
    }
  });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
