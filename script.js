// This is for dropping down the navigation
document.getElementById('navToggle').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('dropdown').classList.toggle('active');
});


// document.getElementById("about-link").addEventListener('click', function () {
//   document.getElementById('dropdown').classList.toggle('active');
//   document.getElementById('about').classList.add('active');
//   document.getElementById('hero').classList.add('inactive');
//   document.getElementById('hero').classList.remove('active');
// })


const menuLinks = document.querySelectorAll(".menu-link");

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

// What i want to do is add an event listener
// to each one of my links:
//  [home-link, about-link, connect-link, other-works-link, code-link, fund-link]

