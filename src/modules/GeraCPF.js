import ValidaCPF from "./ValidaCPF";  // importa o padrão de ValidaCPF

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {  // gera um numero aleatorio de 9 dígitos
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +  // adiciona um ponto a cada 3 dígitos
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11) 
        );
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.rand();  // cpfSemDigitos armazena o número aleatorio de 9 digitos
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);  // usa o método importado do ValidaCPF que gera o digito 1 e 2
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        const novoCpf = cpfSemDigitos + digito1 + digito2;
        return this.formatado(novoCpf);  // retorna o cpf pronto
    }
}