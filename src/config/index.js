import PrimeVue from 'primevue/config';

// Import the new theme
import 'primevue/resources/themes/aura-dark-green/theme.css'      
import 'primeicons/primeicons.css';                     // Icons


export default (app) => {
    app.use(PrimeVue);
}