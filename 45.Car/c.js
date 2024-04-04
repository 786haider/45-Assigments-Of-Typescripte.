// Function to store information about a car in an object
function carInfo(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Assign additional options to the car object
    options.forEach(function (option) {
        for (var key in option) {
            car[key] = option[key];
        }
    });
    return car;
}
// Call the function with required information and two other name-value pairs
var carInfoObj = carInfo("Toyota", "Camry", { color: "red", price: 25000 });
// Print the object to ensure all the information was stored correctly
console.log(carInfoObj);
