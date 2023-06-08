var swiperWrapper=document.querySelector(".swiper-wrapper");
var pic_1=document.querySelector(".pic_1");
var pic_2=document.querySelector(".pic_2");
var pic_3=document.querySelector(".pic_3");
var mainNavbar=document.querySelector(".main_Nav_Header");


window.onscroll=function(){
   var top=window.scrollY;
   console.log(Math.floor(top));
   if(top>800){
    mainNavbar.style.position='sticky'
    mainNavbar.style.top='0%'
    mainNavbar.style.left='0%'
    mainNavbar.style.backgroundColor="#fff"
    mainNavbar.style.zIndex="999"
   }else{
    mainNavbar.style.position='initial'
    mainNavbar.style.backgroundColor="transparent"
   }
}
pic_1.addEventListener("mousemove",function(){
  pic_2.classList.remove('pic_01')
  pic_3.classList.remove('pic_01')
  pic_1.classList.add('pic_01')
})
pic_2.addEventListener("mousemove", () => {
  pic_1.classList.remove('pic_01')
  pic_3.classList.remove('pic_01')
  pic_2.classList.add('pic_01')
})
pic_3.addEventListener("mousemove", () => {
  pic_1.classList.remove('pic_01')
  pic_2.classList.remove('pic_01')
  pic_3.classList.add('pic_01')
})
 axios.get("https://dummyjson.com/comments").then(function(data){
     console.log(data.data.comments);
     data.data.comments.map((res)=>{
      let clutter=` <div class="swiper-slide">
      <p>
        ${res.body}
      </p>
      <h2>${res.user.username}</h2>
      <div class="stars">
      <i class="ri-star-fill"></i>
      <i class="ri-star-fill"></i>
      <i class="ri-star-fill"></i>
      <i class="ri-star-fill"></i>
      <i class="ri-star-fill"></i>
      </div>
    </div>`
    swiperWrapper.innerHTML+=clutter;
  })  
 })
 var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 50,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    grabCursor: true,
    loop:true
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});