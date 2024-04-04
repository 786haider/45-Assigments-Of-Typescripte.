// Array of numbers 1 through 9
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
numbers.forEach(number => {
    // Determine the proper ordinal ending
    let ordinal: string;
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    // Print the result
    console.log(`${number}${ordinal}`);
});
