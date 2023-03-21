const Button = document.getElementById('button');
const Nome = document.getElementById('nome');
const Altura = document.getElementById('altura');
const Peso = document.getElementById('peso');
const Resultado = document.getElementById('resultado');
const Resultado1 = document.getElementById('resultado1');
const Resultado2 = document.getElementById('resultado2');


const getText = (imc) => {
    if (imc > 40) return 'obesidade grau III';
    if (imc > 35) return 'obesidade grau II';
    if (imc > 30) return 'obesidade grau I';
    if (imc > 25) return 'levemente acima do peso';
    if (imc > 18.5) return 'Peso ideal';
    return 'abaixo do peso';
}

const ImcCalc = () =>{

    if(!Nome.value || !Altura.value || !Peso.value) return Resultado.textContent = 'Preencha todos os campos'

    const valorImc = (+Peso.value / (+Altura.value * +Altura.value)).toFixed(1) ;
    console.log(valorImc)


   if(valorImc < 18.5) return Resultado.textContent = getText(valorImc);
   if(valorImc > 25) return Resultado2.textContent = getText(valorImc);
   return Resultado1.textContent = getText(valorImc);
}

Button.addEventListener('click' , ImcCalc);