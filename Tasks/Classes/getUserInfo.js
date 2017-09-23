class User {
  constructor(name, lastName, date) {
  	this.name = name;
    this.lastName = lastName;
    this.date = date;
  }
}

class UserList {

	constructor() {
  	this.users = [];
  }
  
  add(user) {
  	this.users.push(user);
  }
  
  getAllUsers() {
    return this.users;
  }
}

const userList = new UserList();
 
 do {
   getFirstLastName = prompt('Введите имя и фамилию для регистрации');

   if (getFirstLastName === null) {
     console.warn('The name and lastName are incorrect');
     break;
   }
   
   const userOne = new User(getFirstLastName.split(' ')[0], getFirstLastName.split(' ')[1], new Date());

   userList.add(userOne);

 } while (getFirstLastName !== null);

console.log(userList.getAllUsers());



