// Function to show magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Function to make magicians great
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(`the Great ${magicians[i]}`);
    }
    return great_magicians;
}

// Array of magician's names
let magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call make_great with a copy of the magician_names array
let great_magicians: string[] = make_great([...magician_names]);

// Call the function to show magicians before modification
console.log("Original Magicians:");
show_magicians(magician_names);

// Call the function to show magicians after modification
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
