
function showNav(){
let menu = document.getElementById("menu");
menu.classList.toggle("show");

}




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "grid";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



let slideIndexz = 0;
showSlidesz();

function showSlidesz() {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
  }
  slideIndexz++;
  if (slideIndexz > slides.length) {slideIndexz = 1}
  slides[slideIndexz-1].style.display = "grid";
  setTimeout(showSlidesz, 5000); // Change image every 2 seconds
}



let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "grid";
  dots[slideIndex2-1].className += " active";
}


// range price pending work

var slider = document.getElementById("myRange");
var output = document.getElementById("demo1");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
function showSize(){
  
  let size = document.getElementById("size");
size.classList.toggle("show3")
}

function filt(){
  let filter = document.getElementById("filter");
filter.classList.toggle("show2");

}

// filter search pending code
function myFunction() {


  let input = document.getElementById("myInput").value.toUpperCase();
let container = document.getElementById("main");
let content = container.getElementsByClassName("shop-content");

for( var i=0; i < content.length; i++) {
let text = content[i].querySelector(".shop3>h4");
let textValue = text.textContent || text.innerText;

if(textValue.toUpperCase().indexOf(input) > -1) {
 content[i].style.display=" ";
 }
  else{
   content[i].style.backgroundColor="black ";



}
 }




  }





function btn(){
let u = document.getElementById("purch");
u.innerHTML=  + 1;

// for(var i=1; u.innerHTML<20; i++){
  
// u.innerHTML= [i];

// }


}

function addCart(evt, cityName ) {
  
let x = document.getElementById(cityName).src;
let y = document.getElementById("aimg");

y.src = x;

let cart = document.getElementById("animate");
cart.classList.add("add");
setTimeout(function addCart(){
  cart.classList.remove("add");

let purch = document.getElementById("purch");
+purch.textContent++

}, 1000)



}










