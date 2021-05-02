import htmlElements from './htmlElements.js';
import navigate from './router.js';
import {getImage} from './services.js';

(() => {
    htmlElements['navigation']().addEventListener('click', navigateHandler);
    
    const searchTemplate = Handlebars.compile(
        document.getElementById('search-template').innerHTML
    );
    Handlebars.registerPartial('search-template', searchTemplate);
        
    navigate('/random');
    
    function navigateHandler(e) {
        e.preventDefault();
        
        if (e.target.nodeName !== 'A') return;
        
        const url = new URL(e.target.href); 
        
        navigate(url.pathname);
    }

    htmlElements['tryBtn']().addEventListener('click', getImage);
    

})();