window.addEventListener("DOMContentLoaded", function(e)
{
    const order = localStorage.getItem("order");

    if (order)
    {
        const pizzaOrder = JSON.parse(order);
        const pizza = document.querySelector(".pizza");

        const title = pizza.querySelector(".title");
        const price = pizza.querySelector(".price");
        const desc = pizza.querySelector(".desc");

        title.innerText = pizzaOrder.title;
        price.innerText = pizzaOrder.price;
        desc.innerText = pizzaOrder.desc;

        const img = pizza.querySelector("img");
        img.setAttribute("src", `../images/pizzas/${pizzaOrder.id}.png`);
        img.setAttribute("alt", pieOrder.title);
    }
});