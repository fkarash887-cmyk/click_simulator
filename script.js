// ===== ОСНОВНЫЕ ПЕРЕМЕННЫЕ =====
let clicks = 0;          // общее количество кликов
let power = 1;           // сила одного клика
let auto = 0;            // количество автокликеров
let multiplier = 1;      // множитель клика

// цены
let powerPrice = 10;
let autoPrice = 50;
let multiPrice = 200;

// ===== ПОЛУЧАЕМ ЭЛЕМЕНТЫ СО СТРАНИЦЫ =====
const countEl = document.getElementById("count");
const clickBtn = document.getElementById("clickBtn");

const powerPriceEl = document.getElementById("powerPrice");
const autoPriceEl = document.getElementById("autoPrice");
const multiPriceEl = document.getElementById("multiPrice");

// ===== ОБНОВЛЕНИЕ ТЕКСТА НА СТРАНИЦЕ =====
function updateUI() {
    countEl.textContent = Math.floor(clicks);
    powerPriceEl.textContent = powerPrice;
    autoPriceEl.textContent = autoPrice;
    multiPriceEl.textContent = multiPrice;
}

// ===== КЛИК ПО КНОПКЕ =====
clickBtn.addEventListener("click", () => {
    clicks += power * multiplier;
    updateUI();
});

// ===== ПОКУПКА СИЛЫ КЛИКА =====
function buyPower() {
    if (clicks >= powerPrice) {
        clicks -= powerPrice;
        power += 1;
        powerPrice = Math.floor(powerPrice * 1.5);
        updateUI();
    } else {
        alert("❌ Недостаточно кликов!");
    }
}

// ===== ПОКУПКА АВТОКЛИКЕРА =====
function buyAuto() {
    if (clicks >= autoPrice) {
        clicks -= autoPrice;
        auto += 1;
        autoPrice = Math.floor(autoPrice * 1.7);
        updateUI();
    } else {
        alert("❌ Недостаточно кликов!");
    }
}

// ===== ПОКУПКА МНОЖИТЕЛЯ =====
function buyMultiplier() {
    if (clicks >= multiPrice) {
        clicks -= multiPrice;
        multiplier *= 2;
        multiPrice = Math.floor(multiPrice * 2.5);
        updateUI();
    } else {
        alert("❌ Недостаточно кликов!");
    }
}

// ===== АВТОКЛИКЕР КАЖДУЮ СЕКУНДУ =====
setInterval(() => {
    clicks += auto * power * multiplier;
    updateUI();
}, 1000);

// стартовое обновление
updateUI();
