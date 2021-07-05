const menuPizza = document.querySelector(".menu__pizza");
const menuCalzone = document.querySelector(".menu__calzone");
const menuSalad = document.querySelector(".menu__salad");
const menuAppetizer = document.querySelector(".menu__appetizer");
const menuPasta = document.querySelector(".menu__pasta");
const menuBakedPasta = document.querySelector(".menu__bakedPasta");
const menuDessert = document.querySelector(".menu__dessert");
const menuDrink = document.querySelector(".menu__drink");

const elementPizza = document.querySelector(".elementPizza");
const elementCalzone = document.querySelector(".elementCalzone");
const elementSalad = document.querySelector(".elementSalad");
const elementPasta = document.querySelector(".elementPasta");
const elementAppetizer = document.querySelector(".elementAppetizer");
const elementDessert = document.querySelector(".elementDessert");
const elementDrink = document.querySelector(".elementDrink");
const elementBakedPasta = document.querySelector(".elementBakedPasta");

elementPizza.addEventListener("click", () => {
    menuPizza.classList.add("active");
    menuCalzone.classList.remove("active");
    menuAppetizer.classList.remove("active");
    menuPasta.classList.remove("active");
    menuBakedPasta.classList.remove("active");
    menuDessert.classList.remove("active");
    menuDrink.classList.remove("active");
    menuSalad.classList.remove("active");
    elementPizza.classList.add("activeElement");
    elementCalzone.classList.remove("activeElement");
    elementSalad.classList.remove("activeElement");
    elementPasta.classList.remove("activeElement");
    elementAppetizer.classList.remove("activeElement");
    elementDessert.classList.remove("activeElement");
    elementDrink.classList.remove("activeElement");
    elementBakedPasta.classList.remove("activeElement");
})

elementCalzone.addEventListener("click", () => {
    menuPizza.classList.remove("active");
    menuCalzone.classList.add("active");
    menuAppetizer.classList.remove("active");
    menuPasta.classList.remove("active");
    menuBakedPasta.classList.remove("active");
    menuDessert.classList.remove("active");
    menuDrink.classList.remove("active");
    menuSalad.classList.remove("active");
    elementPizza.classList.remove("activeElement");
    elementCalzone.classList.add("activeElement");
    elementSalad.classList.remove("activeElement");
    elementPasta.classList.remove("activeElement");
    elementAppetizer.classList.remove("activeElement");
    elementDessert.classList.remove("activeElement");
    elementDrink.classList.remove("activeElement");
    elementBakedPasta.classList.remove("activeElement");
})

elementSalad.addEventListener("click", () => {
    menuPizza.classList.remove("active");
    menuCalzone.classList.remove("active");
    menuAppetizer.classList.remove("active");
    menuPasta.classList.remove("active");
    menuBakedPasta.classList.remove("active");
    menuDessert.classList.remove("active");
    menuDrink.classList.remove("active");
    menuSalad.classList.add("active");
    elementPizza.classList.remove("activeElement");
    elementCalzone.classList.remove("activeElement");
    elementSalad.classList.add("activeElement");
    elementPasta.classList.remove("activeElement");
    elementAppetizer.classList.remove("activeElement");
    elementDessert.classList.remove("activeElement");
    elementDrink.classList.remove("activeElement");
    elementBakedPasta.classList.remove("activeElement");
})

elementPasta.addEventListener("click", () => {
    menuPizza.classList.remove("active");
    menuCalzone.classList.remove("active");
    menuAppetizer.classList.remove("active");
    menuPasta.classList.add("active");
    menuBakedPasta.classList.remove("active");
    menuDessert.classList.remove("active");
    menuDrink.classList.remove("active");
    menuSalad.classList.remove("active");
    elementPizza.classList.remove("activeElement");
    elementCalzone.classList.remove("activeElement");
    elementSalad.classList.remove("activeElement");
    elementPasta.classList.add("activeElement");
    elementAppetizer.classList.remove("activeElement");
    elementDessert.classList.remove("activeElement");
    elementDrink.classList.remove("activeElement");
    elementBakedPasta.classList.remove("activeElement");
})

elementAppetizer.addEventListener("click", () => {
    menuPizza.classList.remove("active");
    menuCalzone.classList.remove("active");
    menuAppetizer.classList.add("active");
    menuPasta.classList.remove("active");
    menuBakedPasta.classList.remove("active");
    menuDessert.classList.remove("active");
    menuDrink.classList.remove("active");
    menuSalad.classList.remove("active");
    elementPizza.classList.remove("activeElement");
    elementCalzone.classList.remove("activeElement");
    elementSalad.classList.remove("activeElement");
    elementPasta.classList.remove("activeElement");
    elementAppetizer.classList.add("activeElement");
    elementDessert.classList.remove("activeElement");
    elementDrink.classList.remove("activeElement");
    elementBakedPasta.classList.remove("activeElement");
})

elementDessert.addEventListener("click", () => {
    menuPizza.classList.remove("active");
    menuCalzone.classList.remove("active");
    menuAppetizer.classList.remove("active");
    menuPasta.classList.remove("active");
    menuBakedPasta.classList.remove("active");
    menuDessert.classList.add("active");
    menuDrink.classList.remove("active");
    menuSalad.classList.remove("active");
    elementPizza.classList.remove("activeElement");
    elementCalzone.classList.remove("activeElement");
    elementSalad.classList.remove("activeElement");
    elementPasta.classList.remove("activeElement");
    elementAppetizer.classList.remove("activeElement");
    elementDessert.classList.add("activeElement");
    elementDrink.classList.remove("activeElement");
    elementBakedPasta.classList.remove("activeElement");
})

elementDrink.addEventListener("click", () => {
    menuPizza.classList.remove("active");
    menuCalzone.classList.remove("active");
    menuAppetizer.classList.remove("active");
    menuPasta.classList.remove("active");
    menuBakedPasta.classList.remove("active");
    menuDessert.classList.remove("active");
    menuDrink.classList.add("active");
    menuSalad.classList.remove("active");
    elementPizza.classList.remove("activeElement");
    elementCalzone.classList.remove("activeElement");
    elementSalad.classList.remove("activeElement");
    elementPasta.classList.remove("activeElement");
    elementAppetizer.classList.remove("activeElement");
    elementDessert.classList.remove("activeElement");
    elementDrink.classList.add("activeElement");
    elementBakedPasta.classList.remove("activeElement");
})

elementBakedPasta.addEventListener("click", () => {
    menuPizza.classList.remove("active");
    menuCalzone.classList.remove("active");
    menuAppetizer.classList.remove("active");
    menuPasta.classList.remove("active");
    menuBakedPasta.classList.add("active");
    menuDessert.classList.remove("active");
    menuDrink.classList.remove("active");
    menuSalad.classList.remove("active");
    elementPizza.classList.remove("activeElement");
    elementCalzone.classList.remove("activeElement");
    elementSalad.classList.remove("activeElement");
    elementPasta.classList.remove("activeElement");
    elementAppetizer.classList.remove("activeElement");
    elementDessert.classList.remove("activeElement");
    elementDrink.classList.remove("activeElement");
    elementBakedPasta.classList.add("activeElement");
})

const buttonNavigationMobile = document.querySelector(".navigation__mobileButton");
const navigationMobile = document.querySelector(".navigationMobile");

if(window.innerWidth < 992) {
    buttonNavigationMobile.addEventListener("click", () => {
        navigationMobile.classList.toggle("navigationMobileActive");
    });
    
    linksNavigationMobile.forEach(element => {
        element.addEventListener("click", () => {
            navigationMobile.classList.remove("navigationMobileActive");
        });
    });
};

