const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const menuLinks = document.querySelectorAll("#menu a")
let isActive = false;

var urlActual = window.location.href;
var urlObj = new URL(urlActual);
var ruta = urlObj.pathname;

console.log(ruta);



btnMenu.addEventListener("click", (e) => {
    e.preventDefault();

    if(!isActive){
        menu.classList.add("flex","justify-center")
        menu.classList.remove("hidden");
        isActive = true;
        btnMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        menu.classList.remove("flex","justify-center")
        menu.classList.add("hidden");
        isActive = false;
        btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
    
})

menuLinks.forEach((link) => {
    link.addEventListener("click", (e) =>{
        menu.classList.remove("flex","justify-center")
        menu.classList.add("hidden");
        isActive = false;
        btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`

    })
})



const data = [
    {
        title: "A",
        amenities: [
            "2 Recamaras",
            "2 1/2 Baños",
            "Cocina",
            "Area de Servicio",
            "Sala",
            "Comedor",
            "Terraza",
        ],
        size1: ["86.83", "60.34"],
        size2: ["86.83", "10.90"],
        mainImg: "/images/prototipos/a/render.jpg",
        secondaryImg: [
            "/images/prototipos/a/building.png",
            "/images/prototipos/a/plan.png",
        ],
    },
    {
        title: "B",
        amenities: [
            "1 Recamara",
            "1 Baño",
            "Cocina",
            "Area de Servicio",
            "Sala",
            "Comedor",
            "Terraza",
        ],
        size1: ["37.41", "3.97"],
        mainImg: "/images/prototipos/b/render.jpg",
        secondaryImg: [
            "/images/prototipos/b/building.png",
            "/images/prototipos/b/plan.png",
        ],
    },
    {
        title: "C",
        amenities: [
            "2 Recamaras",
            "2 1/2 Baños",
            "Cocina",
            "Area de Servicio",
            "Sala",
            "Comedor",
            "Terraza",
        ],
        size1: ["86.43", "25.23"],
        size2: ["86.43", "14.44"],
        mainImg: "/images/prototipos/c/render.jpg",
        secondaryImg: [
            "/images/prototipos/c/building.png",
            "/images/prototipos/c/plan.png",
        ],
    },
    {
        title: "PH-1",
        amenities: [
            "3 Recamaras",
            "3 1/2 Baños",
            "Cocina",
            "Area de Servicio",
            "Sala",
            "Comedor",
            "Terraza",
            "Estacionamiento",
        ],
        size1: ["178.34", "44.79"],
        mainImg: "/images/prototipos/ph-2/render.jpg",
        secondaryImg: [
            "/images/prototipos/ph-2/building.png",
            "/images/prototipos/ph-2/plan.png",
        ],
    },
    {
        title: "PH-2",
        amenities: [
            "3 Recamaras",
            "3 1/2 Baños",
            "Cocina",
            "Area de Servicio",
            "Sala",
            "Comedor",
            "Terraza",
            "Terraza Posterior",
            "Estacionamiento",
        ],
        size1: ["180.67", "57.40", "7.88"],
        mainImg: "/images/prototipos/ph-1/render.jpg",
        secondaryImg: [
            "/images/prototipos/ph-1/building.png",
            "/images/prototipos/ph-1/plan.png",
        ],
    }
    
];

const roomCards = document.querySelector("#room-cards");
const roomSlide = document.querySelector("#room-slide");


const contentCards = data.map((room, index) => {
    const amenitiesList = room.amenities
        .slice(0, 2)
        .map((amenity) => `<li>${amenity}</li>`)
        .join("");

    const amenitiesHidden = room.amenities
    .slice(2)
    .map((amenity) => `<li class="md:hidden">${amenity}</li>`)
    .join('');

    return `
        <div class="swiper-slide text-white bg-[#21c7b5] rounded-md">
        <div class="text-center pt-2">
            <h3 class="font-bold text-lg tracking-widest">PROTOTIPO</h3>
            <span class="text-[#F5A425] text-6xl font-bold">${room.title}</span>
            <ul class="py-2 uppercase text-lg">
                ${amenitiesList}
                ${amenitiesHidden}
            </ul>
            <div class="md:hidden flex gap-3 items-center justify-center my-3">
                <a href="#" class="font-bold p-2 bg-[#F5A425] rounded-sm planta" key="${index}">PLANTA</a>
                <a href="#" class="font-bold p-2 bg-[#F5A425] rounded-sm ubicacion" key="${index}">UBICACION</a>
            </div>
        </div>
        <img src=${room.mainImg}  class="rounded-b-md pt-3"/>
        </div>`;
});

const contentSlide = data.map((room) => {
    const amenities = room.amenities
    .slice(2)
    .map((amenity) => `<li>${amenity}</li>`)
    .join('');

    const sizesContent = room.size2 ? `<h4 class="text-[#F5A425] font-bold text-2xl">NIVEL 1</h4>
<p class="font-bold">Superficie INT ${room.size1[0]} M2</p>
<p class="font-bold pb-4">Superficie EXT ${room.size1[1]} M2</p>
<h4 class="text-[#F5A425] font-bold text-2xl">NIVEL 2-5</h4>
<p class="font-bold">Superficie INT ${room.size2[0]} M2</p>
<p class="font-bold">Superficie EXT ${room.size2[1]} M2</p>` 
: room.size1.length == 3 ? 
`<p class="font-bold">Superficie INT ${room.size1[0]} M2</p>
<p class="font-bold">Superficie INT ${room.size1[1]} M2</p>
<p class="font-bold">Superficie EXT Azotea ${room.size1[2]} M2</p>` :

`<p class="font-bold">Superficie INT ${room.size1[0]} M2</p>
<p class="font-bold">Superficie EXT ${room.size1[1]} M2</p>`


    return `
    <div class="swiper-slide">
    <div class="sm:grid-cols-4 lg:grid-cols-3 lg:max-h-[50rem] gap-12 hidden md:grid">
        <div class="sm:col-span-2 lg:col-span-1">
            <img src=${room.secondaryImg[0]}  class="object-contain h-full "/>
        </div>
        <div class="sm:col-span-2 lg:col-span-1">
            <img src=${room.secondaryImg[1]}  class="object-contain h-full "/>
        </div>
        <div class="flex-col justify-center mx-auto sm:col-span-4 lg:col-span-1 hidden md:flex">
            <div class="bg-[#21c7b5] p-16 rounded-md text-center text-white text-lg uppercase">
                <h2 class="text-[#F5A425] font-bold text-5xl pb-3">${room.title}</h2>
                <ul class="mb-8">
                    ${amenities}
                </ul>
                <div id="sizes" class="">
                    ${sizesContent}
                </div>
                </div>
            </div>
        </div>
    </div>
    `
})




    
const whatsappButton = document.querySelector('#whatsapp')
    
window.addEventListener("scroll", () => {
    if(window.scrollY > 720){
        whatsappButton.classList.remove("hidden");
    } else {
        whatsappButton.classList.add("hidden")
    }
})

const popup = document.querySelector('#popup');
const closePopup = document.querySelector("#closePopup");
const contentPopup = document.querySelector("#contentPopup");
const planta = document.querySelectorAll(".planta");
const ubicacion = document.querySelectorAll(".ubicacion");

planta.forEach((planta) => {
    planta.addEventListener("click", (e) => {
        e.preventDefault();
        const key = planta.getAttribute("key");
        const img = data[key].secondaryImg[0];
        const alt = data[key].title;
        contentPopup.innerHTML = `<img src=${img} alt="Prototipo - ${alt}">`
        popup.classList.add("flex");
        popup.classList.remove("hidden");

    })
})

ubicacion.forEach((ubicacion) => {
    ubicacion.addEventListener("click", (e) => {
        e.preventDefault();
        const key = ubicacion.getAttribute("key");
        const img = data[key].secondaryImg[1];
        const alt = data[key].title;
        contentPopup.innerHTML = `<img src=${img} alt="Prototipo - ${alt}">`
        popup.classList.add("flex");
        popup.classList.remove("hidden");
    })
})

closePopup.addEventListener("click", (e) => {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
    contentPopup.innerHTML = "";

})



/*Datos Prototipos ingles */


const dataEn = [
    {
        title: "A",
        amenities: [
            "2 Rooms",
            "2 1/2 Bathrooms",
            "Kitchen",
            "Service Area",
            "Living Room",
            "Dining Room",
            "Terrace",
        ],
        size1: ["86.83", "60.34"],
        size2: ["86.83", "10.90"],
        mainImg: "/images/prototipos/a/render.jpg",
        secondaryImg: [
            "/images/prototipos/a/building.png",
            "/images/prototipos/a/plan.png",
        ],
    },
    {
        title: "B",
        amenities: [
            "1 Room",
            "1 Bathroom",
            "Kitchen",
            "Service Area",
            "Living Room",
            "Dining Room",
            "Terrace",
        ],
        size1: ["37.41", "3.97"],
        mainImg: "/images/prototipos/b/render.jpg",
        secondaryImg: [
            "/images/prototipos/b/building.png",
            "/images/prototipos/b/plan.png",
        ],
    },
    {
        title: "C",
        amenities: [
            "2 Rooms",
            "2 1/2 Bathrooms",
            "Kitchen",
            "Service Area",
            "Living Room",
            "Dining Room",
            "Terrace",
        ],
        size1: ["86.43", "25.23"],
        size2: ["86.43", "14.44"],
        mainImg: "/images/prototipos/c/render.jpg",
        secondaryImg: [
            "/images/prototipos/c/building.png",
            "/images/prototipos/c/plan.png",
        ],
    },
    {
        title: "PH-1",
        amenities: [
            "3 Rooms",
            "3 1/2 Bathrooms",
            "Kitchen",
            "Service Area",
            "Living Room",
            "Dining Room",
            "Terrace",
            "Parking",
        ],
        size1: ["178.34", "44.79"],
        mainImg: "/images/prototipos/ph-2/render.jpg",
        secondaryImg: [
            "/images/prototipos/ph-2/building.png",
            "/images/prototipos/ph-2/plan.png",
        ],
    },
    {
        title: "PH-2",
        amenities: [
            "3 Rooms",
            "3 1/2 Bathrooms",
            "Kitchen",
            "Service Area",
            "Living Room",
            "Dining Room",
            "Roof Top",
            "Posterior Roof Top",
            "Parking",
        ],
        size1: ["180.67", "57.40", "7.88"],
        mainImg: "/images/prototipos/ph-1/render.jpg",
        secondaryImg: [
            "/images/prototipos/ph-1/building.png",
            "/images/prototipos/ph-1/plan.png",
        ],
    }

];

const roomCardsEn = document.querySelector("#room-cards-en");
const roomSlideEn = document.querySelector("#room-slide-en");


const contentCardsEn = dataEn.map((room, index) => {
    const amenitiesList = room.amenities
        .slice(0, 2)
        .map((amenity) => `<li>${amenity}</li>`)
        .join("");

    const amenitiesHidden = room.amenities
    .slice(2)
    .map((amenity) => `<li class="md:hidden">${amenity}</li>`)
    .join('');

    return `
        <div class="swiper-slide text-white bg-[#21c7b5] rounded-md">
        <div class="text-center pt-2">
            <h3 class="font-bold text-lg tracking-widest">PROTOTIPE</h3>
            <span class="text-[#F5A425] text-6xl font-bold">${room.title}</span>
            <ul class="py-2 uppercase text-lg">
                ${amenitiesList}
                ${amenitiesHidden}
            </ul>
            <div class="md:hidden flex gap-3 items-center justify-center my-3">
                <a href="#" class="font-bold p-2 bg-[#F5A425] rounded-sm planta" key="${index}">FLOOR</a>
                <a href="#" class="font-bold p-2 bg-[#F5A425] rounded-sm ubicacion" key="${index}">LOCATION</a>
            </div>
        </div>
        <img src=${room.mainImg}  class="rounded-b-md pt-3"/>
        </div>`;
});

const contentSlideEn = dataEn.map((room) => {
    const amenities = room.amenities
    .slice(2)
    .map((amenity) => `<li>${amenity}</li>`)
    .join('');

    const sizesContent = room.size2 ? `<h4 class="text-[#F5A425] font-bold text-2xl">LEVEL 1</h4>
<p class="font-bold">INT ${room.size1[0]} M2</p>
<p class="font-bold pb-4">EXT ${room.size1[1]} M2</p>
<h4 class="text-[#F5A425] font-bold text-2xl">LEVEL 2-5</h4>
<p class="font-bold">INT ${room.size2[0]} M2</p>
<p class="font-bold">EXT ${room.size2[1]} M2</p>` 
: room.size1.length == 3 ? 
`<p class="font-bold">INT ${room.size1[0]} M2</p>
<p class="font-bold">INT ${room.size1[1]} M2</p>
<p class="font-bold">EXT Rooftop ${room.size1[2]} M2</p>` :

`<p class="font-bold">INT ${room.size1[0]} M2</p>
<p class="font-bold">EXT ${room.size1[1]} M2</p>`


    return `
    <div class="swiper-slide">
    <div class="sm:grid-cols-4 lg:grid-cols-3 lg:max-h-[50rem] gap-12 hidden md:grid">
        <div class="sm:col-span-2 lg:col-span-1">
            <img src=${room.secondaryImg[0]}  class="object-contain h-full "/>
        </div>
        <div class="sm:col-span-2 lg:col-span-1">
            <img src=${room.secondaryImg[1]}  class="object-contain h-full "/>
        </div>
        <div class="flex-col justify-center mx-auto sm:col-span-4 lg:col-span-1 hidden md:flex">
            <div class="bg-[#21c7b5] p-16 rounded-md text-center text-white text-lg uppercase">
                <h2 class="text-[#F5A425] font-bold text-5xl pb-3">${room.title}</h2>
                <ul class="mb-8">
                    ${amenities}
                </ul>
                <div id="sizes" class="">
                    ${sizesContent}
                </div>
                </div>
            </div>
        </div>
    </div>
    `
})
document.addEventListener("DOMContentLoaded", function () {
    
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    var swiper = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        slidesPerView: 1,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
    
    var swiper2 = new Swiper(".mySwiper3", {
        loop: true,
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
    });
    if (ruta === "/en") {
        roomCardsEn.innerHTML = contentCardsEn.join("");
        roomSlideEn.innerHTML = contentSlideEn.join("");
        
    } else {
        roomCards.innerHTML = contentCards.join("");
        roomSlide.innerHTML = contentSlide.join("");
    }
    
});