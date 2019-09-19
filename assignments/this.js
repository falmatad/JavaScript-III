/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding if you dont give it context
* 2. Implicit when this is called inside an object.
* 3. New Binding is when you are working with a constructor and you are creating an object, this points to that new object which 
    a parameter of the constructor function.
* 4. Explicit binding is when you point a method to another object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const myObj = {
    name: "Falmata",
    favFood: "Ethiopian",
    favFoodIs: function () {
        return `${this.name}'s favorite food is ${this.favFood}`
    }
};

console.log(myObj.favFoodIs());

// Principle 3

// code example for New Binding
function login(user) {
    this.greeting = "Welcome";
    this.user = user;
    this.greet = function () {
        console.log(`${this.greeting} ${this.user}`);
    }
};

const falmata = new login('Falmata');
const dawano = new login('Dawano');
falmata.greet();
dawano.greet();

// Principle 4

// code example for Explicit Binding

function signIn(user) {
    this.greeting = "Welcome";
    this.user = user;
    this.greet = function () {
        console.log(`${this.greeting} ${this.user}`);
    }
};
const ryan = new signIn('ryan');
const nick = new signIn('nick');
ryan.greet.call(nick);
nick.greet.apply(ryan);