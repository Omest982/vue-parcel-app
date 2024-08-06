import PrimeVue from 'primevue/config';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'primevue/resources/themes/aura-light-indigo/theme.css'  // Theme 
import 'primevue/resources/primevue.min.css'; // Core PrimeVue CSS
import 'primeicons/primeicons.css'; // PrimeIcons


export default (app) => {
    app.use(PrimeVue);
}