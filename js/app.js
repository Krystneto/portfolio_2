const aboutSection = document.body.querySelector('.about_us');
const aboutMeImage = document.body.querySelector('.about-me-container--circle');
const btnTop = document.body.querySelector('.btn-top')
const serviceItems = document.body.querySelectorAll('.service-item');
const serviceIcons = document.body.querySelectorAll('.service-icon');

const handleComplementColorChange = () => {
    aboutSection.classList.toggle('complement-color');
    aboutMeImage.classList.toggle('rollOut');
    setTimeout(() => aboutMeImage.classList.remove('rollIn', 'rollOut'), 1000)
}

const handleImageFadeIn = () => 
    setTimeout(() => {
        aboutMeImage.classList.toggle('animated')
        aboutMeImage.classList.toggle('rollIn')
    },250)

const serviceItemsAnimation = () => {
    setTimeout(() => {
        serviceItems[0].classList.toggle('slideInLeft')
    },250);
    setTimeout(() => {
        serviceItems[1].classList.toggle('zoomIn')
    },250);
    setTimeout(() => {
        serviceItems[2].classList.toggle('slideInRight')
    },250);
}

const serviceIconsAnimation = () => {
    let increaseTimeInterval = 1500;
    let decreaseTimeInterval = 2500;
    
    for (let i = 5; i < 11; i++) {
        setTimeout(() => {        
            serviceIcons[i].classList.toggle('zoomIn')
        },increaseTimeInterval);
        increaseTimeInterval += 200;
    }
    for (let i = 11; i < serviceIcons.length; i++) {
        setTimeout(() => {        
            serviceIcons[i].classList.toggle('zoomIn')
        },decreaseTimeInterval);
        decreaseTimeInterval -= 200;
    }
}

const handleServiceItemRollin = () => {
    serviceItemsAnimation();
    serviceIconsAnimation();
}

aboutMeImage.addEventListener('click', handleComplementColorChange);
aboutMeImage.addEventListener('click', handleServiceItemRollin);
btnTop.addEventListener('click', handleImageFadeIn);