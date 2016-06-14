function User(){
  
  var firstName, surName;
  
  this.setFirstName = function(name){
    
    firstName = name;
  };
  
  this.setSurname = function(secondName){
    
    surName = secondName;
  };
  
  this.getFullName = function(){
    
    return firstName + ' ' + surName;
  };
  
  this.getFirstName = function(){
    return firstName;
  };
  
  this.getSurName = function(){
    return surName;
  };
}

var user = new User();

user.setFirstName("Petya");
user.setSurname("Ivanov");

alert(user.getFullName());
alert(user.getFirstName());
