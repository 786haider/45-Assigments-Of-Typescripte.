// Array of animals with a common characteristic
var animals = ["Dog", "Cat", "Rabbit"];
// Loop through the array to print the name of each animal
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\n");
// Modify the loop to print a statement about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log("\n");
// Additional sentence about the common characteristic
console.log("Any of these animals would make a great pet!");
