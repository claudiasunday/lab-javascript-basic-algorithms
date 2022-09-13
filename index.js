// let hacker1;

// hacker1 = "Claudia";
// console.log(`The driver's name is ${hacker1}`);

// let hacker2;

// hacker2 = "Mar";
// console.log(`The navigator's name is ${hacker2}`);

// let hacker3 = prompt(`Who has the longest name?`);
// console.log(`The navigator's name is ${hacker2}`);

// if (hacker2.length > hacker1.length) {
//   console.log(
//     `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
//   );
// } else if (hacker1.length > hacker2.length) {
//   console.log(
//     `The driver has the longest name, it has ${hacker1.length} characters.`
//   );
// } else {
//   console.log(
//     `Wow, you both have equally long names, ${hacker1.length} characters!`
//   );
// }

// let hack1split = hacker1.split("");
// let hackspace = hack1split.join(" ");
// let hack1may = hackspace.toUpperCase();

// console.log(hack1may);

// let hackrev = hacker2.reverse();
// console.log(hackrev);

// if (hacker2.length > hacker1.length) {
//   console.log(`Yo, the navigator goes first definitely.`);
// } else if (hacker1.length > hacker2.length) {
//   console.log(`The driver's name goes first.`);
// } else {
//   console.log(`What?! You both have the same name?`);
// }

function welcomeintro(
  name,
  age,
  location,
  currentLocation,
  studies,
  computer,
  hobbies,
  pet
) {
  return `Hola mi nombre es ${name}, tengo ${age}, anyyyos. Naci en ${location} y estoy viviendo en el barrio de ${currentLocation}. Actualmente estoy cursando un curso de ${studies} y no tengo mi ${computer} por un accidente con agua. 
En mi tiempo libre me  gusta ${hobbies}, y pasar tiempo con mi ${pet}.`;
}

welcomeintro();

console.log(
  welcomeintro(
    "Claudia",
    "25",
    "Barcelona",
    "Sants",
    "Frontend",
    "MacbookPro",
    "bailar",
    "perro"
  )
);
