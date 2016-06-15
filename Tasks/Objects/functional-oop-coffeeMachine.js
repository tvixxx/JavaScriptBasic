function CoffeeMachine(power, capacity){

  var waterAmount = 0;
  var powerAmount = 0;
  
  var WATER_HEAT_CAPACITY = 4200;
  var temperature = 80;
  var timerId;
  var onReady;
  
  var self = this;
  
  var runningMachine = true;

  powerAmount = power;
  
  this.isRunning = function(){
        
    return !!timerId;
  };
  
  console.log('Создана кофеварка мощностью: ' + power + ' ватт');
  
  this.setWaterAmount = function(amount){
    
    if (amount < 0){
      
      throw new Error('Значение должно быть положительным');
    }
    
    if (amount > capacity){
      
      throw new Error('Нельзя залить воды больше, чем: ' + capacity);
    }
    
    waterAmount = amount;
  };
  
  this.getWaterAmount = function(){
    
    return waterAmount;
  };
  
  function getBoilTime(){
    
    return waterAmount * WATER_HEAT_CAPACITY * temperature / power;
  }
  
  this.setNewPowerAmount = function(newPowerAmount){
    
    var maxPowerCoffeeMachine = 10000;
    var minPowerCoffeeMachine = 200;
    
    if (newPowerAmount >= maxPowerCoffeeMachine) {
      
      throw new Error('Выбрана слишком большая мощность! Мощность не должна быть выше чем: ' + maxPowerCoffeeMachine);
    }
    
    if (newPowerAmount <= minPowerCoffeeMachine) {
      
      throw new Error('Выбрана слишком маленькая мощность! Мощность не должна быть ниже чем: ' + minPowerCoffeeMachine);
    }
    
    powerAmount = newPowerAmount;
  };
  
  this.getPowerAmount = function(){
    
    return powerAmount;
  };
  
  this.run = function() {
    
    timerId = setTimeout(function() {
      timerId = null;
      onReady();
    }, getBoilTime());
  };
  
  this.getLogBoilTime = function(){
    
    var timeToEndCofee = getBoilTime;
    
    return timeToEndCofee();
  };
  
  this.setOnReady = function(newOnReady){
    
    onReady = newOnReady;
  };
}

var coffeeMachine = new CoffeeMachine(100000, 1000);

console.log(coffeeMachine.getPowerAmount());

coffeeMachine.setNewPowerAmount(1000);

console.log(coffeeMachine.getPowerAmount());

coffeeMachine.setWaterAmount(800);

console.log(coffeeMachine.getWaterAmount());

alert( 'До: ' + coffeeMachine.isRunning() );

coffeeMachine.run();

coffeeMachine.setOnReady(function(){
  var amount = coffeeMachine.getWaterAmount();
  var boilTime = coffeeMachine.getLogBoilTime();
  
  console.log('Готов кофе: ' + amount + 'мл' + ', время приготовления состовляет: ' + Math.round( (boilTime / 100).toFixed(1)) + 'с');
});
