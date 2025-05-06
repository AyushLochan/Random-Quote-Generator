const quotes = [
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    author: "A.P.J. Abdul Kalam"
  },
  {
    text: "Arise, awake, and stop not till the goal is reached.",
    author: "Swami Vivekananda"
  },
  {
    text: "In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
    author: "A.P.J. Abdul Kalam"
  },
  {
    text: "Take up one idea. Make that one idea your life – think of it, dream of it, live on that idea.",
    author: "Swami Vivekananda"
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    text: "Service to man is service to God.",
    author: "Chaitanya Mahaprabhu"
  },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi"
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteObj = quotes[randomIndex];

  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  quoteEl.classList.remove("fade-in");
  authorEl.classList.remove("fade-in");

  void quoteEl.offsetWidth;

  quoteEl.textContent = `"${quoteObj.text}"`;
  authorEl.textContent = `— ${quoteObj.author}`;
  quoteEl.classList.add("fade-in");
  authorEl.classList.add("fade-in");
}
