var guest_list = ["Ali", "Saad", "Raza", "Sara", "Fahad", "Anus", "Haris"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ",\nI invite you on my Birthday.\n\nTHANK YOU");
}
var Absent_peron = "Anus";
var new_guest = "Haider";
guest_list[5] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ",\nI invite you on my Birthday.\n\nTHANK YOU");
}
console.log("Mr. ".concat(Absent_peron, " will not come to my birthday. "));
