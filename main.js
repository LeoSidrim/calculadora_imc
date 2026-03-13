function calcularImc() {
    const altura = Number(document.getElementById('altura').value); // Valores de Altura e peso
    const peso = Number(document.getElementById('peso').value);

    const imc = peso /(altura ** 2);
    const elemento = document.getElementById('resultadoValue').textContent = imc.toFixed(2);

    const text = document.getElementById('textValue'); // Endereços do output e p
    const textBox = document.getElementById('textValue');
    // Usei const pois a referência não muda

    if (imc < 18.5){
        text.textContent = 'Baixo peso';
        textBox.style.color = 'white';
        textBox.style.backgroundColor = '#3DC3E1';

    } else if (imc >= 18.6 && imc <24.9){
        text.textContent = 'Peso normal';
        textBox.style.color = 'white';
        textBox.style.backgroundColor = '#64C7CC';
    } else if (imc >= 25 && imc < 29.9){
        text.textContent = 'Sobrepeso';
        textBox.style.color = 'white';
        textBox.style.backgroundColor = '#E5C634';
    } else if (imc >= 30 && imc < 34.9){
        text.textContent = 'Obesidade 1';
        textBox.style.color = 'white';
        textBox.style.backgroundColor = '#F5933E';
    } else if (imc >=35 && imc < 39.9){
        text.textContent = 'Obesidade 2';
        textBox.style.color = 'white';
        textBox.style.backgroundColor = '#EF5A34';
    } else {
        text.textContent = 'Obesidade 3';
        textBox.style.color = 'white';
        textBox.style.backgroundColor = 'red';
    }
}
const botao = document.getElementById('mybtn');

botao.addEventListener('click',calcularImc) // Fica escutando o botão para executar função
