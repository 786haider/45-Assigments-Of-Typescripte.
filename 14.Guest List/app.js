"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ["Ali", "Saad", "Raza", "Sara", "Fahad", "Anus", "Haris"];
exports.guest_list = guest_list;
var Absent_peron = "Anus";
var new_guest = "Haider";
guest_list[5] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ",\nI invite you on my Birthday.\n\nTHANK YOU");
}
guest_list.unshift("Abdullah", "Ahad", "Laiba");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ",\nI invite you on my Birthday.\n\nTHANK YOU");
}
