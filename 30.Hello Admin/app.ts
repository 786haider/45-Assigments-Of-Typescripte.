let user : string[] =[`Haider`,`Ali`,`Anus`,`Umer`,`Admin`]
for(let user of users){
    if(user==="Admin"){
        console.log("Hello Admin,would you like to see the status report?")
    }

 else{
    console.log(`Hello ${user},Thank You for loging again. `)
 }
}