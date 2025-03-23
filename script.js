const quotes = [
    "Believe in yourself and all that you are! 💪",
    "Every day is a fresh start. 🌟",
    "You are stronger than you think! 💖",
    "The best way to predict the future is to create it. 🚀",
    "Doubt kills more dreams than failure ever will. 🔥",
    "Great things take time. Keep going! ⏳",
    "You got this! Don't stop believing. ✨"
];

const apiUrl = "https://4t0ypwqb11.execute-api.us-east-1.amazonaws.com/prod";

document.getElementById("quoteBtn").addEventListener("click", async function() {
    let quoteElement = document.getElementById("quote");
    quoteElement.innerText = "Fetching a motivational message... ⏳";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.messages && data.messages.length > 0) {
            // Merge API messages with local quotes
            const allQuotes = [...quotes, ...data.messages.map(item => item.message)];

            // Pick a random quote
            let randomIndex = Math.floor(Math.random() * allQuotes.length);
            quoteElement.innerText = allQuotes[randomIndex];
        } else {
            throw new Error("No messages found in API response.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        
        // Fallback to a random local quote
        let randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.innerText = quotes[randomIndex];
    }
});
