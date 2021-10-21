
let Nota1 = prompt("Digite sua nota entre 0 e 10: ");
let Nota2 = prompt("Digite sua nota entre 0 e 10: ");
let Nota3 = prompt("Digite sua nota entre 0 e 10: ");
let Nota4 = prompt("Digite sua nota entre 0 e 10: ");

if(Nota1 <0 || Nota1 >10 || Nota2 <0 || Nota2 >10 || Nota3 <0 || Nota3 >10 || Nota4 <0 || Nota4 >10){
    alert("Digite somente notas entre 0 e 10!");
}else{
    let Notas = Number(Nota1) + Number(Nota2) + Number(Nota3) + Number(Nota4);
    let media = `Sua média é: ${Notas /4}`;
    alert(media);

    if(media >= 5){
        alert("Parabens, você passou!");
    }else{
        alert("Você está reprovado!");
    }
}



