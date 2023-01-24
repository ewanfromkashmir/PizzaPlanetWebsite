window.addEventListener("DOMContentLoaded", function(e)
{
    const orderButtons = document.querySelectorAll("button[size]");
    var totalItems = parseInt(localStorage.getItem("items"));
    var totalCost = parseFloat(localStorage.getItem("cost"));
    console.log(totalItems);
    console.log(totalCost);
    updateHeader();

    orderButtons.forEach(function(button)
    {
        button.addEventListener("click", function(e)
        {
            const button = e.currentTarget;
            const container = button.parentNode.parentNode;
            const order = 
            {
                id: button.getAttribute("size"),
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".desc").innerText
            };

            addItemToBasket(order.price, button.getAttribute("size"));
        });
    });

    function addItemToBasket(price, size)
    {
        var amount = parseFloat(Number(price.replace(/[^0-9.-]+/g,"")));

        if ((String(size) == "medium")){amount += 3.00;}
        else if (String(size) == "large"){amount += 5.00;}
        else if (String(size) == "xlarge"){amount += 6.00;}
        else if (String(size) == "4medium"){amount += 10.00;}
        else if (String(size) == "4large"){amount += 16.00;}
        else if (String(size) == "4xlarge"){amount += 20.00;}

        totalCost += parseFloat(amount.toFixed(2));
        totalItems++;
        localStorage.setItem("cost", totalCost.toFixed(2));
        localStorage.setItem("items", totalItems);
        console.log(localStorage);
        updateHeader();
    }

    function updateHeader()
    {
        orderLink = document.getElementById("order");

        if (totalItems > 0)
        {
            orderLink.innerText = ("Complete Order (" + totalItems + ")");
            orderLink.style.textDecoration = "underline";
        }
        else
        {
            orderLink.innerText = "";
            orderLink.style.textDecoration = "";
        }
    }
});