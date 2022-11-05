const apikey ="5f24c10f733710f565234418e17d6bb4";

const request ={
    Trending:`/trending/all/day?api_key=${apikey}`,
    netflixOriginal:`/discover/tv?api_key=${apikey}&language=en-US&with_networks=213`,
    topRated:`/movie/top_rated?api_key=${apikey}&language=en-US`,
    actionMovie:`/discover/movie?api_key=${apikey}&with_genres=28`,
    comedyMovie:`/discover/movie?api_key=${apikey}&with_genres=35`,
    horrorMovie:`/discover/movie?api_key=${apikey}&with_genres=27`,
    romanceMovie:`/discover/movie?api_key=${apikey}&with_genres=10749`,
    documentaries:`/discover/movie?api_key=${apikey}&with_genres=99`
}
export default request;