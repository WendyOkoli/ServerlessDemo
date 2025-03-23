const apiUrl = "https://4t0ypwqb11.execute-api.us-east-1.amazonaws.com/prod";

document.getElementById("quoteBtn").addEventListener("click", async function() {
    let quoteElement = document.getElementById("quote");
    quoteElement.innerText = "Fetching a motivational message... ⏳";

    try {
        const response = await fetch(apiUrl);
        let data = await response.json(); 
        
        console.log("RAW API RESPONSE:", data); // 🔹 Log full API response

        // ✅ Parse `body` since it's a stringified JSON
        let parsedBody = JSON.parse(data.body);
        console.log("PARSED BODY:", parsedBody);

        if (!parsedBody.messages || !Array.isArray(parsedBody.messages) || parsedBody.messages.length === 0) {
            throw new Error("No messages found in API response.");
        }

        let randomIndex = Math.floor(Math.random() * parsedBody.messages.length);
        quoteElement.innerText = parsedBody.messages[randomIndex].message; // ✅ Fix this line

    } catch (error) {
        console.error("Error fetching data:", error);
        quoteElement.innerText = "No motivational messages found. Try again later! ❌";
    }
});
