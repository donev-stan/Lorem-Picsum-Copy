import htmlElements from "./htmlElements.js";

const routes = {
    'random': 'random-img-template',
    'specific': 'specific-img-template',
    'details': 'details-img-template',
    'static': 'static-img-template',
    'grayscale': 'grayscale-img-template',
    'blur': 'blur-img-template',
    'list': 'list-img-template'
};

const router = (path) => {
    const root = htmlElements['root']();

    const template = Handlebars.compile(
        document.getElementById(routes[path]).innerHTML
    );

    root.innerHTML = template();

};

export default router;