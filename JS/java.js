
const cars = ["Mercedes", "BMW", "Audi", "Volkswagen"]
const knop = document.querySelector('.go-button');
knop.addEventListener("click",showCars);
function showCars(){
    const input = document.querySelector(".index-reader");
    document.querySelector('.result').textContent= cars[input.value];
}