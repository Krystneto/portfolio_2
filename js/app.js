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

const handleServiceItemRollin = () => {
    for (var i = 5; i < serviceIcons.length; i++) {
        serviceIcons[i].classList.toggle('hidden');
        console.log(serviceIcons[i]);
    }
    
    setTimeout(() => {
        serviceItems[0].classList.toggle('animated')
        serviceItems[0].classList.toggle('slideInLeft')
    },250);
    setTimeout(() => {
        serviceItems[1].classList.toggle('animated')
        serviceItems[1].classList.toggle('zoomIn')
    },250);
    setTimeout(() => {
        serviceItems[2].classList.toggle('animated')
        serviceItems[2].classList.toggle('slideInRight')
    },250);
    setTimeout(() => {        
        serviceIcons[5].classList.toggle('hidden')
        serviceIcons[5].classList.toggle('animated')
        serviceIcons[5].classList.toggle('slideInLeft')
    },2000);
    setTimeout(() => {        
        serviceIcons[6].classList.toggle('hidden')
        serviceIcons[6].classList.toggle('animated')
        serviceIcons[6].classList.toggle('slideInLeft')
    },1500);
    setTimeout(() => {        
        serviceIcons[7].classList.toggle('hidden')
        serviceIcons[7].classList.toggle('animated')
        serviceIcons[7].classList.toggle('slideInLeft')
    },1500);
    setTimeout(() => {        
        serviceIcons[8].classList.toggle('hidden')
        serviceIcons[8].classList.toggle('animated')
        serviceIcons[8].classList.toggle('slideInLeft')
    },2000);
    setTimeout(() => {        
        serviceIcons[9].classList.toggle('hidden')
        serviceIcons[9].classList.toggle('animated')
        serviceIcons[9].classList.toggle('zoomIn')
    },2000);
    setTimeout(() => {        
        serviceIcons[10].classList.toggle('hidden')
        serviceIcons[10].classList.toggle('animated')
        serviceIcons[10].classList.toggle('zoomIn')
    },1500);
    setTimeout(() => {        
        serviceIcons[11].classList.toggle('hidden')
        serviceIcons[11].classList.toggle('animated')
        serviceIcons[11].classList.toggle('zoomIn')
    },1500);
    setTimeout(() => {        
        serviceIcons[12].classList.toggle('hidden')
        serviceIcons[12].classList.toggle('animated')
        serviceIcons[12].classList.toggle('zoomIn')
    },2000);
    setTimeout(() => {        
        serviceIcons[13].classList.toggle('hidden')
        serviceIcons[13].classList.toggle('animated')
        serviceIcons[13].classList.toggle('zoomIn')
    },2000);
    setTimeout(() => {        
        serviceIcons[14].classList.toggle('hidden')
        serviceIcons[14].classList.toggle('animated')
        serviceIcons[14].classList.toggle('zoomIn')
    },1500);
    setTimeout(() => {        
        serviceIcons[15].classList.toggle('hidden')
        serviceIcons[15].classList.toggle('animated')
        serviceIcons[15].classList.toggle('zoomIn')
    },1500);
    setTimeout(() => {        
        serviceIcons[16].classList.toggle('hidden')
        serviceIcons[16].classList.toggle('animated')
        serviceIcons[16].classList.toggle('zoomIn')
    },2000);
}

aboutMeImage.addEventListener('click', handleComplementColorChange);
aboutMeImage.addEventListener('click', handleServiceItemRollin);

btnTop.addEventListener('click', handleImageFadeIn);