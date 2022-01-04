const sizeCrustTab = document.getElementById("size-crust-tab");
const cheeseSauceTab = document.getElementById("cheese-sauce-tab");
const sizeCrustPanel = document.getElementById("size-crust");
const cheeseSaucePanel = document.getElementById("cheese-sauce");

function showCheeseTab(){
    sizeCrustTab.className = "nav-link";
    cheeseSauceTab.className = "nav-link active";
    sizeCrustPanel.className = "card tab-pane";
    cheeseSaucePanel.className = "card tab-pane active";
}

