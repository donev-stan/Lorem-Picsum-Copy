const htmlElements = {
    root: () => document.querySelector('#root'),
    navigation: () => document.querySelector('nav'),
    inputURL: () => document.querySelector('input.inputURL'),
    tryBtn: () => document.querySelector('.tryURL'),
    previewImg: () => document.querySelector('.preview-img')
};

export default htmlElements;