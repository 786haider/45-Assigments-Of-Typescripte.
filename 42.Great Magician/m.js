// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Function to make magicians great
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Array of magician's names
var magician_names = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call make_great to modify the magician_names array
make_great(magician_names);
// Call the function to show magicians after modification
show_magicians(magician_names);
