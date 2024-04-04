// Array of favorite pizzas
var favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Loop through the array to print the name of each pizza
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
console.log("\n");
// Modify the loop to print a sentence for each pizza
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("\n");
// Additional sentence about liking pizza
console.log("I really love pizza!");
