// Function to summarize the sandwich being ordered
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log(" - Plain sandwich");
    } else {
        items.forEach(item => {
            console.log(` - ${item}`);
        });
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss cheese", "Tomato", "Mayonnaise");
orderSandwich("Peanut Butter", "Jelly");
