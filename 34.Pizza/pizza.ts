// Array of favorite pizzas
let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Loop through the array to print the name of each pizza
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

console.log("\n");

// Modify the loop to print a sentence for each pizza
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("\n");

// Additional sentence about liking pizza
console.log("I really love pizza!");
