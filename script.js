"use strict";

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h



// //Answer of Challange #1

// //1
// const Car = function (make,speed) {
//     this.make = make;
//     this.speed = speed;

//     // const accelerate = function () {
//     //     console.log(`${this.speed + 10}`);
//     // }

//     // const brake = function () {
//     //     console.log(`${this.speed - 10}`)
//     // }
// }
// //2
// Car.prototype.accelerate = function () {
//     console.log(`Car : ${this.make} has accelerated! New Speed is : ${this.speed + 10}kmph`);

// }
// //3
// Car.prototype.brake = function () {
//     console.log(`Car : ${this.make} has braked! New Speed is : ${this.speed - 10}kmph`)
// }

// //4
// const car1 = new Car('BMW',120);
// const car2 = new Car('Mercedes',95);

// car1.accelerate();
// car1.brake();

// car2.accelerate();
// car2.brake();








//Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h



// //Answer 2(problem in getter and setter)

// //1
// class CarCl {
//     constructor(make,speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed+=10;
//         console.log(`Car : ${this.make} has accelerated! New Speed is : ${this.speed + 10}kmph`);

//     }
//     brake() {
//         this.speed-=10;
//         console.log(`Car : ${this.make} has braked! New Speed is : ${this.speed - 10}kmph`)
//     }

//     //2
//     get speedUs(){
//         return `${this.speed/1.6}mi/h`;
//     }
//     //3
//     set speedUS(curspeed){
//         this.speed = curspeed * 1.6;
//     }
// }

// //4
// const car = new CarCl('Ford',120);

// car.accelerate();
// car.brake();
// car.speedUS = 50;
// console.log(car.speedUs);














// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%



// //Answer
// //1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;

// };

// const ElectricCar = function (make,speed,ev) {
//   Car.call(this, make, speed);
//   this.ev = ev;
// };

// ElectricCar.prototype.chargeBattery = function (chargeTo) {
//     this.ev += chargeTo;
//     console.log(`Charge input : ${chargeTo} and battery charged : ${this.ev}% `)
// }

// ElectricCar.prototype.accelerate = function () {
//     this.speed = (this.speed *120)/100;
//     this.ev = (this.ev*99)/100;
//     console.log(`${this.make} going at a ${this.speed} km/h, with charge of ${this.ev*100}%`);
// }

// ElectricCar.prototype.brake = function () {
//     this.speed = (this.speed *80)/100;
//     this.ev = (this.ev*99)/100;
//     console.log(`${this.make} going at a ${this.speed} km/h, with charge of ${this.ev*100}%`);
// }

// //Create an electric car object and experiment with calling 'accelerate',
// // 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// // you 'accelerate'! Hint: Review the definiton of polymorphism �
// // § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

// const car = new ElectricCar('Tesla',120,0.23);
// console.log(car);
// car.accelerate();
// car.brake();
// car.chargeBattery(10);
// car.chargeBattery(10);
// car.chargeBattery(10);





















// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%



// //Answer

// class CarCl {
//     constructor(make,speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed+=10;
//         console.log(`Car : ${this.make} has accelerated! New Speed is : ${this.speed + 10}kmph`);
//         return this;

//     }
//     brake() {
//         this.speed-=10;
//         console.log(`Car : ${this.make} has braked! New Speed is : ${this.speed - 10}kmph`)
//         return this;
//     }
// }

// //1
// class EVCl extends CarCl{
//     //2
//     #ev;

//     constructor(make,speed,ev){
//         super(make,speed);
//         this.#ev = ev;          //2
//     }

//     //3
//     chargeBattery = function (chargeTo) {
//             this.#ev += chargeTo;
//             console.log(`Charge input : ${chargeTo} and battery charged : ${this.#ev}% `);
//             return this;
//     }
// }

// const car1 = new EVCl('Rivian',139,23);

// console.log(car1);

// //3
// car1.accelerate().chargeBattery(10).chargeBattery(20).brake();