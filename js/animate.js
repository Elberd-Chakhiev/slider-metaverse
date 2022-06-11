console.log(mainSliderScreens.activeIndex + ' animate init')

const slides = document.querySelectorAll('.fadeAnimateSlide')
const fadeFromBottom = (indexSlide, index) =>
{
    if(mainSliderScreens.activeIndex === index)
    {
        indexSlide.style.cssText = `
        transition: 1.5s;
        position: relative;
        bottom: 0px;
        opacity: 1;`;
        
    } else{
        indexSlide.style.cssText = `
        transition: 1s;
        position: relative;
        bottom: -100px;
        opacity: 0;`;
    }
}

const grid = document.querySelectorAll('.gridAnimate')
const gridAnimate = (index) =>
{
    if(mainSliderScreens.activeIndex === index)
    {
        for(let i = 0; i < grid.length; i++)
        {
            setTimeout(() =>
            {
                grid[i].style.left = '0px';
                grid[i].style.opacity = '1';
            }, 500 * (i+1))
        }
    }
}

const coinAnimate = document.querySelector('.animateSlideCoin')
const slideRotateAnimate = index =>
{
    if(mainSliderScreens.activeIndex === index)
    {
        coinAnimate.style.cssText = `
        transition: 1s;
        transform: scale(1)`
    }else{
        coinAnimate.style.cssText = `
        transition: 1s;
        transform: scale(1.2)`
    }
}

let watch = () =>
{
    for(let i = 0; i < slides.length; i++)
    {
        fadeFromBottom(slides[i], i)
    }
    gridAnimate(1)
    slideRotateAnimate(2)
}

setInterval(()=> watch() ,100)
