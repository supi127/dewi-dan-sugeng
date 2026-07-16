const envelope = document.getElementById("envelope");

const button = document.getElementById("openBtn");

const music = document.getElementById("music");


button.addEventListener("click", function(){

    // Membuka amplop
    envelope.classList.add("open");


    // Memutar musik
    music.play();


});// Membuat bunga jatuh otomatis

function createFlower(){

    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = "🌸";


    flower.style.left =
    Math.random() * 100 + "vw";


    flower.style.animationDuration =
    Math.random() * 5 + 5 + "s";


    document.body.appendChild(flower);


    setTimeout(() => {

        flower.remove();

    }, 10000);

}


// Jalankan bunga setiap waktu

setInterval(createFlower, 500);
// Membuat glitter emas

function createGlitter(){

    const glitter =
    document.createElement("div");


    glitter.classList.add("glitter");


    glitter.style.left =
    Math.random() * 100 + "vw";


    glitter.style.top =
    Math.random() * 100 + "vh";


    glitter.style.animationDuration =
    Math.random() * 3 + 2 + "s";


    document.body.appendChild(glitter);


    setTimeout(() => {

        glitter.remove();

    }, 5000);

}


// Jalankan glitter

setInterval(createGlitter, 300);
// Countdown Pernikahan


const weddingDate =
new Date("December 20, 2026 08:00:00").getTime();



setInterval(function(){


const now =
new Date().getTime();



const distance =
weddingDate - now;



const days =
Math.floor(
distance /
(1000 * 60 * 60 * 24)
);



const hours =
Math.floor(
(distance %
(1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);



const minutes =
Math.floor(
(distance %
(1000 * 60 * 60))
/
(1000 * 60)
);



const seconds =
Math.floor(
(distance %
(1000 * 60))
/
1000
);



document.getElementById("days").innerHTML =
days;


document.getElementById("hours").innerHTML =
hours;


document.getElementById("minutes").innerHTML =
minutes;


document.getElementById("seconds").innerHTML =
seconds;



},1000);
// Galeri Foto


function openImage(src){

    const lightbox =
    document.getElementById("lightbox");


    const image =
    document.getElementById("bigImage");


    image.src = src;


    lightbox.style.display =
    "flex";

}



function closeImage(){

    document.getElementById("lightbox")
    .style.display="none";

}