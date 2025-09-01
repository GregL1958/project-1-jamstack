const axios = require('axios');

module.exports = async function(){
    try {
        response = await axios.get('http://api.imgflip.com/get_memes');

        console.log(response.data.data);
        return response.data.data;
    
    } catch(error){
        console.error(error);
    }




}


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