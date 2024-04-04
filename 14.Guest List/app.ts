let guest_list : string [] =[`Ali`,`Saad`,`Raza`,`Sara`,`Fahad`,`Anus`,`Haris`];
let Absent_peron: string =`Anus`;
let new_guest: string =`Haider`;
guest_list[5] =new_guest;
for(let i=0;i<guest_list.length; i++){
    console.log(`Respected Sir/Madam` + guest_list[i] + `,\nI invite you on my Birthday.\n\nTHANK YOU`);
}
guest_list.unshift(`Abdullah`,`Ahad`,`Laiba`);
for(let i=0;i<guest_list.length; i++){
    console.log(`Respected Sir/Madam` + guest_list[i] + `,\nI invite you on my Birthday.\n\nTHANK YOU`);
}
export{guest_list}