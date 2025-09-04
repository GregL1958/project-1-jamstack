/* const axios = require('axios');

module.exports = async function(){
    try {
        response = await axios.get('https://api.themoviedb.org/3/configuration');


        console.log(response.data.data);
        return response.data.data;
    
    } catch(error){
        console.error(error);
    }
*/
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


//}


/*
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