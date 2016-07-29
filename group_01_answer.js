function Person(name,employeeNum,anSal,reRate){
	this.workerName = name;
	this.workNum = employeeNum;
	this.salary = anSal;
	this.rate = reRate;
};


var atticus = ["Atticus", "2405", "47000", 3];
var atticus2 = new Person(atticus[0],atticus[1],atticus[2],atticus[3]);
//console.log(atticus2);

var jem = ["Jem", "62347", "63500", 4];
var jem2 = new Person(jem[0],jem[1],jem[2],jem[3]);
// Each of these are instances of the object Person
// Each of them are a person object but with different values
// constructor is the prototype

var boo = ["Boo", "11435", "54000", 3];
var boo2 = new Person(boo[0],boo[1],boo[2],boo[3]);

var scout = ["Scout", "6243", "74750", 5];
var scout2 = new Person(scout[0],scout[1],scout[2],scout[3]);

var employee =[atticus,jem,boo,scout];
var employees2 = [atticus2, jem2, boo2, scout2];


employees2.forEach(function(peon){
	var empComp = [];

	empComp.push(peon.workerName);

	var sti;

	switch (peon.rate) {
		case 0:
		case 1:
		case 2: sti = 0;
		break;
		case 3: sti = 0.04;
		break;
		case 4: sti = 0.06;
		break;
		case 5: sti = 0.10;
		break;
	}
	if (peon.workerName.length == 4) {
		sti += 0.05;
	}
	if (peon.salary > 65000) {
		sti -= 0.01;
	}
	if (sti > 0.13) {
		sti = 0.13;
	}
	empComp.push(sti);

	empComp.push(parseInt(peon.salary) + (peon.salary * sti));
	empComp.push(Math.round(peon.salary * sti));
	console.log(empComp);
}
);
