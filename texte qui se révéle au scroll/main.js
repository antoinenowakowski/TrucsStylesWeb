// get le bloc 
const slidingNewsletter = document.querySelector('.div3');


window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;


    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slidingNewsletter.classList.add('active')
    }
})