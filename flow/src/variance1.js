// @flow

class LivingThing {}
class Plant extends LivingThing {}
class Animal extends LivingThing {}
class Dog extends Animal {}
class Cat extends Animal {}

const animals: Animal[] = [];
// In Flow, adding elements to arrays is covariant (can add subtypes).
animals.push(new Dog());
animals.push(new Cat());
animals.push(new Plant()); // error in Flow, but not TS

// In Flow, extracting elements from arrays is contravariant
// (get type of array which is the supertype of the elements)
// eslint-disable prefer-destructuring
const dog: Dog = animals[0]; // error in Flow, but not TS
//const dog: Animal = animals[0]; // works
console.log('dog =', dog);

const plant: Plant = animals[0]; // error in Flow, but not TS
console.log('plant =', plant);