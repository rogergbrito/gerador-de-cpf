import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function() {  // função auto executável, basta colocar entre parênteses e chamar os parênteses de novo no final
    const gera = new GeraCPF(); 
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();

// teste