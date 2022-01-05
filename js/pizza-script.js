const sizeCrustTab = document.getElementById("size-crust-tab");
const cheeseSauceTab = document.getElementById("cheese-sauce-tab");
const toppingsTab = document.getElementById("toppings-tab")
const sizeCrustPanel = document.getElementById("size-crust");
const cheeseSaucePanel = document.getElementById("cheese-sauce");
const toppingsPanel = document.getElementById("toppings");

function showCheeseTab(){
    sizeCrustTab.className = "nav-link";
    cheeseSauceTab.className = "nav-link active";  //activated
    toppingsTab.className = "nav-link";
    sizeCrustPanel.className = "card tab-pane";
    cheeseSaucePanel.className = "card tab-pane active"; //activated
    toppingsPanel.className = "card tab-pane";
}

function showCrustTab(){
    sizeCrustTab.className = "nav-link active"; //activated
    cheeseSauceTab.className = "nav-link";
    sizeCrustPanel.className = "card tab-pane active"; //activated
    cheeseSaucePanel.className = "card tab-pane";
}

function showToppingsTab(){
    cheeseSauceTab.className = "nav-link";
    toppingsTab.className = "nav-link active"; //activated
    cheeseSaucePanel.className = "card tab-pane";
    toppingsPanel.className = "card tab-pane active"; //activated
}

function checkout(){
    alert("Order Submitted.");
}

