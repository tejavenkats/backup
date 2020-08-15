const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/personsDB", {
  useNewUrlParser: true,
});

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Don't you have a name"],
  },
  age: Number,
});

const Person = new mongoose.model("Person", personSchema);

const person = new Person({
  name: "Mia",
  age: 30,
});

// person.save();
//

// const person2 = new Person({
//   name: "Angela",
//   age: 36,
// });

// const person3 = new Person({
//   name: "Teja",
//   age: 21,
// });

// const person4 = new Person({
//   name: "Keerthy",
//   age: 36,
// });

// // Person.insertMany([person2, person3, person4], function (err) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("InsertionMany successful");
// //   }
// // });

Person.find(function (err, people) {
  if (err) {
    console.log(err);
  } else {
    people.forEach((element) => {
      mongoose.connection.close();
      console.log(element.name);
    });
  }
});

Person.deleteOne({ name: "Mia" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("removed successfully");
  }
});
