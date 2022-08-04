window.onscroll = () => {
    const navbar = document.querySelector("#navbar");
    const fixed = navbar.offsetTop;
    if (window.pageYOffset > fixed) {
        navbar.classList.add("navbar");
        navbar.classList.remove("navbar-transparent");
    } else {
        navbar.classList.remove("navbar");
        navbar.classList.add("navbar-transparent");
    }
};

window.onload = () => {
    document.querySelector("#navigation") ? document.querySelector("#navigation").classList.remove("hidden") : '';
    getResult();
}

window.setInterval(
    (window.onload = function getQuote() {
        const loading = document.querySelector("#loading");
        const quotes = document.querySelector("#quote");
        loading.classList.toggle("hidden");
        quotes.classList.toggle("hidden");
        fetch("https://type.fit/api/quotes")
            .then((response) => response.json())
            .then((response) => {
                loading.classList.toggle("hidden");
                quotes.classList.toggle("hidden");
                quote = response[Math.floor(Math.random() * response.length)];
                document.getElementById("quoteText").innerHTML = `"${ quote.text }"`;
                document.getElementById("quoteAuthor").innerHTML = `&mdash; ${ quote.author } `;
            })
            .catch((response) => console.log(response));
    }),
    7000
);