

import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
   const searchElement = document.querySelector("search-bar");
   const AnimeListElement = document.querySelector("#animeList");
 
   const onButtonSearchClicked = async () => {
       try {
           const result = await DataSource.searchAnime(searchElement.value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
       AnimeListElement.innerHTML = "";
       results.forEach(Anime => {
           const { name, fanArt, description } = Anime;
           const AnimeElement = document.createElement("div");
           AnimeElement.setAttribute("class", "Anime");
 
           AnimeElement.innerHTML = `
               <img class="fan-art-Anime" src="${fanArt}" alt="Fan Art">
               <div class="Anime-info">
                   <h2>${name}</h2>
                   <p>${description}</p>
               </div>`;
 
           AnimeListElement.appendChild(AnimeElement);
       })
   };
 
   const fallbackResult = message => {
       AnimeListElement.innerHTML = "";
       AnimeListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   };
 
   searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;