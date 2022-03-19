import animes from './animes.js';
class DataSource{
    static searchAnime(keyword){
        return new Promise((resolve, reject) => {
        const filteredAnimes = animes.filter(anime => anime.name.toUpperCase().includes(keyword.toUpperCase()));
        
        if(filteredAnimes.length){
            resolve(filteredAnimes);
        }else{
            reject(`${keyword} not found`);
        }
    });
}
}

export default DataSource;
