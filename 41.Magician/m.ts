// Function to show magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician's names
let magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the function to show magicians
show_magicians(magician_names);
