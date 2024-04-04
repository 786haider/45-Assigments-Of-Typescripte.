// Array of animals with a common characteristic
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Loop through the array to print the name of each animal
for (let animal of animals) {
    console.log(animal);
}

console.log("\n");

// Modify the loop to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("\n");

// Additional sentence about the common characteristic
console.log("Any of these animals would make a great pet!");
