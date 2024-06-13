document.getElementById('toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.getElementsByClassName('logo')[0].src = document.body.classList.contains('dark-mode') ? 'public/alarado-icon-homepage-dark.svg' : 'public/alarado-icon-homepage.svg';
});