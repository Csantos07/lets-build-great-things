document.getElementById('navToggle').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('dropdown').classList.toggle('active');
});


document.getElementById("about-link").addEventListener('click', function () {
  document.getElementById('dropdown').classList.toggle('active');
  document.getElementById('about').classList.add('active');
  document.getElementById('hero').classList.add('inactive');
})
