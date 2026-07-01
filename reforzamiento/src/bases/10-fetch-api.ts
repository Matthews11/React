import type { GphyRandomResponse } from '../data/giphy.response';

const API_KEY = 'jJRD0KQsB7llB34UyJjkoo4NJqKgNI3a';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);


const createImageInsideDOM = (url:string)=>{

    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);

    console.log(url);
};


request.then((response) => response.json())
    .then(({ data }: GphyRandomResponse) => {

        const imgUrl = data.images.original.url;

        createImageInsideDOM(imgUrl);
    })
    .catch((err) => {
        console.log(err);
    });