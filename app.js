/* ======================================
   SHAE CLEANERS PREMIUM SCRIPT
====================================== */

/* ===== Slider Otomatis ===== */

const slides = document.querySelectorAll(".slide");

let index = 0;

function showSlide(){

slides.forEach(slide=>slide.classList.remove("active"));

index++;

if(index > slides.length){
index = 1;
}

slides[index-1].classList.add("active");

}

showSlide();

setInterval(showSlide,4000);


/* ===== Pencarian Menu ===== */

const searchInput = document.querySelector(".search-box input");

const menuItems = document.querySelectorAll(".menu-grid a");

searchInput.addEventListener("keyup",function(){

let keyword = this.value.toLowerCase();

menuItems.forEach(item=>{

let text = item.innerText.toLowerCase();

if(text.indexOf(keyword)>-1){

item.style.display="block";

}else{

item.style.display="none";

}

});

});


/* ===== Animasi Scroll ===== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".promo-card,.card,.fitur-box div,.menu-grid a").forEach((el)=>{

observer.observe(el);

});


/* ===== Efek Klik ===== */

menuItems.forEach(menu=>{

menu.addEventListener("click",function(){

this.style.transform="scale(.95)";

setTimeout(()=>{

this.style.transform="scale(1)";

},150);

});

});


/* ===== Tombol Kembali ke Atas ===== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topButton.style.display="flex";

}else{

topButton.style.display="none";

}

}

topButton.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}


/* ===== Loading Halaman ===== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});