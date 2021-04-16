import htmlElements from './htmlElements.js';
import router from './router.js';

(() => {
    htmlElements['navigation']().addEventListener('click', navigateHandler);
    
    function navigateHandler(e) {
        e.preventDefault();

        if (e.target.nodeName !== 'A') return;

        const url = new URL(e.target.href); 
        
        history.pushState({}, '', url);

        router(url.pathname.slice(1));
    }
})();