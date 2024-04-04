let car: string = `Supra`;
let age: number= 25;
let numbers: number[]=[1,2,3,4,5];
//String Test

//Test 1: Equality(True)
console.log("Is car ==`Supra`? I predict True.");
console.log (car==`Supra`);//True case-insensitive


//Test 2:Strict Equality(False)
console.log("Is car ===`Supra`? I predict False.");
console.log (car===`Supra`);//False case-sensitive


//Test 3: InEquality(True)
console.log("Is car !=`Toyota`? I predict True.");
console.log (car!=`Toyota`);//True 


//Test 4: InEquality(False)
console.log("Is car !==`Supra`? I predict True.");
console.log (car !==`Supra`);//False case-sensitive

// LOWER FUNCTION TEST

//Test 5:Lower Conversation(True)
console.log("Is car.tolowerCase() ==`Supra`? I predict True.");
console.log(car.toLowerCase()==`Supra`);//True (converted to lower case)


//Test 6:Lower Conversation(False)
console.log("Is car === car.tolowerCase() ==`Supra`? I predict False.");
console.log(car === car.toLowerCase());//False(original value ramians to uppercase)

//Numerical Tests,.

//Test 7:Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25);//True

//Test 8:InEquality (False)
console.log("Is age != 30? I predict False.");
console.log(age != 30);//False

//Test 9: Greater than (False)
console.log("Is age > 30 ? I predict False.");
console.log(age > 30);// False

//Test 10:Less than or Equal(True)
console.log("Is age <= 25 ? I predict True.");
console.log(age <= 25);// True

//Logical Operators

//Test 11:AND (True)
console.log("Is age > 20 &&  age < 30? I predict True.");
console.log(age > 20 && age < 30);//True (both condition meet)


//Test 12:OR (False)
console.log("Is age > 30 ||  age  < 18? I predict False.");
console.log(age > 30 || age < 18);//False (neither condition meet)

//Array Test.

//Test 13:In Array (True)
console.log("Is 3  in numbers? I predict True.");
console.log(3  in numbers);//True (checks for index existence)


//Test 14: Not In Array (False)
console.log("Is 6 not  in numbers? I predict False.");
console.log(6   in numbers);//False (negation of "in" operator)
























































