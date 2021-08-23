// object

let books = {
    name:'You can Win',
    writer:'Shiv-khera',
    price:250
}
console.log(books);

// change to the object value

books.name='Hbluder jonno programming';
books.price=170;
books.writer='Jhankar-mahbub';
console.log(books);

// run object property/key
let property=Object.keys(books);
console.log(property);

// run object value
let value=Object.values(books);
console.log(value);

// convert object to array
let changeToArray = Object.entries(books);
console.log(changeToArray);