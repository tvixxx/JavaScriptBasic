function CoffeeMachine(power, capacity){
 
  var self = this;

  var waterAmount = 0,
      powerAmount = 0;
  
  var WATER_HEAT_CAPACITY = 4200,
      temperatureOfWaterDelta = 100 - 20;
      timerId;
  
  powerAmount = power;
  
  console.log('Создана кофеварка мощностью: ' + power + ' ватт');
  
  function getBoilTime(){
    return self.waterAmount * WATER_HEAT_CAPACITY * temperatureOfWaterDelta / power;
  }
  
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
  
  this.run = function (){
    timerId = setTimeout(onReady, getBoilTime());
  };
  
  function onReady(){
    console.log('Кофе готов!');
  }
  
  this.stop = function(){
    clearTimeout(timerId);
  };
  
}

var coffeeMachine = new CoffeeMachine(100000, 1000);

console.log(coffeeMachine.getPowerAmount());
coffeeMachine.setNewPowerAmount(200);
console.log(coffeeMachine.getPowerAmount());
coffeeMachine.setWaterAmount(800);
coffeeMachine.stop();
