let quotesArray = [
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    text2: "- Mark Twain",
    color: "#16a085",
  },
  {
    text: "I am not a product of my circumstances. I am a product of my decisions.",
    text2: "- Stephen Covey",
    color: "#27ae60",
  },
  {
    text: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    text2: "- Aristotle",
    color: "#2c3e50",
  },
  {
    text: "It's not the years in your life that count. It's the life in your years.",
    text2: "- Abraham Lincoln",
    color: "#f39c12",
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    text2: "- Mark Twain",
    color: "#e74c3c",
  },
  {
    text: "I attribute my success to this: I never gave or took any excuse.",
    text2: "- Florence Nightingale",
    color: "#9b59b6",
  },
  {
    text: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    text2: "- Abigail Van Buren",
    color: "#FB6964",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    text2: "- Wayne Gretzky",
    color: "#342224",
  },
  {
    text: "The person who says it cannot be done should not interrupt the person who is doing it.",
    text2: "- Chinese Proverb",
    color: "#472E32",
  },
  {
    text: "We become what we think about.",
    text2: "- Earl Nightingale",
    color: "#BDBB99",
  },
];
let buttonEle = document.getElementById("quotesbutton");
buttonEle.onclick = () => {
  let paragraphEle = document.getElementById("paragraph");

  let nameParaEle = document.getElementById("namePara");

  let textContainerEle = document.getElementById("textContainer");

  let quoteIconEle = document.getElementById("quoteIcon");

  let linkedinIconEle = document.getElementById("linkedinIcon");

  let twitterIconEle = document.getElementById("twitterIcon");

  let randomIndex = Math.ceil(Math.random() * 10);
  paragraphEle.textContent = quotesArray[randomIndex].text;

  nameParaEle.textContent = quotesArray[randomIndex].text2;

  paragraphEle.style.color = quotesArray[randomIndex].color;

  nameParaEle.style.color = quotesArray[randomIndex].color;

  quoteIconEle.style.color = quotesArray[randomIndex].color;

  linkedinIconEle.style.backgroundColor = quotesArray[randomIndex].color;

  twitterIconEle.style.backgroundColor = quotesArray[randomIndex].color;

  buttonEle.style.backgroundColor = quotesArray[randomIndex].color;
};
