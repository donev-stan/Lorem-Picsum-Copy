import htmlElements from './htmlElements.js';

const baseURL = `https://picsum.photos/`;

export function getImage(e){
    let input = htmlElements['inputURL']().value;
    let resultIMG = htmlElements['previewImg']();

    resultIMG.src = `${baseURL}${input}`;

    console.log(input);
}