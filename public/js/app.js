const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');

let searchedForText;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();
});

function getNews() {
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=e8aa2d61cef143c8a551e9a6075d9b18`)
    .then((response)=>{
      return response.json();
    })
    .then((recurso)=>{
      addNews(recurso.response.docs);
    // addNews(JSON.parse(recurso));
    });
}

function addNews(recurso) {
  // parseamos el JSON
  var data = recurso;
  // const response = data.response;
  console.log(data);
  const article = data[0];
  const title = article.headline.main;
  const snippet = article.snippet;
  // console.log(response);
  let li = document.createElement('li');
  $(li).css({'border':'1px solid skyblue'});
  li.className = 'articleClass';
  li.innerText = snippet;

  responseContainer.appendChild(li);
};
