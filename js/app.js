const aboutUs = document.body.querySelector('.about_us');
const aboutMeContainer = document.body.querySelector('.about-me-container--circle');
const btnTop = document.body.querySelector('.btn-top')

const handleClick = () => {
    aboutUs.classList.toggle('complement-color');
    aboutMeContainer.classList.toggle('rollOut');
    setTimeout(() => aboutMeContainer.classList.remove('rollIn', 'rollOut'), 1000)
}

const handleImageFadeIn = () => 
    setTimeout(() => {
        aboutMeContainer.classList.toggle('animated')
        aboutMeContainer.classList.toggle('rollIn')
    }
    ,250)

aboutMeContainer.addEventListener('click', handleClick);

btnTop.addEventListener('click', handleImageFadeIn);
