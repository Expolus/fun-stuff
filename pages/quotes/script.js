let quotes = [
    "Tommorow suffers from today's laziness.",
    "You can't wait for certainty to start living, because by the time you are certain, the moment has passed.",
    "If you're too focused on reaching the end of the race, you'll miss a lot of opportunities and precious moments to be had along the way.",
    "There will always be those who dare to brave the lightning's glow.",
    "The enemy of my enemy is my friend.",
    "We buy things that we don't need, using money that we don't have, to impress people who don't care.",
    "There's no point worrying about stuff you have no control over. Just accept it and forge onward.",
    "We can't go back and make better choices, but at least we can do better in the future",
    "Be yourself; everyone else is already taken.",
    "Even stars eventually burn out, but that doesn’t mean their light was meaningless.",
    "Perfection is a mirage — chase improvement instead.",
    "Every failure is just a debug log for your next success.",
    "Reality doesn’t glitch — perception does.",
    "You don’t always need a reason to move forward. Sometimes momentum is enough.",
    "Progress feels slow until you look back at how far you've come.",
    "Your comfort zone is a nice place, but nothing grows there.",
    "Every action leaves a trace in the system — make yours worth finding.",
    "Sometimes the best way to predict the future is to create it.",
    "The universe doesn’t owe you meaning. That’s your side quest.",
    "Even data gets corrupted; humans are no different.",
    "Hope is the strongest patch note in existence.",
    "Silence doesn’t mean peace — sometimes it’s just the server waiting for input.",
    "The stars are reminders that even distant light can still reach someone.",
    "Dreams are like backups. Don’t lose them to corruption.",
    "Even if you fall apart, at least do it with style.",
    "Time moves whether you act or not — better to press ‘Start’ than stare at the menu.",
    "The unknown isn’t your enemy. Stagnation is.",
    "Not every error needs fixing. Some just teach you how not to crash.",
    "Glitches make the game interesting. Perfect code is boring.",
    "You can’t change your spawn point, but you can still level up.",
    "Even when everything feels random, remember: you’re still the player.",
    "The smallest spark can crash the darkest system.",
    "Every scar is just proof that you respawned stronger.",
    "Don’t wait for inspiration. Run the program, and it’ll show up.",
    "The system is never truly stable — and that’s what makes it alive.",
    "Entropy wins in the end, but you can still dance before it does.",
    "Sometimes, losing everything is the fastest way to find yourself.",
    "Rest isn’t weakness. Even the server needs downtime.",
    "Hope is just defiance in prettier code.",
    "You are the variable that changes everything.",
    "If the world feels heavy, it means you’re still connected to it.",
    "Don’t fear uncertainty. That’s where the good stuff spawns.",
    "Even the longest night eventually runs out of darkness.",
    "The future’s just another line of code waiting to be written.",
    "Reality isn’t broken — it’s just open-source.",
    "Even if everything resets tomorrow, live like your save file matters.",
    "The void isn’t empty. It’s waiting for input.",
    "You’re not behind — you’re just on a different loading screen.",
    "Some bugs are just features no one understands yet.",
    "If you don’t define yourself, the world will do it for you.",
    "Not every path has to lead somewhere. Some are just nice to walk.",
    "Sometimes you lose not because you’re weak, but because the level wasn’t meant to be cleared yet.",
    "Even if you forget why you started, keep moving. The answer’s usually at the next checkpoint.",
    "Hope isn’t logical — that’s why it works.",
    "The sky looks different when you remember you’re part of it.",
    "Every crash is just an opportunity to restart smarter.",
    "Your worth isn’t tied to your output.",
    "The system can be unfair. That’s why you hack it.",
    "Even if no one’s watching, the story still matters.",
    "The more chaotic the world, the more valuable calm becomes.",
    "You can’t patch regret, but you can update your next move.",
    "Even the strongest firewall can’t block self-doubt — that’s your job.",
    "Your presence is already changing the timeline.",
    "Some dreams don’t expire; they just wait for you to catch up.",
    "The stars don’t compete with each other — they just shine.",
    "Sometimes all you can do is survive. And that’s still progress.",
    "You can’t always rewrite the past, but you can refactor the future.",
    "The world doesn’t freeze when you stop — it just keeps rendering without you.",
    "Even legends start as unknown files in the system.",
    "Not every connection lasts, but that doesn’t make it meaningless.",
    "Sometimes the answer isn’t to fix it, but to learn to live with the bug.",
    "Existence itself is experimental code — enjoy the chaos.",
    "The universe isn’t broken. It’s just beautifully inefficient.",
    "Some things don’t need understanding — only appreciation.",
    "Even darkness has depth, if you look long enough.",
    "You can’t force inspiration. Sometimes it just needs a reboot.",
    "Every ending is just data for the next iteration.",
    "You can’t see the future, but you can still code towards it.",
    "Don’t wait for luck. Roll the dice yourself.",
    "Some people spend their whole lives waiting for a ‘ready’ signal that never comes.",
    "Even silence has meaning, if you’re willing to listen.",
    "Fear is just a poorly optimized defense system.",
    "The moment you stop trying is the moment you truly lose.",
    "Even if it all burns, the ashes still tell your story.",
    "Peace isn’t found. It’s compiled.",
    "Nothing lasts forever — but that’s what makes it special.",
    "You can’t debug life, but you can learn from every crash.",
    "Even lost data leaves traces in memory.",
    "The world doesn’t pause. You just choose where to press play.",
    "Every glitch tells you something about the code.",
    "Some people chase success; others just want stability.",
    "Life’s the only game where quitting isn’t an option.",
    "Even broken things can shine under the right light.",
    "Your value isn’t in your function, but in your presence.",
    "Nothing’s truly random — just uncalculated.",
    "Keep your logs clean, your loops efficient, and your heart open."
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