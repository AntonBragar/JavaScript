"use strict";

let filmsCounter;

function counterOfFilms() {
    filmsCounter = +prompt('How many films did you watch?', '');

    while (filmsCounter == '' || filmsCounter == null || isNaN(filmsCounter)) {
        filmsCounter = +prompt('How many films did you watch?', '');
    }
}

counterOfFilms();


const movieDB = {
    count: filmsCounter,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function lastFilmsWatched() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            movieDB.movies[a] = b;
            console.log('Film Added');
        } else {
            console.log('Error');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (movieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (movieDB.count >= 10 && movieDB.count < 30) {
        console.log('Вы стандартный зритель');
    } else if (movieDB.count >= 30) {
        console.log('Вы - киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

function favoriteGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр фильма под номером ${i}`);
        movieDB.genres[i - 1] = genre;
    }
}

function showMyDB() {
    if (movieDB.private == false) {
        console.log(movieDB);
    }
}

lastFilmsWatched();
detectPersonalLevel();
favoriteGenres();
showMyDB();