// Function to summarize the sandwich being ordered
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log(" - Plain sandwich");
    }
    else {
        items.forEach(function (item) {
            console.log(" - ".concat(item));
        });
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss cheese", "Tomato", "Mayonnaise");
orderSandwich("Peanut Butter", "Jelly");
