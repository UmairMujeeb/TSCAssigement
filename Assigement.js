"use strict";
//-----2-----
let Name1; //variable declaration
Name1 = "Umair Mujeeb"; //value assigement
console.log(`Hello ${Name1}, would you like to learn some Python today?`);
//-------3-------
let PersonName = "Umair Mujeeb";
console.log(PersonName.toLowerCase()); // Output: umair mujeeb
console.log(PersonName.toUpperCase()); // Output: UMAIR MUJEEB
let titlecasename = PersonName.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
console.log(titlecasename); // Output: Umair Mujeeb
//-------4------
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
//--------5-------
let quote1 = "A person who never made a mistake never tried anything new.";
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "${quote1}"`;
console.log(message);
//--------6---------
let namewithwhitespace = "\t      Umair     \n";
console.log("Name With White Space: ");
console.log(namewithwhitespace);
let strippedname = namewithwhitespace.trim();
console.log("\nstripped name:  ");
console.log(strippedname);
//------7----
//Addition
let AdditionResult = 5 + 3;
console.log("Addition: " + AdditionResult);
//Multiplication
let MultiplicationResult = 4 * 2;
console.log("Multiplication: " + MultiplicationResult);
//Substraction
let SubstractionResult = 10 - 2;
console.log("Subtraction: " + SubstractionResult);
//Division
let DivisionResult = 16 / 2;
console.log("Division: " + DivisionResult);
//------8-----------
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//-----------9-------------
let Favourite_Number1 = 5;
console.log("My Favourite Number Is: " + Favourite_Number1);
console.log(`My Favourite Number Is: ${Favourite_Number1}`);
//-----------10-------------
let Favourite_Number = 5;
console.log("My Favourite Number Is: " + Favourite_Number);
console.log(`My Favourite Number Is: ${Favourite_Number}`);
//--------11------
let Name2 = "Umair";
console.log(Name2);
let Names1 = ["Akram", "Aslam", "Akmal", "Ahmed", "Azher",];
console.log(Names1);
console.log(Names1[1]);
for (let i = 0; i < 5; i++) {
    console.log(i);
    console.log(Names1[i]);
}
//------12------
const Names = ["Akram", "Aslam", "Akmal", "Ahmed", "Azher"];
for (let i = 0; i < Names.length; i++) {
    console.log(`Hello, ${Names[i]} I Hope you are doing well,`);
}
//------13-------
const Transportation = ["Bicycle", "Motorcycle", "Scooter", "Car", "Boat"];
for (let i = 0; i < Transportation.length; i++) {
    console.log(`I Would like to own a ${Transportation[i]},`);
}
Transportation.map((items) => console.log(`I Will Buy ${items}`));
//------14------
const guestlist1 = ["Umair", "Mujeeb", "Agwan"];
for (let i = 0; i < guestlist1.length; i++) {
    console.log(`Dear ${guestlist1[i]}, You are cordially invited to dinner. We would be honored to have your presence.`);
}
//-----15------
const guestlist = ["Umair", "Mujeeb", "Agwan"];
const Guestwhocantmakeit = guestlist[2];
console.log(`${Guestwhocantmakeit} Can't Make It To The Dinner.`);
const newguest = "UMA";
guestlist[2] = newguest;
for (let i = 0; i < guestlist.length; i++) {
    console.log(`Dear ${guestlist[i]}, You are cordially invited to dinner. We would be honored to have your presence.`);
}
//--------16--------
//part 1
//let guestArr : string[] = ["Umair", "Mujeeb", "Agwan", "fahad"];
//let whocantmakeit : string = `fahad`
//let newguest : string = "waniya";
//guestArr[guestArr.indexOf(whocantmakeit)] = newguest;
//console.log(guestArr)
