const frm = document.getElementById('form');
const resp1 = document.getElementById('resp1');
const resp2 = document.getElementById('resp2');
const resp3 = document.getElementById('resp3');

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const saque = Number(frm.saque.value);
    if (saque % 10 !== 0) {
        alert("Valor Inválido para as notas disponíveis (R$ 10, 50, 100");
        return;
    }

    let notas100 = Math.floor(saque / 100); // quantidade de notas a usar
    let resto = saque % 100; // o que resta = 70

    let notas50 = Math.floor(resto / 50); // 1
    resto = resto % 50; // 20

    let notas10 = Math.floor(resto / 10);

    // Exibe a quantidade de notas
    resp1.textContent = `Notas de 100: ${notas100}`;
    resp2.textContent = `Notas de 50: ${notas50}`;
    resp3.textContent = `Notas de 10: ${notas10}`;
})

    