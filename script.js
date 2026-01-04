let count = Number(localStorage.getItem("count")) || 0;
let power = Number(localStorage.getItem("power")) || 1;
let auto = Number(localStorage.getItem("auto")) || 0;
let multiplier = Number(localStorage.getItem("multiplier")) || 1;

let powerPrice = Number(localStorage.getItem("powerPrice")) || 10;
let autoPrice = Number(localStorage.getItem("autoPrice")) || 50;
let multiPrice = Number(localStorage.getItem("multiPrice")) || 200;

const countEl = document.getElementById("count");
const powerPriceEl = document.getElementById("powerPrice");
const autoPriceEl = document.getElementById("autoPrice");
const multiPriceEl = document.getElementById("multiPrice");

function update() {
    countEl.textContent = count;
    powerPriceEl.textContent = powerPrice;
    autoPriceEl.textContent = autoPrice;
    multiPriceEl.textContent = multiPrice;

    localStorage.setItem("count", count);
    localStorage.setItem("power", power);
    localStorage.setItem("auto", auto);
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("powerPrice", powerPrice);
    localStorage.setItem("autoPrice", autoPrice);
    localStorage.setItem("multiPrice", multiPrice);
}

document.getElementById("clickBtn").onclick = () => {
    count += power * multiplier;
    update();
};

function buyPower() {
    if (count >= powerPrice) {
        count -= powerPrice;
        power++;
        powerPrice = Math.floor(powerPrice * 1.5);
        update();
    }
}

function buyAuto() {
    if (count >= autoPrice) {
        count -= autoPrice;
        auto++;
        autoPrice = Math.floor(autoPrice * 1.7);
        update();
    }
}

function buyMultiplier() {
    if (count >= multiPrice) {
        count -= multiPrice;
        multiplier *= 2;
        multiPrice = Math.floor(multiPrice * 3);
        update();
    }
}

// автокликер
setInterval(() => {
    count += auto * multiplier;
    update();
}, 1000);

update();
