function calcular_media() {
    // Declaração de variáveis
    var nota1, nota2, nota3, nota4, media;

    // Entrada de dados
    // nota1 = document.getElementById("nota1").value
    nota1 = Number($("#nota1").val());
    nota2 = Number($("#nota2").val());
    nota3 = Number($("#nota3").val());
    nota4 = Number($("#nota4").val());


    // Processamento de Dados
    media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Saída de Dados
    //document.getElementsByClassName("form-notas").style.display = "none";

    $(".form-notas").addClass("d-none");
    $(".show-result").removeClass("d-none");
    $(".result-value").html(parseInt(media));

    if(media >= 7)
    {
        //Verdadeiro
        $(".description-result").html(`Parabens a sua nota é: ${media}`);
    }
    else
    {
        //Falso
        $(".description-result").html("Voce precisa melhorar");
        $(".description-result").addClass("text-warning");
    }

    console.log("Média é igual a "+media);
    //alert("Média é igual a "+media);
}

function voltar(){
    $("input").val("");

    $(".form-notas").removeClass("d-none");
    $(".show-result").addClass("d-none");
    $(".result-value").htm("...");
}