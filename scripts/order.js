window.addEventListener("DOMContentLoaded", function(e)
{ 
    const url = window.location.href.replace("order.html", "complete.html");
    var totalItems = parseInt(localStorage.getItem("items"));
    var totalCost = parseFloat(localStorage.getItem("cost"));
    displayValues();
    
    function clearBasket()
    {
        localStorage.setItem("cost", 0.0);
        localStorage.setItem("items", 0);
        switchPage();
    }

    function switchPage()
    {
        window.location.href = url;
    }

    function displayValues()
    {
        const cost = document.getElementById("cost");
        const items = document.getElementById("items");

        if (totalItems > 0)
        {
            items.innerText = ("Total items: " + totalItems);
        }

        if (totalCost > 0)
        {
            cost.innerText = ("Total cost: $" + totalCost);
        }
    }
});