const Button = document.getElementById('button');
const nome = document.getElementById('nome');
const Altura = document.getElementById('altura');
const Peso = document.getElementById('peso');
const Resultado = document.getElementById('resultado');



const getText = (imc) => { 
    if (imc > 40) return ['Seu imc é Obesidade grau III', imc];
    if (imc > 35) return ['Seu imc é Obesidade grau II', imc];
    if (imc > 30) return ['Seu imc é Obesidade grau I', imc ]; 
    if (imc > 25) return ['Você esta levemente acima do peso', imc];
    if (imc >= 18.5) return ['Parabéns Peso ideal', imc];
    return ['Cuidado você está abaixo do peso',imc];
}

const ImcCalc = () =>{

    if(!nome.value || !Altura.value || !Peso.value) return Resultado.textContent = 'Preencha todos os campos'

    const valorImc = (+Peso.value / (+Altura.value * +Altura.value)).toFixed(1) ;
    console.log(valorImc)


   if(valorImc < 18.5 || (valorImc > 25 && valorImc < 30)) {
        Resultado.style.color = 'yellow';
        return Resultado.textContent = getText(valorImc)
    } else if(valorImc > 30) {
        Resultado.style.color = "red"
        return Resultado.textContent = getText(valorImc)
    } else {
        Resultado.style.color = "green"
        return Resultado.textContent = getText(valorImc);
    }

}

Button.addEventListener('click' , ImcCalc);