window.addEventListener("DOMContentLoaded", function(e)
{
    console.log("working")
    const orderButtons = document.querySelectorAll("button[data-order]");

    var totalItems = 0;

    orderButtons.forEach(function(button)
    {
        button.addEventListener("click", function(e)
        {
            const button = e.currentTarget;
            const container = button.parentNode.parentNode;
            const order = 
            {
                id: button.getAttribute("data-order"),
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".desc").innerText
            };

            localStorage.setItem("order", JSON.stringify(order));
            const url = window.location.href.replace("pizzas.html", "order.html");
            

            addItemToBasket(order.price, button.getAttribute("data-order"));
            //window.location.href = url;
        });
    });

    var totalCost = 0.0;

    function addItemToBasket(price, size)
    {
        var amount = parseFloat(Number(price.replace(/[^0-9.-]+/g,"")));

        if ((String(size) == "medium")){amount += 3.00;}
        else if (String(size) == "large"){amount += 5.00;}
        else if (String(size) == "xlarge"){amount += 6.00;}
        else if (String(size) == "4small"){amount += 19.00;}
        else if (String(size) == "4medium"){amount += 29.00;}
        else if (String(size) == "4large"){amount += 39.00;}  
        else if (String(size) == "4xlarge"){amount += 43.00;}

        totalCost += parseFloat(amount.toFixed(2));
        localStorage.setItem("cost", totalCost);
    }
});