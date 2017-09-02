function User(firstName, lastName, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDate;
}

function UserList() {
  
  this.users = [];
  
  this.add = function(user) {
    this.users.push(user)
  }
 
  this.getAllUsers = function() {
    return this.users;
  }
}

let userList = new UserList();
let getFirstAndLastName;

do {
  getFirstAndLastName = prompt('Введите имя и фамилию для регистрации:');
  
  if ( getFirstAndLastName !== null ) {	
    let firstName = getFirstAndLastName.split(' ')[0];
    let lastName = getFirstAndLastName.split(' ')[1];

    let userOne = new User(firstName, lastName, new Date());
  }
    
} while (getFirstAndLastName !== null);

userList.add(userOne);

console.log(userList.getAllUsers());
