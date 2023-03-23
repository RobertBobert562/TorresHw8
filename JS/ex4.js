/* HW 8
   Example 4 JavaScript code
*/

console.log("Torres Output from HW 8 Example 4");

const sampleForm = document.getElementById('sampleForm');
const submissionTable = document.getElementById('submissionTable');
const nameValue = document.getElementById('nameValue');
const emailValue = document.getElementById('emailValue');
const paymentValue = document.getElementById('paymentValue');
const promoValue = document.getElementById('promoValue');
const locationValue = document.getElementById('locationValue');

sampleForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(sampleForm);
  nameValue.textContent = formData.get('name');
  emailValue.textContent = formData.get('email');
  paymentValue.textContent = formData.get('paymentType');
  promoValue.textContent = formData.get('promoCheckbox') === 'yes' ? 'Yes' : 'No';
  locationValue.textContent = formData.get('location');
  submissionTable.style.display = 'table';
});
