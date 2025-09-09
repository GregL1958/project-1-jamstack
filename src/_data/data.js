const axios = require('axios');

module.exports = async function () {

    let movieData = {
        actionMovies: [],
        adventureMovies: [],
        comedyMovies: [],
    }


    try {
        const actionMovies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=efc45ac4ca834f6e368d9b46c218a605&language=en-US=false&include_video=false&language=en-US&page=1&with_genres=28&sort_by=popularity.desc');
        for (let i = 0; i < actionMovies.data.results.length; i++) {
            let tempMovieObj = {
                title: actionMovies.data.results[i].title,
                poster_path: actionMovies.data.results[i].poster_path,
            }
            movieData.actionMovies.push(tempMovieObj);

        }

        const adventureMovies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=efc45ac4ca834f6e368d9b46c218a605&language=en-US=false&include_video=false&language=en-US&page=1&with_genres=12&sort_by=popularity.desc');
        for (let i = 0; i < adventureMovies.data.results.length; i++) {
            let tempMovieObj = {
                title: adventureMovies.data.results[i].title,
                poster_path: adventureMovies.data.results[i].poster_path,
            }
            movieData.adventureMovies.push(tempMovieObj);

        }

        const comedyMovies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=efc45ac4ca834f6e368d9b46c218a605&language=en-US=false&include_video=false&language=en-US&page=1&with_genres=35&sort_by=popularity.desc');
        for (let i = 0; i < comedyMovies.data.results.length; i++) {
            let tempMovieObj = {
                title: comedyMovies.data.results[i].title,
                poster_path: comedyMovies.data.results[i].poster_path,
            }
            movieData.comedyMovies.push(tempMovieObj);

        }

        console.log(movieData);
        return movieData;

    } catch (error) {
        console.error(error);
    }
}














/*import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/authentication',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTNkMGE1ZTU4ZDg1NjYwNTFkM2JmZTA2ZDU4MDIzMiIsIm5iZiI6MTc1NjkyODgzMi4yODksInN1YiI6IjY4Yjg5YjQwNWUwZDQ3YjA3NThjZGE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.31DtPn_eh-wTfjeXyx2BSfqqIN4r3-bYgzx6837J0WU'
    }
};

axios
    .request(options)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));

const axios = require('axios');

module.exports = async function(){

    let movieData = {
        actionMovies: [],
        adventureMovies: [],
        comedyMovies: [],
    }


    try {
        const actionMovies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=efc45ac4ca834f6e368d9b46c218a605&language=en-US=false&include_video=false&language=en-US&page=1&with_genres=28&sort_by=popularity.desc');
        //console.log(actionMovies.data.results[0]);
        //movieData.actionMovies = actionMovies.data.results;

        for (let i =0; i <actionMovies.data.results.length; i++){
            console.log(actionMovies.data.results[i].title);
            console.log(actionMovies.data.results[i].poster_path);
            let tempMovieObj = {
                title: actionMovies.data.results[i].title,
                poster_path: actionMovies.data.results[i].poster_path,
            }
            movieData.actionMovies.push(tempMovieObj);

        }

        const adventureMovies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=efc45ac4ca834f6e368d9b46c218a605&language=en-US=false&include_video=false&language=en-US&page=1&with_genres=12&sort_by=popularity.desc');
       // console.log(adventureMovies.data.results[0]);
       // movieData.adventureMovies = adventureMovies.data.results;

        const comedyMovies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=efc45ac4ca834f6e368d9b46c218a605&language=en-US=false&include_video=false&language=en-US&page=1&with_genres=35&sort_by=popularity.desc');
        //console.log(comedyMovies.data.results[0]);
        //movieData.comedyMovies = comedyMovies.data.results;

        //console.log(movieData);
        return comedyMovies.data.results;
    
    } catch(error){ 
        console.error(error);
    } 
}

    import axios from 'axios';

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/configuration',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTNkMGE1ZTU4ZDg1NjYwNTFkM2JmZTA2ZDU4MDIzMiIsIm5iZiI6MTc1NjkyODgzMi4yODksInN1YiI6IjY4Yjg5YjQwNWUwZDQ3YjA3NThjZGE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.31DtPn_eh-wTfjeXyx2BSfqqIN4r3-bYgzx6837J0WU'
        }
    };

    axios
        .request(options)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));






{
    "memes": [
        {"url": "https://i.imgflip.com/30b1gx.jpg"},
        {"url": "https://i.imgflip.com/1g8my4.jpg"},
        {"url": "https://i.imgflip.com/1ur9b0.jpg"},
        {"url": "https://i.imgflip.com/3oevdk.jpg"},
        {"url": "https://i.imgflip.com/22bdq6.jpg"}
    ]

}
*/    