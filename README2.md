Description
Hey Everyone!

For this challenge, you need to upgrade 'the employee' to be objects rather than just arrays of information. Specifically:

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];
Each employee array should become an instance of an object (probably called something like Person).
This will also mean that you need to adjust the rest of the logic to accept properties rather than array index.
The original employees array that was used to store each person does not need to be converted to an object. Meaning that you can put your new Person objects inside of an array.
Once you are complete, post to GitHub and submit via this app.

var peepo;
employee.forEach(function(peepo,i){
	peepo = new Person(peepo[0],peepo[1],peepo[2],peepo[3]);
	peepo[i] = peepo
});
console.log(employee);
