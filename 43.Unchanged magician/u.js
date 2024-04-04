var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Function to make magicians great
function make_great(magicians) {
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great ".concat(magicians[i]));
    }
    return great_magicians;
}
// Array of magician's names
var magician_names = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call make_great with a copy of the magician_names array
var great_magicians = make_great(__spreadArray([], magician_names, true));
// Call the function to show magicians before modification
console.log("Original Magicians:");
show_magicians(magician_names);
// Call the function to show magicians after modification
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
