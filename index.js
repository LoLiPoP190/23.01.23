let myName = "Atak";
let myLastName = "Oskonbaev";
let myTown = "Karakol";
let myCountry = "Kyrgyzstan";
let favoriteGame = "Football";
let myLaptop = "Lenovo";
let nativeLanguage = "Russian";
let nativeLanguage2 = "Kyrgyz";
let foreignLanguage = "English";
let favNumber = "seven";

myName = "Lol";

let height = 180;
let currentYear = 2023;
let date = 23;
let favoriteNumber = 7;
let myAge = 17;

let favRap = true;
let favPop = false;

let num = 5 > 3;
let num2 = 4 < 3;
let num3 = 4 === 4;
let num4 = 3 !== 6;
let num5 = 6 >= 2;

if (5 > 3) {
  console.log(true);
}
else {
  console.log(false);
}

if (4 < 3) {
  console.log(true);
}
else {
  console.log(false);
}

if (4 === 4) {
  console.log(true);
}
else {
  console.log(false);
}

if (5 !== 4) {
  console.log(true);
}
else {
  console.log(false);
}

let a = "lol";
if (a > 0) {
  console.log(`"${a}" is positive`);
}
else if (a < 0) {
  console.log(`"${a}" is negative`);
}
else if (a === 0) {
  console.log(`"${a}" is zero`);
}
else {
  console.log(`"${a}" is not a number`);
}

switch (a) {
  case a > 0:
    console.log(`"${a}" is positive`);
    break;
  case a < 0:
    console.log(`"${a}" is negative`);
    break;
  case a === 0:
    console.log(`"${a}" is zero`);
    break;
  default:
    console.log(`"${a}" is not a number`);
}


let weekDay = "fjdkasl;";

if (weekDay === "Понедельник") {
  console.log("Дүйшөмбү");
}
else if (weekDay === "Вторник") {
  console.log(` "${weekDay}" Шейшемби`);
}
else if (weekDay === "Среда") {
  console.log(` "${weekDay}" Шаршемби`);
}
else if (weekDay === "Четверг") {
  console.log("${weekDay}" `Бейшемби`);
}
else if (weekDay === "Пятница") {
  console.log(` "${weekDay}" Жума`);
}
else if (weekDay === "Суббота") {
  console.log(` "${weekDay}" Ишемби`);
}
else if (weekDay === "Воскресенье") {
  console.log(` "${weekDay}" "Жекшемби`);
}
else {
  console.log(` "${weekDay}" Такого дня нет`);
}

switch (weekDay) {
  case weekDay === "Понедельник":
    console.log("Дүйшөмбү");
    break;
  case weekDay === "Вторник":
    console.log(` "${weekDay}" Шейшемби`);
    break;
  case weekDay === "Среда":
    console.log(` "${weekDay}" Шаршемби`);
    break;
  case weekDay === "Четверг":
    console.log("${weekDay}" `Бейшемби`);
    break;
  case weekDay === "Пятница":
    console.log(` "${weekDay}" Жума`);
    break;
  case weekDay === "Суббота":
    console.log(` "${weekDay}" Ишемби`);
    break;
  case weekDay === "Воскресенье":
    console.log(` "${weekDay}" "Жекшемби`);
    break;
  default:
    console.log(` "${weekDay}" Такого дня нет`);
}


let score = 3;
if (score === 5) {
  console.log("He's a");
}
else if (score === 4) {
  console.log("He's b");
}
else if (score === 3) {
  console.log("He's c");
}
else if (score === 2) {
  console.log("He's d");
}
else {
  console.log("He's f");
}

switch (score) {
  case score === 5:
    console.log("He's a");
    break;
  case score === 4:
    console.log("He's b");
    break;
  case score === 3:
    console.log("He's c");
    break;
  case score === 2:
    console.log("He's d");
    break;
  default:
    console.log(`He's f`);
}


let month = "".toLowerCase();
if (month === "january" || month === "february" || month === "december") {
  console.log(` ${month} is winter`);
}
else if (month === "march" || month === "april" || month === "may") {
  console.log(` ${month} is spring`);
}
else if (month === "june" || month === "july" || month === "august") {
  console.log(` ${month} is summer`);
}
else if (month === "september" || month === "october" || month === "november") {
  console.log(` ${month} is fall`);
}
else {
  console.log(` ${month} is not exsists`);
}

switch (month) {
  case month === "january" || month === "february" || month === "december":
    console.log(` ${month} is winter`);
    break;
  case month === "march" || month === "april" || month === "may":
    console.log(` ${month} is spring`);
    break;
  case month === "june" || month === "july" || month === "august":
    console.log(` ${month} is summer`);
    break;
  case month === "september" || month === "october" || month === "november":
    console.log(` ${month} is fall`);
    break;
  default: 
   console.log(` ${month} is not exsists`);
}


let dayOfWeek = "".toLowerCase();
if (dayOfWeek === "Понедельник" || dayOfWeek === "Вторник" || dayOfWeek === "Среда" || dayOfWeek === "Четверг" || dayOfWeek === "Пятница") {
  console.log(` ${dayOfWeek} is working day`);
}
else if (dayOfWeek === "Суббота" || dayOfWeek === "Воскресенье") {
  console.log(` ${dayOfWeek} is holiday`);
}
else {
  console.log(` ${dayOfWeek} is not exsists`);
}
switch (dayOfWeek) {
  case dayOf Week === "Понедельник" || dayOfWeek === "Вторник" || dayOfWeek === "Среда" || dayOfWeek === "Четверг" || dayOfWeek === "Пятница":
    console.log(`${dayOfWeek} is working day`);
    break;
  case dayOfWeek === "Суббота" || dayOfWeek === "Воскресенье":
    console.log(`${dayOfWeek} is holiday`);
  break;
  default:
    console.log(`${dayOfWeek} is not exists`);
}
