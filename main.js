document.getElementById('palindromo').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('frase').value;
    const fraseLimpia = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const esPalindromo = verificarPalindromo(fraseLimpia);

    if (esPalindromo) {
        alert(`${input} es un palíndromo.`);
    } else {
        alert(`${input} no es un palíndromo.`);
    }
});

const verificarPalindromo = (frase) => {
    const longitud = frase.length;

    for (let i = 0; i < longitud / 2; i++) {
        if (frase[i] !== frase[longitud - 1 - i]) {
            return false;
        }
    }
    return true;
}
