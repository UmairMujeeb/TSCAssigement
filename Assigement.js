"use strict";
//-----2-----
//let Name1: String; //variable declaration
//Name1 = "Umair Mujeeb"; //value assigement
//console.log(`Hello ${Name1}, would you like to learn some Python today?`);
//-------3-------
//let PersonName: String = "Umair Mujeeb";
//console.log(PersonName.toLowerCase()); // Output: umair mujeeb
//console.log(PersonName.toUpperCase()); // Output: UMAIR MUJEEB
//let titlecasename: string = PersonName.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
//console.log(titlecasename); // Output: Umair Mujeeb
//-------4------
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//let quote: string = "A person who never made a mistake never tried anything new.";
//let author: string = "Albert Einstein";
//console.log(`${author} once said, "${quote}"`);
//--------5-------
//let quote1: string = "A person who never made a mistake never tried anything new.";
//let famous_person: string = "Albert Einstein";
//let message: string =`${famous_person} once said, "${quote1}"`;
//console.log(message);
//--------6---------
//let namewithwhitespace: string = "\t      Umair     \n";
//console.log("Name With White Space: ");
//console.log(namewithwhitespace);
//let strippedname: string = namewithwhitespace.trim();
//console.log("\nstripped name:  ");
//console.log(strippedname);
//------7----
//Addition
//let AdditionResult: number = 5 + 3;
//console.log("Addition: " + AdditionResult);
//Multiplication
//let MultiplicationResult: number = 4 * 2;
//console.log("Multiplication: " + MultiplicationResult);
//Substraction
//let SubstractionResult: number = 10 - 2;
//console.log("Subtraction: " + SubstractionResult);
//Division
//let DivisionResult: number = 16 / 2;
//console.log("Division: " + DivisionResult);
//------8-----------
//console.log(5+3);
//console.log(10 - 2);
//console.log(4 * 2);
//console.log(16 / 2);
//-----------9-------------
//let Favourite_Number1: number = 5;
//console.log("My Favourite Number Is: " + Favourite_Number1);
//console.log(`My Favourite Number Is: ${Favourite_Number1}`);
//-----------10-------------
//let Favourite_Number: number = 5;
//console.log("My Favourite Number Is: " + Favourite_Number);
//console.log(`My Favourite Number Is: ${Favourite_Number}`);
//--------11------
//let Name2: String = "Umair";
//console.log(Name2);
//let Names1: string[] = ["Akram", "Aslam", "Akmal", "Ahmed", "Azher",];
//console.log(Names1);
//console.log(Names1[1]);
//for(let i=0; i<5; i++)
//{
//    console.log(i);
//    console.log(Names1[i]);
//}
//------12------
//const Names: string[] = ["Akram", "Aslam", "Akmal", "Ahmed", "Azher"];
//for (let i = 0; i < Names.length; i++) {
//    console.log(`Hello, ${Names[i]} I Hope you are doing well,`);
//}
//------13-------
//const Transportation: string[] = ["Bicycle", "Motorcycle", "Scooter", "Car", "Boat"];
//for (let i = 0; i < Transportation.length; i++) {
//    console.log(`I Would like to own a ${Transportation[i]},`);
//}
//Transportation.map((items) => console.log(`I Will Buy ${items}`));
//------14------
//const guestlist1: string[] = ["Umair", "Mujeeb", "Agwan"];
//for (let i=0; i < guestlist1.length; i++) {
//    console.log(`Dear ${guestlist1[i]}, You are cordially invited to dinner. We would be honored to have your presence.`);
//}
//-----15------
//const guestlist: string[] = ["Umair", "Mujeeb", "Agwan"];
//const Guestwhocantmakeit: string = guestlist[2];
//console.log(`${Guestwhocantmakeit} Can't Make It To The Dinner.`);
//const newguest: string = "UMA";
//guestlist[2] = newguest;
//for (let i=0; i < guestlist.length; i++) {
//    console.log(`Dear ${guestlist[i]}, You are cordially invited to dinner. We would be honored to have your presence.`);
//}
//--------16--------
//part 1
// let guestArr : string[] = ["Umair", "Mujeeb", "Agwan", "fahad"];
// let whocantmakeit : string = `fahad`
//let newguest : string = "waniya";
//guestArr[guestArr.indexOf(whocantmakeit)] = newguest;
//console.log(guestArr)
//guestArr.map((items) => 
//console.log(`Dear ${items}, I Have Found A Bigger Dinner Table, So Im Invited More People.`)
//);
//Part2 Began
//let guestbeg : string = "Hassan";
//guestArr.unshift(guestbeg);
//console.log(guestArr);
//PArt 3 Middel
//let guestmid : string = "Hussain";
//let middelindex = guestArr.length/3;
//guestArr.splice(middelindex,0,guestmid);
//console.log(guestArr);
//Part4 Append
//guestArr.push("abdullah");
//console.log(guestArr);
//Part 5
//guestArr.map((items) =>
//console.log(`Dear ${items}, You are invited in the more people list on dinner`));
//-----17------
// let guestArr : string[] = ["Umair", "Mujeeb", "Agwan", "fahad"];
// informing that only two people can be invited
// console.log(`Due to limited Space, only two people can be invited`);
// Removing Guests until only two people remain
// while(guestArr.length > 2) {
//     const removedguest = guestArr.pop() // remove the last guest from the list
//     console.log(`sorry, ${removedguest}, you are no longer invited to dinner.`);
// }
//  guestArr.forEach((guestArr) => {
//      console.log(`Dear ${guestArr}, You are still invited to dinner.`);
//  })
// Removing last tqo guest from list
// guestArr.pop();
// guestArr.pop();
// // Final list
// console.log(`Final Guest List:`, guestArr);
//-----18-----
//Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. 
// let placesToVisit: string[] = ['Makkah', 'Madina', 'Dubai', 'Qatar', 'Iran',];
// // Print your array in its original order.
// console.log('orignal order:', placesToVisit);
// // Print your array in alphabetical order without modifying the actual list.
// console.log('Alphabetical order:', [...placesToVisit].sort());
// // Show that your array is still in its original order by printing it.
// console.log('Orignal order after sorting:', placesToVisit);
// // Print your array in reverse alphabetical order without changing the order of the original list.
// console.log('Reverse Alphabetical order:', [...placesToVisit].sort().reverse());
// // Show that your array is still in its original order by printing it again.
// console.log('Orignal order after reverse sorting:', placesToVisit);
// // Reverse the order of your list. Print the array to show that its order has changed.
// placesToVisit.reverse();
// console.log("Reversed Order:", placesToVisit);
// // Reverse the order of your list again. Print the list to show it’s back to its original order.
// placesToVisit.reverse();
// console.log("Back To Orignal order:", placesToVisit);
// // Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// placesToVisit.sort();
// console.log("Sort in Alphabetical Order:",placesToVisit);
// // Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("Sorted in reserve alphabetical order:", placesToVisit);
//------19------
// let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
// console.log(`I am inviting ${guests.length} people to dinner.`);
//-------20---------
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, 
// or anything else you’d like. Write a program that creates a list containing these items.
// let country: string [] = ["Pakistan", "Makkah", "Madina", "Qatar", "Oman"];
// console.log("List Of country:");
// console.log(country);
//-------21--------
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
// let person: {name: string, fname: string, age: string} = {name:"Umair", fname:"Male", age: "38",};
// console.log(person);
//--------22---------
// Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.
// const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];
// //console.log(days{5});
// console.log(days[3]);
//-------23-------
// Conditional Tests: Write a series of conditional tests. Print a statement 
// describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// console.log("Is car == 'Toyota'? I predict True.")
// console.log(car == 'Toyota')
// console.log("Is car != 'Elentra'? I predict True.");
// console.log(car !== 'Elentra');
// console.log("Is car != 'Sonata'? I predict True.");
// console.log(car !== 'sonata');
// console.log("Is car.lenght == 6? I predict True.");
// console.log(car.length == 6);
// console.log("Is 5 > 12 ? I predict False.");
// console.log(5 > 12);
// console.log("Is 155 <= 72 ? I predict False.");
// console.log(155 <= 72);
// console.log("Is 1 => -2 ? I predict False.");
// console.log(1 <= -2);
// console.log("Is car == 'subaru'? I predict False.")
// console.log(car == 'Subaru')
// console.log("Is car !== 'ELENTRA'? I predict False.");
// console.log(car == 'elentra');
//-------24-------
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// Equality with strings
// console.log("Testing equality with strings:");
// console.log("apple" == "apple"); //True
// console.log("Apple" == "apple"); //False
// console.log("Testing with lower case:");
// console.log("Apple".toLowerCase() == "apple"); // True
// console.log("Numerical tests:");
// console.log(10 > 5); // True
// console.log(2 < 1); // False
// Tests using "and" and "or" operators
// console.log("Tests with 'and' and 'or':");
// console.log(true && false); // False
// console.log(true || false); // True
// let fruits = ["apple", "banana", "cherry"];
// console.log("Is 'apple' in fruits?");
// console.log(fruits.includes("apple")); // True
// console.log("Is 'mango' not in fruits?");
// console.log(!fruits.includes("mango")); // True
//-------25------
// Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is,
//print a message that the player just earned 5 points.
// let alien_color = "green";
// if (alien_color == "green");
// console.log(`You Just earned 5 Points`);
//Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)
// let alien_color: string = "red";
// if (alien_color == "green")
// console.log("no output");
//-----26-----
//player just earned 5 points for shooting the alien.
// let alien_color = "green";
// if (alien_color == "green") {
//     console.log( "player just earned 5 points for shooting alien")
// } else {
// console.log(`player Just earned 10 Points`);
// }
// player just earned 10 points.
// let alien_color1 = "red";
// if (alien_color1 == "green") {
//     console.log( "player just earned 5 points for shooting alien")
// } else {
// console.log(`player Just earned 10 Points`);
// }
//------27------
// let alien_color2: string = "green"
// if (alien_color2 == "green") {
//     console.log("player earned 5 points")
// } else if (alien_color2 == "yellow"){
//     console.log("player earned 10 points")
// }else if (alien_color2 = "red"){
//     console.log("player earned 15 points")
// }
//------28---------2 4 13 20 65
// let age : number = 65
// if (age < 2) {
//     console.log("you are a baby")
// }else if (age < 4){
//     console.log("you are a toddler")
// }else if (age < 13){
//     console.log("you are a kid")
// }else if (age < 20){
//     console.log("you are a teenager")
// }else if (age < 65){
//     console.log("you are a adult")
// }else if (age < 85){
//     console.log("you are a elder")
// }
//-----29-------
// let favorite_fruits: string[] = ["apples", "bananas", "cherries", "mango", "grapes",];
// if (favorite_fruits.includes("bananas")) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("apples")) {
//     console.log("You really like apples!")
// }
// if (favorite_fruits.includes("cherries")) {
//     console.log("cherries")
// }
// if (favorite_fruits.includes("grapes")) {
//     console.log("grapes!")
// }
// if (favorite_fruits.includes("mango")) {
//     console.log("mango")
// }
//-------30---------
// let username : string [] = ["admin", "umair", "mujeeb", "agwan", "eric",];
// for(let user of username) {
//     if (user === "admin") {
//         console.log("Hello Admin, would you like to see a status report?")
//     }else {
//         console.log(` Hello, ${user}, thank you for logging in again`)
//     }
// }
//-------31--------
// let users : string[] = ["umair", "mujeeb", "admin", "waniya", "fatiam",];
// if (users.length === 0){
// } else {
//     for (let user of users) {
//         if ( user === "admin") {
//             console.log("Hello Admin, would you like to see a status report?")
//         } else {
//             console.log(` Hello, ${user}, thank you for logging in again`)
//         }
//     }
// }
// users = []
// if (users.length === 0) {
//     console.log("We need to find some users!");
// }
//-----32------
// let current_users : string[] = ["Admin", "Eric", "Umair", "Mujeeb", "Agwan"];
// let new_users : string [] = ["Umair", "Waniya", "Fatima", "Fahad", "Mujeeb"];
// let current_users_lower : string[] = current_users.map(user => user.toLowerCase())
// for (let new_user of new_users){
// if (current_users_lower.includes (new_user.toLowerCase())){
//      console.log(`Sorry ${new_user}, that name is taken`)
// } else {
//     console.log(`yes ${new_user}, is still in available list`)
// }
// }
//------33------
// let numbers : number[] = [1,2,3,4,5,6,7,8,9];
// numbers.forEach(number => {
//     let suffix = "th";
//     if (number === 1) {
//         suffix = "st";
//     } else if (number === 2) {
//         suffix = "nd";
//     } else if (number === 3) {
//         suffix = "rd";
//     }
//     console.log(`${number}${suffix}`);
// });
//-------34------
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
// let pizzas: string [] = ["pepproni", "Margherita", "Bbq chicken"];
// pizzas.forEach(pizza => {
//     console.log(pizza)
// });
//Modify your for loop to print a sentence using the name of the pizza 
//instead of printing just the name of the pizza. For each pizza you 
//should have one line of output containing a simple statement like I like pepperoni pizza.
// pizzas.forEach(pizza => {
//     console.log(`i like ${pizza} pizza`)
// });
//• Add a line at the end of your program, outside the for loop, that states how much you 
//like pizza. The output should consist of three or more lines about the kinds of 
//pizza you like and then an additional sentence, such as I really love pizza!
//  console.log(`i really love pizza`)
//-----35------
//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out 
//the name of each animal. • Modify your program to print a statement about each animal, 
//such as A dog would make a great pet. • Add a line at the end of your program stating what 
//these animals have in common. You could print a sentence such as Any of these animals 
//would make a great pet!
// let animals: string[] = ["dog", "cat", "rabbit"];
// animals.forEach(animal => {
//     console.log(animal);
// });
// animals.forEach(animal => {
//     console.log(`A ${animal} would make a great pet.`);
// });
// console.log("Any of these animals would make a great pet!");
//------36-------
//T-Shirt: Write a function called make_shirt() that accepts a size and the 
//text of a message that should be printed on the shirt. The function should 
//print a sentence summarizing the size of the shirt and the message printed 
//on it. Call the function.
// function make_shirt(size: string, message: string) {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }
// make_shirt("large", "Cod is Life");
//-----37-----
// Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
// with the default message,and a shirt of any size with a different message.
// function make_shirt(size: string = "large", message: string = "I love TypeScript") {
//      console.log(`Making a ${size} Shirt, with the message "${message}" printed on it.`);
//      }
// make_shirt("large", "I love TypeScript");
// make_shirt("medium", "I love TypeScript" );
// make_shirt("small", "I love cod");
// make_shirt(); // Default large and message
// make_shirt("medium"); // Default message, medium size
// make_shirt("small", "Dive into Coding"); // Custom message, small size
//----38----
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the
//parameter for the country a default value. Call your function for three different cities, 
//at least one of which is not in the default country.
// function describe_city(city: string, country: string = "pakistan") {
// console.log(`${city} is in ${country}`)
// }
// describe_city("karachi");
// describe_city("Islamabad");
// describe_city("Makkah", "Saudia Arab");
//------39------
//City Names: Write a function called city_country() that takes in the name of a city 
//and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city: string,  country: string ): string{
//     return`${city}, ${country}`
// }
// console.log('lahore, pakistan');
// console.log('makkah, saudia arab');
// console.log('dubai, UAE');
//----40------
// function make_album(artist: string, title: string, tracks?: number) {
//     let album = { artist, title };
//     if (tracks) {
//          album["tracks"] = tracks;
//     }
//     return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12));
//------41------
// let magicians: string[] = ["umair", "mujeeb", "agwan"];
// function show_magicians(magicians: string[]) {
//     magicians.forEach(magicians => {
//         console.log(magicians);
//     });
// }
// show_magicians(magicians);
//-------42------
// let magicians: string[] = ["Umair", "Mujeeb", "Agwan"];
// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }
// function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the Great";
//   }
// }
// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names
//-----43------
// let magicians: string[] = ["Umair", "Mujeeb", "Agwan"];
// function make_great(magicians: string[]): string[] {
//   let greatMagicians: string[] = [];
//   magicians.forEach((magician) => {
//     greatMagicians.push(`${magician} the Great`);
// });
// return greatMagicians;
// }
// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }
// let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// show_magicians(greatMagicians); // Shows modified names
//-----44------
// function make_sandwich(...items: string[]) {
//     console.log(`Making a sandwich with: ${items.join(", ")}.`);
//   }
//   make_sandwich("ham", "cheese");
//   make_sandwich("turkey", "lettuce", "tomato");
//   make_sandwich("avocado", "sprouts", "mustard", "mayo");
//------45-------
function make_car(manufacturer, model, ...options) {
    let car = [manufacturer, model];
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
