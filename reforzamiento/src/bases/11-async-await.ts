import type { GphyRandomResponse } from '../data/giphy.response';

const API_KEY = 'jJRD0KQsB7llB34UyJjkoo4NJqKgNI3a';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);





const createImageInsideDOM = (url:string)=>{

    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);

    console.log(url);
};



const getRnadomGifUrl = async ()=>{
    
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

    const {data}:GphyRandomResponse = await response.json();

    return data.images.original.url;



}

 getRnadomGifUrl().then(url => createImageInsideDOM(url));