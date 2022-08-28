const API_KEY = "e2f19e7a53926bd1e00596b678b03d80";
const BASE_URL = "https://api.themoviedb.org/3";
export function getMovies() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
