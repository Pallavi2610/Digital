 
 var tl=gsap.timeline()
  
 tl.from("nav",{
    opacity:0,
    y:-50,
    stagger:2
 })
 
 
 tl.from(".page1 h1,.page1 h2",{
    opacity:0,
    x:-20,
    stagger:1,
 })

 var tl2=gsap.timeline()

 tl2.from(".page2 .m1,.page2 .m2,.page2 .m3",{
    opacity:0,
    scale:0.5,
    y:50,
   //  rotate:30,
    stagger:0.1,
    duration:3,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
      //   markers:true,
        scrub:2,
        start:"top 20%",
        end:"top 30%",
    }
 })
 tl2.from(".page2 h1,.page2 h4,.page2 p",{
   opacity:0,
   y:100,
   stagger:0.1,
   scrollTrigger:{
      trigger:".page2",
      scroller:"body",
      // markers:true,
      scrub:2,
      start:"top 80%",
      end:"top 30%",
  }
 })

 var tl3=gsap.timeline()

 tl3.from(".page3 h1,.page3 .imm ",{
   opacity:0,
   y:-50,
   stagger:0.1,
   scrollTrigger:{
      trigger:".page3",
      scroller:"body",
      // markers:true,
      scrub:2,
      start:"top 80%",
      end:"top 30%",
  }
 })

 tl3.from(".page4 h1,.learn",{
   opacity:0,
   y:-50,
   stagger:0.1,
   scrollTrigger:{
      trigger:".page4",
      scroller:"body",
      // markers:true,
      scrub:2,
      start:"top 80%",
      end:"top 10%",
  }
 })
 tl3.from(".page5",{
   opacity:0,
   // y:-50,
   stagger:1,
   scrollTrigger:{
      trigger:".page5",
      scroller:"body",
      // markers:true,
      scrub:2,
      start:"top 80%",
      end:"top 30%",
  }
 });
document.addEventListener('DOMContentLoaded', function() {
   var menuToggle = document.querySelector('.fa-bars');
   var menuClose = document.querySelector('.fa-xmark');
   var menu = document.querySelector('.right');
   var menuLinks = document.querySelectorAll('.right a'); 

   menuToggle.addEventListener('click', function() {
       menu.style.left = '50vw'; 
   });

   menuClose.addEventListener('click', function() {
       menu.style.left = '100vw'; 
   });

  
   menuLinks.forEach(function(link) {
       link.addEventListener('click', function() {
           menu.style.left = '100vw'; 
       });
   });
});




const registerButton = document.getElementById('registerButton');
const page1 = document.querySelector('.page1');

let colorChangeInterval; 

function getRandomBlackishColor() {
    const base = 35; 
    const red = Math.floor(Math.random() * base);
    const green = Math.floor(Math.random() * base);
    const blue = Math.floor(Math.random() * base);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

function startColorChange() {
    colorChangeInterval = setInterval(() => {
        page1.style.backgroundColor = getRandomBlackishColor();
    }, 500); 
}

function stopColorChange() {
    clearInterval(colorChangeInterval);
    page1.style.backgroundColor = '';
}

registerButton.addEventListener('mouseenter', startColorChange);
registerButton.addEventListener('mouseleave', stopColorChange);

registerButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    registerButton.style.backgroundColor = 'blueviolet'; 

    registerButton.style.color = 'black';

    registerButton.textContent = 'Registered';
});


