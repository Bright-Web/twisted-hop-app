

let drinks = document.querySelector(".drinks")
let drinksSub = document.querySelector(".drinks-sub")
let food = document.querySelector(".food")
let foods = document.querySelector(".foods")
let beers = document.querySelector(".beers")
let foodSub = document.querySelector(".food-sub")
let home = document.querySelector(".home")
let content = document.querySelector(".content")
let main = document.querySelector(".main")
let orders = document.querySelector(".orders")
let noOrders = document.querySelector(".orders__none")
let orderDrink = document.querySelector(".order")
let confirmAge = document.querySelector(".confirm-age")
let confirmButton= document.querySelector(".confirm-button")
let confirmOrder= document.querySelector(".confirm-order")
let billButton= document.querySelector(".bill-button")





confirmOrder.addEventListener('click', function(){
    orderDrink.classList.add("order--confirmed")
    orderDrink.classList.remove("order--unconfirmed")
    confirmButton.classList.add("button--disabled")
    billButton.classList.remove("button--disabled")
    
})

confirmAge.addEventListener('click', function(){
    noOrders.classList.add("notdisplayed")
    orderDrink.classList.remove("notdisplayed")
    confirmButton.classList.remove("button--disabled")
    
})




food.addEventListener('click', function(){
    drinksSub.classList.add("nav__submenu--hidden")
    foodSub.classList.remove("nav__submenu--hidden")
    foods.classList.remove("notdisplayed")
    beers.classList.add("notdisplayed")
    drinks.classList.remove("nav__item--active")
    food.classList.add("nav__item--active")
    home.classList.remove("home-is-active")
    content.classList.remove("content--main")
    main.classList.add("notdisplayed")
    orders.classList.remove("notdisplayed")
    
})
drinks.addEventListener('click', function(){
    drinksSub.classList.remove("nav__submenu--hidden")
    foodSub.classList.add("nav__submenu--hidden")
    foods.classList.add("notdisplayed")
    beers.classList.remove("notdisplayed")
    drinks.classList.add("nav__item--active")
    food.classList.remove("nav__item--active")
    home.classList.remove("home-is-active")
    content.classList.remove("content--main")
    main.classList.add("notdisplayed")
    orders.classList.remove("notdisplayed")
})


home.addEventListener('click', function(){
foodSub.classList.add("nav__submenu--hidden")
foods.classList.add("notdisplayed")
drinks.classList.remove("nav__item--active")
food.classList.remove("nav__item--active")
beers.classList.add("notdisplayed")
drinksSub.classList.add("nav__submenu--hidden")
home.classList.add("home-is-active")
content.classList.add("content--main")
main.classList.remove("notdisplayed")
orders.classList.add("notdisplayed")
})