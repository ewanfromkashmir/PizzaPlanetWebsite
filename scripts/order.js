window.addEventListener("DOMContentLoaded", function(e)
{ 
    const url = window.location.href.replace("order.html", "complete.html");
    
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
});