// Pure Functions
const person = {
  name: 'John',
  address: {
    country: 'USA',
    city: 'San Francisco',
  },
};
// Copies person object to a new object and updates the new object
// const updatedObj = Object.assign({}, person, { name: 'Bob', age: 30 });

// Does same thing as above code
// Spread operators word shallow updates
const updated = {
  ...person,
  address: {
    ...person.address,
    city: 'New York',
  },
  name: 'Bob',
};

console.log(updated, person);
