// Array of numbers 1 through 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
numbers.forEach(function (number) {
    // Determine the proper ordinal ending
    var ordinal;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    // Print the result
    console.log("".concat(number).concat(ordinal));
});
