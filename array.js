console.log('hello world!');

var array = [1, 'hello', true, [2, 3], null];

var myArray = [];
myArray.push(false);
myArray.push('pepsi');
myArray.push(20);

var colorsArray = ['red', 'blue', 'white', 'pink', 'black', 'purple'];
colorsArray.pop();

var user1 = {
  username: 'sursharma06',
  password: '1234',
};

var user2 = {
  username: 'bob',
  password: '3456',
};

user1.username; //using dot operator with objects to access values.
user2.username = 'bob joe'; //update usernames using dot operator as well.

//for in loop
var person = {
  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
};

for (var key in person) {
  console.log(person[key]);
}
//"Homer"
//"Jay"
//"Simpson"
for (var key in person) {
  console.log(key);
}
//firstName
//middleName
//lastName

var places = {
  homeTown: 'Delhi',
  currentTown: 'New York',
  placesLived: 'Dubai',
  placesVisited: ['Canada', 'Mexico'],
};
//console.log(places.hasOwnProperty('homeTown'));
console.log('placesVisited' in places); // returns a boolean indicating if property exists in object.
for (var locations in places) {
  console.log(locations);
  console.log(places[locations]);
}
