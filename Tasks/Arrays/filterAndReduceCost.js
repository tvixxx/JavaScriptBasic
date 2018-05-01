// Summing total cost if isRacing equal true
// data
 races = [{
    "id": 1,
    "name": "Daytona Thunderdome",
    "date": new Date('2512-01-04T14:00:00'),
    "about": "Race through the ruins of an ancient Florida battle arena.",
    "entryFee": 3200,
    "isRacing": false
  }, {
    "id": 2,
    "name": "San Francisco Ruins",
    "date": new Date('2512-07-03T20:00:00'),
    "about": "Drift down the streets of a city almost sunk under the ocean.",
    "entryFee": 4700,
    "isRacing": true
  }, {
    "id": 3,
    "name": "New York City Skyline",
    "date": new Date('2512-07-12T21:00:00'),
    "about": "Fly between buildings in the electronic sky.",
    "entryFee": 4300,
    "isRacing": true
  }];

// First method
totalCost() {
 let sum = 0;
 for (let race of this.races) { 
   if (race.isRacing) {
     sum += race.entryFee;
   }
 }
 return sum;
}

// Second method
 totalCost() { 
   return this.races
               .filter(item => item.isRacing === true)
               .reduce( (prev, current) => prev + current.entryFee, 0);
  }
