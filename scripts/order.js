window.addEventListener("DOMContentLoaded", function(e)
{
    const order = localStorage.getItem("order");
    const pizzaOrder = JSON.parse(order);

    if (order)
    {
        const pizza = document.querySelector(".pizza");
        const title = pizza.querySelector(".title");
        const price = pizza.querySelector(".price");
        const desc = pizza.querySelector(".desc");
        const orderInput = document.querySelector("#pizza-order");

        title.innerText = pizzaOrder.title;
        price.innerText = pizzaOrder.price;
        desc.innerText = pizzaOrder.desc;
        orderInput.value = order;

        const img = pizza.querySelector("img");
        img.setAttribute("src", `../images/pizzas/${pizzaOrder.id}.png`);
        img.setAttribute("alt", pizzaOrder.title);
    }
});