"use strict";

let score = 0;
let questionCounter = 0;
let attempts = 0;

let userName = null;
while (userName == null || userName == "") {
  userName = prompt("Please Enter Your Name ?");
}
console.log(userName);
alert(`Welcome ${userName} to my site ^_^ `);

function askCoffee(){
let coffee = null;
questionCounter++;
while (coffee != "Y" && coffee != "N" && coffee != "YES" && coffee != "NO") {
  coffee = prompt(`Q${questionCounter}: Do you think I love coffee ?`);
  if (coffee != null) {
    coffee = coffee.toUpperCase();
  }
}
if (coffee == "Y" || coffee == "YES") {
  // console.log("Correct");
  score++;
  alert(`Great, CORRECT Answer `);
} else if (coffee == "N" || coffee == "NO") {
  // console.log("Wrong");
  alert(`WRONG Answer !!`);
}
}
function askFootball(){
let football = null;
questionCounter++;
while (
  football != "Y" &&
  football != "N" &&
  football != "YES" &&
  football != "NO"
) {
  football = prompt(`Q${questionCounter}: Do you think I watch football ?`);
  if (football != null) {
    football = football.toUpperCase();
  }
}
if (football == "N" || football == "NO") {
  // console.log("Correct");

  score++;
  alert(`Great, CORRECT Answer `);
} else if (football == "Y" || football == "YES") {
  // console.log("Wrong");
  alert(`WRONG Answer !!`);
}
}
function askMovie(){
let movie = null;
questionCounter++;
while (movie != "Y" && movie != "N" && movie != "YES" && movie != "NO") {
  movie = prompt(
    `Q${questionCounter}: Do you think I like action movie more than romance ?`
  );
  if (movie != null) {
    movie = movie.toUpperCase();
  }
}
if (movie == "Y" || movie == "YES") {
  // console.log("Correct");

  score++;
  alert(`Great, CORRECT Answer `);
} else if (movie == "N" || movie == "NO") {
  // console.log("Wrong");
  alert(`WRONG Answer !! `);
}
}
function askDegree(){
let degree = null;
questionCounter++;
while (degree != "Y" && degree != "N" && degree != "YES" && degree != "NO") {
  degree = prompt(`Q${questionCounter}: Do you think I have master degree ?`);
  if (degree != null) {
    degree = degree.toUpperCase();
  }
}
if (degree == "N" || degree == "NO") {
  // console.log("Correct");

  score++;
  alert(`Great, CORRECT Answer `);
} else if (degree == "Y" || degree == "YES") {
  // console.log("Wrong");
  alert(`WRONG Answer !! `);
}
}
function askWeather(){
let weather = null;
questionCounter++;
while (
  weather != "Y" &&
  weather != "N" &&
  weather != "YES" &&
  weather != "NO"
) {
  weather = prompt(
    `Q${questionCounter}: Do you think I prefer Summer more than Winter ?`
  );
  if (weather != null) {
    weather = weather.toUpperCase();
  }
}
if (weather == "N" || weather == "NO") {
  // console.log("Correct");

  score++;
  alert(`Great, CORRECT Answer`);
} else if (weather == "Y" || weather == "YES") {
  // console.log("Wrong");
  alert(`WRONG Answer !!`);
}
}
function askAge(){
let myAge = null;
questionCounter++;
for (let i = 1; i <= 4; i++) {
  myAge = Number(
    prompt(`Q${questionCounter}: Can you guess my age ? Enter a number  ?`)
  );
  console.log(typeof myAge);
  console.log(myAge);
  if (myAge == 23) {
    // console.log("Correct");
    alert(`Great, CORRECT Answer`);
    score++;
    break;
  }
  attempts++;
  if (isNaN(myAge) || myAge == "") {
    alert(`Enter a Valid number ! ${4 - attempts} attempts left`);
  } else if (myAge > 23) {
    alert(`Your guess is too high ! ${4 - attempts} attempts left`);
  } else if (myAge < 23) {
    alert(`Your guess is too low ! ${4 - attempts} attempts left`);
  }
}

if (attempts >= 4) {
  // console.log("Wrong");
  alert(`WRONG Answer !! The Correct Number is 23`);
}
attempts = 0;
}
function askCountry (){
let countries = ["MEXICO", "EGYPT", "IRELAND", "CANADA", "CHINA"];
let country = null;
questionCounter++;

for (let i = 1; i <= 6; i++) {
  country = prompt(
    `Q${questionCounter}: Can you guess which country I want to visit ?`
  );
  if (country != null) {
    country = country.toUpperCase();
  }
  if (countries.indexOf(country) != -1) {
    // console.log("Correct");
    score++;
    alert(`Great, CORRECT Answer `);
    break;
  } else {
    attempts++;
    // console.log("Wrong");
    alert(`WRONG Answer !! ${6 - attempts} attempts left`);
  }
}
if (attempts >= 6) {
  // console.log("Wrong");
  alert(`WRONG Answer !! The Correct Ccountries: \n${countries}`);
}
}
askCoffee();
askFootball();
askMovie();
askDegree();
askWeather();
askAge();
askCountry();


alert(
  `Well Played ${userName}, Your overall Score ${score} out of ${questionCounter}`
);
