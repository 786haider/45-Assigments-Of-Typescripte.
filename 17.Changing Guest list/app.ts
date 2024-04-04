let guest_list : string[]=[`Haider`,`Anus`,`Hassan`,`Zubair`,`Shazaib`];
let not_present : string=`Zubair`;
let new_guest : string=`Ayesha`;
guest_list[1] = new_guest;
//for (let i=0; i<guest_list.length; i++){
  //  console.log(`Respected Sir/Madam ` +guest_list[i] +`,\nI invited you on my Birthday party tommorow.\n`)
//}
guest_list.unshift(`Saima`,`laiba`,`Sana`);
//for (let i=0; i<guest_list.length; i++){
  //  console.log(`Respected Sir/Madam ` +guest_list[i] +`,\nI invited you on my Birthday party tommorow.I found abig dinner table so we decided to invited more guest\n`)
//}
console.log(`\nUnfortunately we cannot arrange big table , only two people allow.`);
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam. ${remove_guest} you are not invited.`);
} 
for (let i=0; i<guest_list.length; i++){
     console.log(`Respected Sir/Madam ` +guest_list[i] +`,\nI invited you on my Birthday party tommorow.I found abig dinner table so we decided to invited more guest\n`)
}
guest_list.splice(0,2)
console.log(guest_list)