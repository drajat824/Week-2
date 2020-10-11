let data = {
  id: 1,
  name: 'Leane Graham',
  username: 'Bret',
  email: 'sincere@april.biz',
  hobi: 'Layangan',
  address:
  {

    street: 'Kulas Light',
    suite: "Apt. 556",
    city: 'Gwen Borough',
    zipcode: '92998-3874',

  },
  phone: '92378283',
  website: 'hildegard.org',
}


//Spread Operator
newData = {...data, name :'Drajat Fikri Alfianto', 
email: 'drajat.fikri24@gmail.com', 
hobi:'Nonton Tv'}

console.log(newData)

//Destructuring
let {street, city } = data.address;

console.log(street, city);
