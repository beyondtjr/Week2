//
// COMPLETED: Story: As a programmer, I can make a car.
// Hint: Create a class called Car, and create a variable called myCar which contains an object of class Car.
// COMPLETED: Story: As a programmer, I can tell how many wheels a car has; default is four.
//
// COMPLETED: Story: As a programmer, I can make a Tesla car.
// Hint: Create an variable called myTesla which is of class Tesla which inherits from class Car.
//
// COMPLETED: Story: As a programmer, I can make a Tata car.
//
// COMPLETED: Story: As a programmer, I can make a Toyota car.
//
// COMPLETED: Story: As a programmer, I can tell which model year a vehicle is from. Model years never change.
// Hint: Make model year part of the initialization.

// COMPLETED: Story: As a programmer, I can turn on and off the lights on a given Car.
// Hint: Create method(s) to allow programmer to turn lights on and off. Which class are the methods in?
//
// COMPLETED: Story: As a programmer, I can determine if the lights are on or off. Lights start in the off position.
//
// 	COMPLETED: Story: As a programmer, I can signal left and right. Turn signals starts off.
//
// COMPLETED: Story: As a programmer, I can determine the speed of a car. Speed starts at 0 km/h.
//
// COMPLETED: Story: As a programmer, I can speed my Teslas up by 10 per acceleration.
//
// COMPLETED: TODO: Implement stop speed at 0. Story: As a programmer, I can slow my Teslas down by 7 per braking.
//
// COMPLETED: Story: As a programmer, I can speed my Tatas up by 2 per acceleration.
//
// COMPLETED: TODO: Implement stop speed at 0. Story: As a programmer, I can slow my Tatas down by 1.25 per braking.
//
// COMPLETED: Story: As a programmer, I can speed my Toyotas up by 7 per acceleration.
//
// COMPLETED: TODO: Implement stop speed at 0. Story: As a programmer, I can slow my Toyotas down by 5 per braking.
//

// COMPLETED: Story: As a programmer, I can call upon a car to tell me all it's information.
// Hint: Implement carInfo method on one or more classes. You can call a super class's carInfo with super.
//
// COMPLETED: Story: As a programmer, I can keep a collection of two of each kind of vehicle, all from different years.
// Hint: Create two of each vehicles, all from different model years, and put them into an Array.

class Car {
	constructor(color, wheels, model, modelYear, power){
		this.speed = 0, // 0
		this.color = color, // 1
		this.model = model,
		this.wheels = wheels,
		this.modelYear = modelYear,
		this.lightsOn = false,
		this.rightBlinker = false,
		this.leftBlinker = false,
		this.power = power

	}

	toggleLights(){
		this.lightsOn = !this.lightsOn
	}

	rightSignalOn(){
		this.rightBlinker = !this.rightBlinker
	}

	leftSignalOn(){
		this.leftBlinker = !this.leftBlinker
	}

	carInfo(){
		return	"This is the current speed at " + this.speed + ", the color is " + this.color + " and the model year is " + this.modelYear + "." + this.power + "."
	}

}

class Tesla extends Car {
	constructor(color, wheels, model, modelYear){
		super(color, wheels, model, modelYear)
		this.power = "electric"
	}
	accelertor(){
		this.speed += 10
	}

	decelerator(){
		this.speed -= 7

	}

}

class Tata extends Car {
	constructor(color, wheels, model, modelYear, power){
		super(color, wheels, model, modelYear, power)
		// this.power = "diesel"
	}
	accelertor(){
		this.speed += 2
	}

	decelerator(){
		this.speed -= 1.25
	}

}


class Toyota extends Car {
	constructor(color, wheels, model, modelYear, power){
		super(color, wheels, model, modelYear, power)
	}
	accelertor(){
		this.speed += 7
	}

	decelerator(){
		this.speed -= 5
	}
}

// let myCar = new Car ()
// // myCar.toggleLights();
// myCar.carInfo();
// console.log(myCar);


let myTesla = new Tesla ("candy apple red", "5", 2017)
// myTesla.accelertor();
// myTesla.decelerator();
myTesla.carInfo();
// myTesla.carInfo();
console.log(myTesla);
console.log(myTesla.carInfo());

let yourTesla = new Tesla ("green", "5", 2018)
yourTesla.carInfo();
console.log(yourTesla);
console.log(yourTesla.carInfo());

// let ourTesla = [myTesla, yourTesla];
// console.log(ourTesla);


let myTata = new Tata ("mustard yellow", 3, 2005, "hybrid")
myTata.carInfo();
console.log(myTata);
console.log(myTata.carInfo());

let yourTata = new Tata ("grey", 4, 1995, "hybrid")
yourTata.carInfo();
console.log(yourTata);
console.log(yourTata.carInfo());

// let ourTata = [myTata, yourTata];
// console.log(ourTata);
// let myToyota = new Toyota ("puke brown", 8, 1975, "diesel")
// myToyota.carInfo();
// console.log(myToyota);
// console.log(myToyota.carInfo());

let garage = [myTesla, yourTesla, myTata, yourTata];
console.log(garage);

garage.sort((a,b) => a.modelYear > b.modelYear);
console.log(garage.sort((a,b) => a.modelYear > b.modelYear));

garage.sort((a,b) => a.model > b.model);
console.log(garage.sort((a,b) => a.model > b.model));

// garage.sort((a,b) => a.modelYear > b.modelYear && a.model > b.model);
// console.log(garage.sort((a,b) => a.modelYear > b.modelYear && a.model > b.model));

// garage.push(ourTesla);
// console.log(garage);
//
// garage.push(ourTata);
// console.log(garage);

// garage.sort();
// console.log(garage);
//
// Story: As a programmer, I can sort my collection of cars based on model year.
//
// Story: As a programmer, I can sort my collection of cars based on model.
// Hint: Sort based on class name.
//
// Story: As a programmer, I can sort my collection of cars based on model and then year.
