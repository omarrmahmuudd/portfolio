var typedTextSpan = document.querySelector(".typed-text");



var textArray = ["Data analyst","Freelancer"]

var textArrayIndex = 0;

var charIndex = 0;

function typing() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, 200);
    }
    else {
        setTimeout(erasing, 1000)
    }
}

function erasing() {
    if (charIndex > 0) {
        typedTextSpan.textContent = 
            textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erasing, 100);

    }
    else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        

        }
        setTimeout(typing, 1500);
    }
}

window.onload = function () {
    setTimeout(typing, 0);
};

// menu we om el menu

let menu = document.querySelector('#icon-menu');
let navbar = document.querySelector('.sidebar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}







// loading 

var loader = document.getElementById("preloader");

window.addEventListener("load" ,() => {
    loader.style.display = "none";

} )


//show  sections by scroll

window.addEventListener('scroll', showsec);

function showsec() {
    var reveals = document.querySelectorAll('.showsec');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('show');
        }
    }
    
}
window.addEventListener('scroll', a7aa);

function a7aa() {
    var reveals = document.querySelectorAll('.showscal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 40;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('showsc');

        }
       
    }
    
}

// arrow up 

let arrow = document.querySelector('.icon-arrow-up');
let section =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header .sidebar .menu g');
let navLinks2 =document.querySelectorAll('header .sidebar .menu a i');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    let divv = document.querySelector(".skills");
    let progressBarra = document.querySelectorAll('.progress-bar');
    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelectorAll('header .sidebar .menu a[href*='+id+']').classList.add('active');

            })

           
        }
        if (window.scrollY >= divv.offsetTop - 270){ 
            progressBarra.forEach((progressa)=>{
                progressa.style.width = progressa.dataset.width;
                progressa.style. transition = "1s"
            })
        }
    })

 



    
    if (this.scrollY >= 800) {
        
        arrow.classList.add("showarro");

    }
    else{
        arrow.classList.remove("showarro");

    }
}

var darkLight = document.getElementById("moon");

darkLight.onclick = function(){
    document.body.classList.toggle("dark")
}

var x = 1;
function addtwo(){
    x = x + 2;
}
addtwo();
x = x + 1;





// swiper my pro ^_^
var swiper = new Swiper(".testimonial", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed:2000,
    pagination: {
      el: ".swiper-paginationn",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevv",
    },
  });



  // swiper sevice my pro ^_^
var team_slider = new Swiper(".team-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed:2000,

    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints : {
        0:{
            slidesPerView : 1,

        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView :3,
        },
    },
  });


  // start nav scroll active color

  const sectionAll = document.querySelectorAll('section[id]');
  window.addEventListener('scroll',()=>{
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('li a[href*="' + sectionId + '"]').classList.add('active')
        }else{
            document.querySelector('li a[href*="' + sectionId + '"]').classList.remove('active')
        }
    })
  })

  // menu projects
  let switcherLis = document.querySelectorAll('.project-menu li');
  let imgProjectMenu = document.querySelectorAll('.all-project .box-project');

  switcherLis.forEach((li) => {
    li.addEventListener("click",removeAcitvee)
    li.addEventListener("click",manageImgs)

  })
function removeAcitvee(){
    switcherLis.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
   
}

// mange imgs

function manageImgs() {
    imgProjectMenu.forEach((img) => {
        img.style.display = "none"
    });
    document.querySelectorAll(this.dataset.cat).forEach((elmsimg) => {
        elmsimg.style.display = "block";
        console.log('redaa')
    });
    
}
