const BASE_URL = 'https://13.design.htmlacademy.pro/wtw/films';

export async function getFilteredFilms() {
    const endpoint = `${BASE_URL}`;
    return await fetch(endpoint)
        .then(response => response.json())
        .catch(err => console.log(err));
}

export async function getFilmById(filmId) {
    const endpoint = `${BASE_URL}/${filmId}`;
    return await fetch(endpoint)
        .then(response => response.json())
        .catch(err => console.log(err));
}

export async function getSimilarFilms(filmId) {
    const endpoint = new URL(`${BASE_URL}/${filmId}/similar`);
    return await fetch(endpoint)
        .then(response => response.json())
        .catch(err => console.log(err));
}