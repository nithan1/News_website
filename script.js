const api_key = "f1eeebff676a4071a82e80c680cf8166";
const url = "https://newsapi.org/v2/everything?q="; 

window.addEventListener("load",() => fetchNews("India"));

async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKey=${api_key}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles){
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";
    articles.forEach((articles) => {
        if(!articles.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        cardsContainer.appendChild(cardClone);
    });
}

