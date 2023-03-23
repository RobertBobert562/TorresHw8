/* HW 8
   Example 3 JavaScript code
*/

console.log("Torres Output from HW 8 Example 3");

const name = "Robert Torres";
const countries = [
  { name: "Japan", year: 2018 },
  { name: "France", year: 2019 },
  { name: "Spain", year: 2021 }
];

const data = { name: name, countries: countries };
const url = "https://thejsway-server.herokuapp.com/api/countries";

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (response.ok) {
    console.log(`Your name is ${name} and you visited ${countries.length} countries. Keep traveling!`);
  } else {
    console.error("Server response wasn't OK");
  }
})
.catch(error => console.error(error));
