"use strict";

let score = 0;
let questionCounter = 0;
let attempts = 0;

let userName = null;
while (userName == null || userName == "") {
  userName = prompt("Hello Please Enter Your Name ?");
}
alert(
  `Welcome ${userName} to my site would you like to play a guessing game ? `
);
alert("Please answer with a \n yes ( Y )\n or \n no ( N )");

function askCoffee() {
  let coffee = null;
  questionCounter++;
  while (coffee != "Y" && coffee != "N" && coffee != "YES" && coffee != "NO") {
    coffee = prompt(`Q${questionCounter}: Do you think I love coffee ?`);
    if (coffee != null) {
      coffee = coffee.toUpperCase();
    }
  }
  if (coffee == "Y" || coffee == "YES") {
    score++;
    alert(`Great, Correct Answer `);
  } else if (coffee == "N" || coffee == "NO") {
    alert(`Wrong Answer !!`);
  }
}
function askFootball() {
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
    score++;
    alert(`Great, Correct Answer `);
  } else if (football == "Y" || football == "YES") {
    alert(`Wrong Answer !!`);
  }
}
function askMovie() {
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
    score++;
    alert(`Great, Correct Answer `);
  } else if (movie == "N" || movie == "NO") {
    alert(`Wrong Answer !! `);
  }
}
function askDegree() {
  let degree = null;
  questionCounter++;
  while (degree != "Y" && degree != "N" && degree != "YES" && degree != "NO") {
    degree = prompt(`Q${questionCounter}: Do you think I have master degree ?`);
    if (degree != null) {
      degree = degree.toUpperCase();
    }
  }
  if (degree == "N" || degree == "NO") {
    score++;
    alert(`Great, Correct Answer `);
  } else if (degree == "Y" || degree == "YES") {
    alert(`Wrong Answer !! `);
  }
}
function askWeather() {
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
    score++;
    alert(`Great, Correct Answer`);
  } else if (weather == "Y" || weather == "YES") {
    alert(`Wrong Answer !!`);
  }
}
function askAge() {
  let myAge = null;
  questionCounter++;
  for (let i = 1; i <= 4; i++) {
    myAge = Number(
      prompt(`Q${questionCounter}: Can you guess my age ? Enter a number  ?`)
    );
    console.log(typeof myAge);
    console.log(myAge);
    if (myAge == 23) {
      alert(`Great, Correct Answer`);
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
    alert(`Wrong Answer !! The Correct Number is 23`);
  }
  attempts = 0;
}
function askCountry() {
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
      score++;
      alert(`Great, Correct Answer `);
      break;
    } else {
      attempts++;
      alert(`Wrong Answer !! ${6 - attempts} attempts left`);
    }
  }
  if (attempts >= 6) {
    alert(`Wrong Answer !! The Correct Ccountries: \n${countries}`);
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
  `Well Played ${userName}, Your overall Score is ${score} out of ${questionCounter}`
);
