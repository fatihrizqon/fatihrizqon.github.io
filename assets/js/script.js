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

// Enable CORS globally for any host
var corsAttr = new EnableCorsAttribute("*", "*", "*");
config.EnableCors(corsAttr);

window.setInterval(
  (window.onload = function getQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://zenquotes.io/api/random", true);

    xhr.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        var quote = JSON.parse(this.responseText);
        document.getElementById("quote").innerHTML = quote[0].h;
      }
    };

    xhr.send();
  }),
  6000
);
