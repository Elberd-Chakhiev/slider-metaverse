const arrow = document.getElementById('showGridInfo');
const mainInfoToggle = document.querySelectorAll('.mainPageInfo');



const toggleInfo = (info, rightOrLeft) =>{
    info.classList.toggle('lg:opacity-0');
    info.classList.toggle('lg:invisible');
    info.classList.toggle(rightOrLeft);
}



arrow.addEventListener('click', () => {
    arrow.classList.toggle('-rotate-90');
    arrow.classList.toggle('rotate-90');

    toggleInfo(mainInfoToggle[0],'lg:mr-[300px]');
    toggleInfo(mainInfoToggle[1], 'lg:mx-auto');

});


