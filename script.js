// This is for dropping down the navigation
document.getElementById('navToggle').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('dropdown').classList.toggle('active');
});



const menuLinks = document.querySelectorAll(".menu-link");
const connectBtns = document.querySelectorAll(".connect-btn");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', function () {
    document.getElementById('navToggle').classList.toggle('active');
    document.getElementById('dropdown').classList.toggle('active');

    // Get the target section ID based on the link's ID
    const targetSectionId = this.id.replace('-link', '');

    // Get all main content sections
    const mainSections = document.querySelectorAll('.main-content');

    // Loop through each main section
    mainSections.forEach((section) => {
      // Check if the current section is the target section
      if (section.id === targetSectionId) {
        // Add 'active' class to the target section
        section.classList.add('active');
      } else {
        // Remove 'active' class from other sections
        section.classList.remove('active');
      }
    });
  });
});


connectBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    console.log("Connect button clicked");
    const targetSectionId = 'connect';
    const mainSections = document.querySelectorAll('.main-content');

    mainSections.forEach((section) => {
      if (section.id === targetSectionId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
});
