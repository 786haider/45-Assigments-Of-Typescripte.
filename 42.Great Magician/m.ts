// Function to show magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Function to make magicians great
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Array of magician's names
let magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call make_great to modify the magician_names array
make_great(magician_names);

// Call the function to show magicians after modification
show_magicians(magician_names);
