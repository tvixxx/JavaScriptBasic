// Create hierarchy entity(constructors, from you can create instances of objects)

function Vehicle(power, wheels, places, canFly, canSwim) {
  this.power = power;
  this.wheels = wheels;
  this.places = places;
  this.canFly = canFly;
  this.canSwim = canSwim;
  
  this.getPower = function() {
    return this.power;
  }
  
  this.__proto__.printSoundOfEngine = function() {
    console.log('The sound is: WRRRRR Wrrr WRRR');
  }

  this.__proto__.isVehicleCanFly = function() {
    console.log(`I can fly? ${this.canFly}`);
  }
}

function Car() {
  Vehicle.apply(this, arguments);
  
  if (this.places >= 4) {
    this.power = 600;
  }
}

function Plane() {
  Vehicle.apply(this, arguments);
  
  this.printSoundOfEngine = function() {
    console.log('The sound is: Whssss Whmmmmmmmmm');
  }
}

function Ship() {
  Vehicle.apply(this, arguments);
  
  const parentSound = this.printSoundOfEngine;
  this.printSoundOfEngine = function() {
    console.log('The sound is: Tooo Tooo TOoo');
  }
  
  this.printCommonSoundOfEngine = parentSound;
}

const vehicleOne = new Vehicle(400, 2, 2, false, false);
const carOne = new Car(168, 4, 5, false, false);
const planeOne = new Plane(3000, 18, 120, true, false);
const shipOne = new Ship(2502, 0, 400, false, true);

carOne.isVehicleCanFly();
carOne.printSoundOfEngine();
console.log(carOne.getPower());

shipOne.printSoundOfEngine();
shipOne.printCommonSoundOfEngine();
console.log(shipOne.getPower());
