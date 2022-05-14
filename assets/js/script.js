/* Navbar Controls */
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixed = header.offsetTop;

  if (window.pageYOffset > fixed) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const navigation = document.querySelector("#navigation");

hamburger.addEventListener("click", function () {
  hamburger.classList.add("hidden");
  navigation.classList.remove("hidden");
  close.classList.remove("hidden");
});

close.addEventListener("click", function () {
  hamburger.classList.remove("hidden");
  navigation.classList.add("hidden");
  close.classList.add("hidden");
});
/* End Navbar Controls */

window.setInterval(
  (window.onload = function getQuote() {
    document.getElementById("loading").classList.toggle("hidden");
    document.getElementById("quote").classList.toggle("hidden");
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((response) => {
        document.getElementById("loading").classList.toggle("hidden");
        document.getElementById("quote").classList.toggle("hidden");
        quote = response[Math.floor(Math.random() * response.length)];
        document.getElementById("quoteText").innerHTML = `"${quote.text}"`;
        document.getElementById("quoteAuthor").innerHTML = `&mdash; ${quote.author} `;
      })
      .catch((response) => console.log(response));
  }),
  7000
);
