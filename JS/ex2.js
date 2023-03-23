/* HW 8
   Example 2 JavaScript code
*/

console.log("Torres Output from HW 8 Example 2");

const usernameInput = document.getElementById('username-input');
const fetchButton = document.getElementById('fetch-button');
const nameElement = document.getElementById('name');
const blogElement = document.getElementById('blog');
const joinDateElement = document.getElementById('join-date');
const profilePictureElement = document.getElementById('profile-picture');
const profileContainer = document.getElementById('profile-container');

function fetchGitHubProfile(username) {
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to fetch GitHub profile: ${response.statusText}`);
      }
    })
    .then(data => {
      nameElement.textContent = data.name || 'N/A';
      blogElement.innerHTML = data.blog ? `<a href="${data.blog}">${data.blog}</a>` : 'N/A';
      joinDateElement.textContent = new Date(data.created_at).toLocaleDateString();
      profilePictureElement.innerHTML = `<img src="${data.avatar_url}" alt="Profile picture">`;
    })
    .catch(error => {
      console.error(error);
      profileContainer.innerHTML = '<p>Failed to fetch GitHub profile. Please try again later.</p>';
    });
}

fetchButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username) {
    fetchGitHubProfile(username);
  }
});
