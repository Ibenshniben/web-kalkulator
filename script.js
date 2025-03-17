function calculateFactorial() {
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    
    resultDiv.className = 'result';
    
    const number = parseInt(numberInput.value);
    
    if (isNaN(number)) {
        resultDiv.textContent = 'Vennligst skriv inn et gyldig tall.';
        resultDiv.classList.add('error');
        return;
    }
    
    if (number < 0) {
        resultDiv.textContent = 'Fakultet er kun definert for positive tall og null.';
        resultDiv.classList.add('error');
        return;
    }
    
    if (number > 170) {
        resultDiv.textContent = 'Tallet er for stort for å beregne fakultet.';
        resultDiv.classList.add('error');
        return;
    }
    
    try {
        const result = factorial(number);
        resultDiv.textContent = `${number}! = ${result}`;
        resultDiv.classList.add('success');
    } catch (error) {
        resultDiv.textContent = 'En feil oppstod under beregningen.';
        resultDiv.classList.add('error');
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}