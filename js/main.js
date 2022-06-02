

const text = document.querySelector(".header_main-title");

if(screen.width > 1024){


const hero = document.querySelector(".header_wrapp");
const walk = 80;


function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    
    let { offsetX: x, offsetY: y } = e;
    
    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const xWalk = Math.round(x / width * walk - walk / 2);
    const yWalk = Math.round(y / height * walk - walk / 2);

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 20px rgb(245, 245, 245, .5), 
    ${xWalk}px ${yWalk}px 20px rgba(0, 0, 0, 0),
    ${xWalk * 1.5}px ${yWalk * 1.5}px 40px rgba(0, 0, 0, 0),

    ${xWalk * -1.5}px ${yWalk}px 20px rgba(48, 71, 94, .4),
    ${xWalk * -1.2}px ${yWalk * -1.8}px 20px rgba(240, 84, 84, .2)
    `;
}

hero.addEventListener("mousemove", shadow);
}else{
 text.classList.add('shadowMainspan');
}
    






// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors){
//     anchor.addEventListener('click', function(e){
//         e.preventDefault();
        
//         const blockID = anchor.getAttribute('href').substr(1);
        
//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
        
//     });
// };
