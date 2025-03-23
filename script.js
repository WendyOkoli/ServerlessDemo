const apiUrl = "https://4t0ypwqb11.execute-api.us-east-1.amazonaws.com/prod";

document.getElementById("quoteBtn").addEventListener("click", async function() {
    let quoteElement = document.getElementById("quote");
    quoteElement.innerText = "Fetching a motivational message... ⏳";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.messages && Array.isArray(data.messages) && data.messages.length > 0) {
            // Pick a random quote from the API response
            let randomIndex = Math.floor(Math.random() * data.messages.length);
            quoteElement.innerText = data.messages[randomIndex].message;
        } else {
            throw new Error("No messages found in API response.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        quoteElement.innerText = "No motivational messages found. Try again later! ❌";
    }
});
