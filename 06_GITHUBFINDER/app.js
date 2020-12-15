// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// User Input
const searchUser = document.querySelector('#searchUser');

// User Input Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // show alert
      } else {
        // show profile
      }
    });
  } else {
    // Clear profile
  }
});
