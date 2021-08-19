/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
        have to do this one by one
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = []; //empty stomach array
  
}
Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  } 
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}

//when eating somethign edible they have no effect
//we need to write a method for the eat 



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
//write a method
Car.prototype.fill = function (gallons){
  this.tank = this.tank + gallons;
  // you are just reassigning the tank values from before and telling it that you want it to be able to.
}

//STRETCH START::

 Car.prototype.drive = function(distance){
  const milesPossible = this.tank * this.milesPerGallon;
  //we need to find 
  if(distance <= milesPossible){
    this.odometer = this.odometer + distance;
    this.tank = this.tank - (distance /this.milesPerGallon)
  }else if (this.tank = 0){
    return `the tank has run out of fuel at ${this.odometer} miles...`;
  }
  return Car.drive(distance)

} 

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  //in order to bind this NEW thing(WHAT TO CALL IT??) ******* we need to do the following and identify what has already happened with .call
  Person.call(this, name, age);
  //something else e define as the following
  this.favoriteToy = favoriteToy;
}       
/* now we need to create a way that the child can get in on the fun and inherit the parent's 
attributes by stating oBJECT.CREATE and putting parent attr on one side and child attr on the other
and using prototype like so */
Baby.prototype = Object.create(Person.prototype);

/* NOW We set the function to start at our action word (METHOD - it is an function on the object, 
  therefore method) that we created (in this case 'play') */
Baby.prototype.play = function(){
  /* if you wanted to give a conditional here to allow him to play with the favorite toy, what else would you need?
  Say if he cant play with this toy before he turns "this.age = 8" */
    return `Playing with ${this.favoriteToy}`
}

/* 
  TASK 4 ** i like these - hope we can get feedback on it before we do the sprint challenge
  In your own words explain the four principles for the "this" keyword below:

  1. NEW: here, in making new object with constructor functions, "this" refers to the specific instance of the object that is created and returned 
  2. EXPLICIT : when we use the methods .call() or .apply(), the "this" is EXPLICITLY define bc we are explicity calling them with the new functions aforementioned.
  3. IMPLICIT: the object to the left of the dot is what this is referring to when the function is invoked. Implicit is really looking at mostly methods wherein OBJECTS are tied to their key's via dot notation. This makes "this" easy to define by saying that it is tied to the object to the left of the dot (console.log)
  4. WINDOW: if there is no context or object name for the "this" to cling to, the closest thing it can cling to is the window. Meaning that there is no real object to cling to. Therefore this is considered an error.
*/

//https://john-dugan.com/this-in-javascript/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}