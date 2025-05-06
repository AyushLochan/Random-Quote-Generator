const quotes = [
    "Believe in yourself and all that you are.",
    "The best time to start was yesterday. The next best time is now.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not in what you have, but who you are.",
    "You are capable of amazing things.",
    "Doubt kills more dreams than failure ever will.",
    "Your only limit is your mind.",
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }
  