let n1 = parseFloat(prompt("Digite a primeira nota: ") || 0);
let n2 = parseFloat(prompt("Digite a segunda nota: ") || 0);
let n3 = parseFloat(prompt("Digite a terceira nota: ") || 0);
let n4 = parseFloat(prompt("Digite a quarta nota: ") || 0);
if (
    n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0 ||
    n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10
) {
    alert("Digite somente números entre 0 e 10.");
} else {
    const media = (n1 + n2 + n3 + n4) / 4;
    let resultado;
    if (media < 5) {
        resultado = "Reprovado";
    } else if (media >= 6) {
        resultado = "Aprovado";
    } else {
        resultado = "Em recuperação."
    }
    const msg = `Você ficou com média ${media.toFixed(1)}. Resultado: ${resultado}`;
    alert(msg);
}