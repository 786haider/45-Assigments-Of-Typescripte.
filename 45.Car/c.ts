// Function to store information about a car in an object
function carInfo(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // Assign additional options to the car object
    options.forEach(option => {
        for (let key in option) {
            car[key] = option[key];
        }
    });

    return car;
}

// Call the function with required information and two other name-value pairs
let carInfoObj = carInfo("Toyota", "Camry", { color: "red", price: 25000 });

// Print the object to ensure all the information was stored correctly
console.log(carInfoObj);
