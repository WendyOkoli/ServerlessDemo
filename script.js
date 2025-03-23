const quotes = [
    "Believe in yourself and all that you are! 💪",
    "Every day is a fresh start. 🌟",
    "You are stronger than you think! 💖",
    "The best way to predict the future is to create it. 🚀",
    "Doubt kills more dreams than failure ever will. 🔥",
    "Great things take time. Keep going! ⏳",
    "You got this! Don't stop believing. ✨"
];

document.getElementById("quoteBtn").addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
});
