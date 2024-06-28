function gerarTermo() {
    let nome = document.getElementById("idnome").value;
    let cpf = document.getElementById("idcpf").value;
    let marca = document.getElementById("idmarca").value;
    let modelo = document.getElementById("idmodelo").value;
    let placa = document.getElementById("idplaca").value;
    let renavam = document.getElementById("idrenavam").value;


    // Exiba a área de visualização
    document.getElementById("preview-nome").textContent = nome;
    document.getElementById("preview-sign").textContent = nome;
    document.getElementById("preview-cpf").textContent = cpf;
    document.getElementById("preview-marca").textContent = marca;
    document.getElementById("preview-modelo").textContent = modelo;
    document.getElementById("preview-placa").textContent = placa;
    document.getElementById("preview-renavam").textContent = renavam;

    document.getElementById("print-preview").style.display = "block";

    document.getElementById("formulario").style.display = "none"
        document.getElementsByClassName("previous-icon-container")[0].style.display= "none"

    let dataAtual = new Date();
    let dia = dataAtual.getDate();

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const currentMonth = months[dataAtual.getMonth()];

    let ano = dataAtual.getFullYear();

    let diasp = document.getElementById("preview-date");
    diasp.textContent = "São Paulo, " + dia + " de " + currentMonth + " de " + ano;

    // Chame a função de impressão do navegador
    window.print();

    document.getElementById("print-preview").style.display = "none";
    document.getElementById("formulario").style.display = "flex"
        document.getElementsByClassName("previous-icon-container")[0].style.display= "flex"

    nome = document.getElementById("preview-nome").textContent
    rg = document.getElementById("preview-rg").textContent
    cpf = document.getElementById("preview-cpf").textContent
    marca = document.getElementById("preview-marca").textContent
    modelo = document.getElementById("preview-modelo").textContent
    placa = document.getElementById("preview-placa").textContent
    renavam = document.getElementById("preview-renavam").textContent
}