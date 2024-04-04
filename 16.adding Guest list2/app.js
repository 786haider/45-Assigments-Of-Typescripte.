var guest_list = ["Haider", "Anus", "Hassan", "Zubair", "Shazaib"];
var not_present = "Zubair";
var new_guest = "Ayesha";
guest_list[1] = new_guest;
//for (let i=0; i<guest_list.length; i++){
//  console.log(`Respected Sir/Madam ` +guest_list[i] +`,\nI invited you on my Birthday party tommorow.\n`)
//}
guest_list.unshift("Saima", "laiba", "Sana");
//for (let i=0; i<guest_list.length; i++){
//  console.log(`Respected Sir/Madam ` +guest_list[i] +`,\nI invited you on my Birthday party tommorow.I found abig dinner table so we decided to invited more guest\n`)
//}
console.log("\nUnfortunately we cannot arrange big table , only two people allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam. ".concat(remove_guest, " you are not invited."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam " + guest_list[i] + ",\nI invited you on my Birthday party tommorow.I found abig dinner table so we decided to invited more guest\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
