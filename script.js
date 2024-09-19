const navDialog = document.getElementById("nav-dialog");
const closeButton = document.querySelector(".close-button");

function handleMenu() {
  // adds or removes the CSS property/class on click of the  elemnt
  navDialog.classList.toggle("open");
  closeButton.classList.toggle("rotate");
}

let initialTranslateLTR = -48*4;
let initialTranslateRTL = 36*4;

function setUpIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting; // true if element is visible in viewport
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };
  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  // Add the observer to each of the elements we want to monitor for visibility
  intersectionObserver.observe(element);
  
  function scrollHandler(){
      const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;

    if(isLTR){
        totalTranslate = translateX + initialTranslateLTR;
    }else{
        totalTranslate = -(translateX + initialTranslateRTL);
    }

      element.style.transform = `translateX(${totalTranslate}px)`;
  }
}


const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
//optimizied code
const line4 = document.getElementById('line4');

setUpIntersectionObserver(line1,true,0.15);
setUpIntersectionObserver(line2,false,0.15);
setUpIntersectionObserver(line3,true,0.15);
setUpIntersectionObserver(line4,true,1.90);
