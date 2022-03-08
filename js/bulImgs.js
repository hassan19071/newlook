// add images to bullets in testimonial section;
let imagesLi = ["imgs/testimonial-1.jpg","imgs/testimonial-2.jpg","imgs/testimonial-3.jpg"];
let testiBullets = Array.from(document.querySelectorAll(".owl-carousel .owl-dots button"));

for (let i = 0; i < imagesLi.length ; i++){
    let createImg = document.createElement("img");
    testiBullets[i].appendChild(createImg);
}

for (let i = 0; i < imagesLi.length ; i++){
     testiBullets[i].childNodes[1].src = imagesLi[i];
}