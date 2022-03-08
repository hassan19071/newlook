// close layout cover after loading;
let layoutCover = document.querySelector(".layout-cover");
window.onload = function(){
    layoutCover.classList.add("close");
    document.body.style.overflowY = "visible";
}


// owl carousel ;
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});


// click to go to top;
let topBtn = document.querySelector(".top-btn");

// make navbar has fixed position;
let navSec= document.querySelector(".navbar");


window.onscroll = ()=>{
    
    if(scrollY >= 400){
        navSec.classList.add("fixed");
    }else{
        navSec.classList.remove("fixed");
    }

    if (scrollY > 200){
        topBtn.classList.remove("close");
    }else{
        topBtn.classList.add("close");
    }
}

topBtn.addEventListener("click",()=>{
    scrollTo({
        top:0,
        behavior:"smooth"
    })
})
