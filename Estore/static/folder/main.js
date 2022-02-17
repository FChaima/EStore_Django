let menu=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')

menu.onclick=()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
    
}
window.onscroll=()=>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
    
}

var swiper = new Swiper(".slider-container ", {
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



/*password hidden fi=unction*/
function myFunction(){
  var pwd=document.getElementById('pwd')
  var hide1=document.getElementById('hide1')
  var hide2=document.getElementById('hide2')

  if(pwd.type==='password'){
    pwd.type='text'
    hide1.style.display='block'
    hide2.style.display='none'
  }else{
    pwd.type='password'
    hide1.style.display='none'
    hide2.style.display='block'
  }

}
/*login function*/


/*var swiper = new Swiper(".review-swiper ", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier:1,
    slideShadows: true,
  },
  pagination:{
    el: '.swiper-pagination'
  },
  
});*/