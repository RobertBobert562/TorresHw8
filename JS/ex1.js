/* HW 8
   Example 1 JavaScript code
*/

console.log("Torres Output from HW 8 Example 1");

// Get a reference to the html table
const table = document.getElementById('paintings');

// Fetch the data from the URL
fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Iterate over each painting object
    data.forEach(painting => {
      // Create a new row in the table
      const row = table.insertRow();

      // Add cells with the painting details
      const nameCell = row.insertCell();
      nameCell.textContent = painting.name;
      const yearCell = row.insertCell();
      yearCell.textContent = painting.year;
      const artistCell = row.insertCell();
      artistCell.textContent = painting.artist;
    });
  })
  .catch(error => console.log(error)); // Log any errors to the console
