let car: string =`Supra`;
//Test 1:Equality comparison (True)
console.log("Is car==`Supra`? I predict True.");
console.log(car == `Supra`); // True

//Test 2:Strict equality comparison (True)
console.log("Is car===`Supra`? I predict True.");
console.log(car === `Supra`); // True

//Test 3:Inequality comparison (False)
console.log("Is car !==`Supra`? I predict False.");
console.log(car !== `Supra`); // False

//Test 4:Strict Inequality comparison (False)
console.log("Is car !==`Supra`? I predict False.");
console.log(car !== `Supra`); // False

//Test 5:Less Then comparison (False)
console.log("Is car < `Supra`? I predict False.");
console.log(car < `Supra`); // False (Iexicographic comparison)

//Test 6:Greater Then comparison (False)
console.log("Is car > `Supra`? I predict False.");
console.log(car > `Supra`); // False (Iexicographic comparison)

//Test 7:Less Then or Equal comparison (True)
console.log("Is car <= `Supra`? I predict True.");
console.log(car <= `Supra`); // True

//Test 8:Greater then or Equal comparison (True)
console.log("Is car >= `Supra`? I predict True.");
console.log(car >= `Supra`); // True 

//Test 9:Checking truthiness (True)
console.log("Is car? I predict True.");
console.log(car); // True (non-empty string is truthly) 


//Test 10:Checking falsness (True)
console.log("Is !car? I predict False.");
console.log(!car); // False (nagation of a truthly value) 

