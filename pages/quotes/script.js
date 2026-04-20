let quotes = [
    "Tommorow suffers from today's laziness.",
    "You can't wait for certainty to start living, because by the time you are certain, the moment has passed.",
    "If you're too focused on reaching the end of the race, you'll miss a lot of opportunities and precious moments to be had along the way.",
    "There will always be those who dare to brave the lightning's glow.",
    "The enemy of my enemy is my friend.",
    "We buy things that we don't need, using money that we don't have, to impress people who don't care.",
    "There's no point worrying about stuff you have no control over. Just accept it and forge onward.",
    "We can't go back and make better choices, but at least we can do better in the future"
    ]


let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

let daySeedwYear = year * 10000 + month * 100 + day;
let daySeedwoYear = month * 100 + day;

function randomFromDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    let seed = year * 10000 + month * 100 + day;
    return seed;
}

function randomFromMonth() {
    let seed = month * 10000 + year;
    return seed;
}

function randomFromWeek() {
    let seed = month * 100 + day;
    return seed;
}

function pseudoRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

if (daySeedwYear == 20200101) {
    document.getElementById("quote-text").textContent = "Are you a time traveller?";
} else if (daySeedwoYear == 709) {
    document.getElementById("quote-text").textContent = "I had to find some way to pass the time, did I not?";
} else if (daySeedwoYear == 727) {
    document.getElementById("quote-text").textContent = "If you believe it, you can do it. Even getting 727pp on Blue Zenith.";
} else if (daySeedwoYear == 920) {
    document.getElementById("quote-text").textContent = "There's no point worrying about stuff you have no control over. Just accept it and forge onward.";
} else {
    let seed = randomFromDate();
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);

    document.getElementById("daily-quote").textContent = quotes[index];
}

function randomQuote() {
    let randomValue = Math.random();
    let index = Math.floor(randomValue * quotes.length);

    document.getElementById("random-quote").textContent = quotes[index];
}

randomQuote();

function doWeeklyQuote() {
    let seed = randomFromWeek();
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);
    document.getElementById("weekly-quote").textContent = quotes[index];
}

function doMonthlyQuote() {
    let seed = randomFromMonth();
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);
    document.getElementById("monthly-quote").textContent = quotes[index];
}

function doYearlyQuote() {
    let seed = year;
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);
    document.getElementById("yearly-quote").textContent = quotes[index];
}

function doDecadeQuote() {
    let seed = Math.floor(year / 10);
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);
    document.getElementById("decade-quote").textContent = quotes[index];
}

function doCenturyQuote() {
    let seed = Math.floor((year - 1) / 100) + 1;
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);
    document.getElementById("century-quote").textContent = quotes[index];
}

function doMilleniumQuote() {
    let seed = Math.floor((year - 1) / 1000) + 1;
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);
    document.getElementById("millenium-quote").textContent = quotes[index];
}

doWeeklyQuote();
doMonthlyQuote();
doYearlyQuote();
doDecadeQuote();
doCenturyQuote();
doMilleniumQuote();

// Quote of the Hour and Quote of the Minute
function doHourlyQuote() {
    // Use year and hour as a seed so it changes each hour
    let now = new Date();
    let seed = now.getFullYear() * 100 + (now.getHours() + 1); // +1 to reduce collisions with year-only
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);
    const el = document.getElementById("hourly-quote");
    if (el) el.textContent = quotes[index];
}

function doMinuteQuote() {
    // Use year, month, day, hour, minute as seed so it changes every minute
    let now = new Date();
    let seed = now.getFullYear() * 1000000 + (now.getMonth() + 1) * 10000 + now.getDate() * 100 + now.getHours() * 10 + now.getMinutes();
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);
    const el = document.getElementById("minute-quote");
    if (el) el.textContent = quotes[index];
}

// Helper to align intervals to the next boundary, then set repeating interval
function scheduleAlignedInterval(callback, intervalMs, getDelayMs) {
    // getDelayMs() should return ms until next boundary
    const delay = getDelayMs();
    // run after initial delay, then every intervalMs
    setTimeout(() => {
        try { callback(); } catch (e) { console.error(e); }
        setInterval(() => {
            try { callback(); } catch (e) { console.error(e); }
        }, intervalMs);
    }, delay);
}

// Run immediately, then schedule aligned updates
doHourlyQuote();
doMinuteQuote();

// Quote of the Second and Millisecond
function doSecondQuote() {
    let now = new Date();
    // seed includes year, month, day, hour, minute, second
    let seed = now.getFullYear() * 100000000 + (now.getMonth() + 1) * 1000000 + now.getDate() * 10000 + now.getHours() * 100 + now.getMinutes() * 10 + now.getSeconds();
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);
    const el = document.getElementById("second-quote");
    if (el) el.textContent = quotes[index];
}

function doMillisecondQuote() {
    // Use high resolution timestamp to vary per millisecond
    let now = new Date();
    let ms = now.getMilliseconds();
    // seed with second + millisecond + other date parts to reduce collisions
    let seed = now.getFullYear() * 10000000000 + (now.getMonth() + 1) * 100000000 + now.getDate() * 1000000 + now.getHours() * 10000 + now.getMinutes() * 100 + now.getSeconds() * 10 + ms;
    let randomValue = pseudoRandom(seed);
    let index = Math.floor(randomValue * quotes.length);
    const el = document.getElementById("millisecond-quote");
    if (el) el.textContent = quotes[index];
}

// Align and schedule second updates
doSecondQuote();
scheduleAlignedInterval(doSecondQuote, 1000, () => {
    const now = new Date();
    return 1000 - (now.getMilliseconds());
});

// Millisecond updates: run immediately and then use a tight interval.
// Note: browsers may throttle very short intervals when inactive.
doMillisecondQuote();
// use setInterval at 1ms; alignment to exact ms is best-effort in JS
setInterval(() => {
    try { doMillisecondQuote(); } catch (e) { console.error(e); }
}, 1);

// Schedule minute: align to start of next minute
scheduleAlignedInterval(doMinuteQuote, 60 * 1000, () => {
    const now = new Date();
    return 60 * 1000 - (now.getSeconds() * 1000 + now.getMilliseconds());
});

// Schedule hour: align to start of next hour
scheduleAlignedInterval(doHourlyQuote, 60 * 60 * 1000, () => {
    const now = new Date();
    return (60 * 60 * 1000) - (now.getMinutes() * 60 * 1000 + now.getSeconds() * 1000 + now.getMilliseconds());
});
