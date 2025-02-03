const slides = document.querySelectorAll(".slide");
let counter = 0;

// सभी स्लाइड्स की प्रारंभिक स्थिति सेट करें
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// स्लाइड को सही स्थिति में ले जाने के लिए फंक्शन
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// पिछली स्लाइड पर जाएं
const gopre = () => {
    counter = (counter - 1 + slides.length) % slides.length;
    slideImage();
};

// अगली स्लाइड पर जाएं
const gonext = () => {
    counter = (counter + 1) % slides.length;
    slideImage();
};

// ऑटोमैटिक स्लाइडिंग शुरू करें
const autoSlide = () => {
    setInterval(() => {
        gonext(); // हर 4 सेकंड में अगली स्लाइड पर जाएं
    }, 8000);
};

// ऑटो स्लाइड शुरू करें
autoSlide();

function fashion() {
    let fashionItems = document.querySelector(".fashion");
    let upperArrow = document.getElementById("upperArrow");
    console.log(upperArrow);
    upperArrow.src = "icons/upper arrow.png";
    if (fashionItems.style.display === 'none' || fashionItems.style.display === '' && upperArrow.src.includes("icons/down arrow.png")) {
        fashionItems.style.display = 'flex';
        upperArrow.src = "icons/upper arrow.png";
    } else {
        fashionItems.style.display = 'none';
        upperArrow.src = "icons/down arrow.png";
    }
}
//ferniture
function ferniture() {
    let ferniture = document.querySelector(".ferniture");
    let upperArrow = document.getElementById("ferniture");
    console.log(upperArrow);
    upperArrow.src = "icons/upper arrow.png";
    if (ferniture.style.display === 'none' || ferniture.style.display === '' && upperArrow.src.includes("icons/down arrow.png")) {
        ferniture.style.display = 'flex';
        upperArrow.src = "icons/upper arrow.png";
    } else {
        ferniture.style.display = 'none';
        upperArrow.src = "icons/down arrow.png";
    }
}
//Airpods
function airpods() {
    let ferniture = document.querySelector(".airpods");
    let upperArrow = document.getElementById("Airpods");
    console.log(upperArrow);
    upperArrow.src = "icons/upper arrow.png";
    if (ferniture.style.display === 'none' || ferniture.style.display === '' && upperArrow.src.includes("icons/down arrow.png")) {
        ferniture.style.display = 'flex';
        upperArrow.src = "icons/upper arrow.png";
    } else {
        ferniture.style.display = 'none';
        upperArrow.src = "icons/down arrow.png";
    }
}
// .login-page

function login() {
    let login = document.querySelector(".login_page");
    let upperArrow = document.getElementById("login_page");
    console.log(upperArrow);
    upperArrow.src = "icons/upper arrow.png";
    if (login.style.display === 'none' || login.style.display === '' && upperArrow.src.includes("icons/down arrow.png")) {
        login.style.display = 'block';
        upperArrow.src = "icons/upper arrow.png";
    } else {
        login.style.display = 'none';
        upperArrow.src = "icons/down arrow.png";
    }
}
//login page
let loginp = document.getElementById("login");
loginp.onclick = () => {
    window.location.href = "login.html";
};


// cart

let cart=document.getElementById("cart");
cart.addEventListener('click',()=>{
window.location.href="cart.html";
})

//three dots
function dot() {
    let dots = document.querySelector(".dot");
    let three_dot = document.getElementById("three_dot");
    if(dots.style.display=='none'||dots.style.display==""){
     dots.style.display='block';
    }else{
     dots.style.display="none";
    }
}




