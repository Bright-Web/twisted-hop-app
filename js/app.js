

let drinks = document.querySelector(".drinks")
let drinksSub = document.querySelector(".drinks-sub")
let food = document.querySelector(".food")
let foodSub = document.querySelector(".food-sub")

food.addEventListener('click', function(){
    drinksSub.classList.add("nav__submenu--hidden")
    foodSub.classList.remove("nav__submenu--hidden")
})
drinks.addEventListener('click', function(){
    drinksSub.classList.remove("nav__submenu--hidden")
    foodSub.classList.add("nav__submenu--hidden")

})

