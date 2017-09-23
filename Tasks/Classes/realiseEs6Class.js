// Code goes here

class Vehicle {
  constructor(power, wheels, places, canFly, canSwim) {
    this.power = power;
    this.wheels = wheels;
    this.places = places;
    this.canFly = canFly;
    this.canSwim = canSwim;
  }

  getPower() {
    return this.power;
  }

  printSoundOfEngine() {
    console.log('The sound is: WRRRRR Wrrr WRRR');
  }

  isVehicleCanFly() {
    console.log(`I can fly? ${this.canFly}`);
  }
}

class Car extends Vehicle {
  constructor() {
    super(...arguments);
  }

  printSoundOfEngine() {
    console.log('The sound is: Whssss Whmmmmmmmmm');
  }
}

class Ship extends Vehicle {
  constructor() {
    super(...arguments);
  }

  printSoundOfEngine() {
    console.log('The sound is: Tooo Tooo TOoo');
  }
  
  printCommonSoundOfEngine() {
    super.printSoundOfEngine();
  }
}

const vehicleOne = new Vehicle(400, 2, 2, false, false);
const carOne = new Car(168, 4, 5, false, false);
const shipOne = new Ship(2502, 0, 400, false, true);

shipOne.printSoundOfEngine();
shipOne.printCommonSoundOfEngine();
console.log(shipOne.getPower());
