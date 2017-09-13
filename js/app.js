const aboutUs = document.body.querySelector('.about_us');

const handleClick = (event) => aboutUs.classList.toggle('complement-color');
    
const aboutMeImage = document.body.querySelector('.about-me-container--circle');
    
const hello = aboutMeImage.addEventListener('click', handleClick);


