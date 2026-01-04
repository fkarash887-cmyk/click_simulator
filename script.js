let count = localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0;
let clickPower = localStorage.getItem("clickPower") ? Number(localStorage.getItem("clickPower")) : 1;
let price = localStorage.getItem("price") ? Number(localStorage.getItem("price")) : 10;

const countEl = document.getElementById("count");
const clickBtn = document.getElementById("clickBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const priceEl = document.getElementById("price");

function update() {
    countEl.textContent = count;
    priceEl.textContent = price;
    localStorage.setItem("count", count);
    localStorage.setItem("clickPower", clickPower);
    localStorage.setItem("price", price);
}

clickBtn.onclick = () => {
    count += clickPower;
    update();
};

upgradeBtn.onclick = () => {
    if (count >= price) {
        count -= price;
        clickPower++;
        price = Math.floor(price * 1.7);
        update();
    } else {
        alert("Недостаточно кликов!");
    }
};

update();
