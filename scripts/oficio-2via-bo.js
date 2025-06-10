function gerarTermo() {
    let nomedp = document.getElementById("idnomedp").value;
    let numerobo = document.getElementById("idnumerobo").value;
    let falecido = document.getElementById("idfalecido").value;
    let datafalecimento = document.getElementById("iddatafalecimento").value;
    let localfalecimento = document.getElementById("idlocalfalecimento").value;
    let escrevente = document.getElementById("idescrevente").value;
  
    // Preencha os campos de visualização
    document.getElementById("preview-nomedp").textContent = nomedp;
    document.getElementById("preview-numerobo").textContent = numerobo;
    document.getElementById("preview-falecido").textContent = falecido;
    document.getElementById("preview-datafalecimento").textContent = datafalecimento;
    document.getElementById("preview-localfalecimento").textContent = localfalecimento;
    document.getElementById("preview-sign").textContent = escrevente;
    
  
    // Exiba a área de visualização
    document.getElementById("print-preview").style.display = "block";
    document.getElementsByClassName("previous-icon-container")[0].style.display= "none"
    document.getElementById("formulario").style.display = "none"

    let dataAtual = new Date();
    let dia = dataAtual.getDate();

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const currentMonth = months[dataAtual.getMonth()];

    let ano = dataAtual.getFullYear();

    let diasp = document.getElementById("preview-date");
    diasp.textContent = "São Paulo, "+ dia +" de "+ currentMonth +" de "+ ano;

    window.print();

    document.getElementById("print-preview").style.display = "none";
    document.getElementById("formulario").style.display = "flex"
    document.getElementsByClassName("previous-icon-container")[0].style.display= "flex"

    nomedp = document.getElementById("preview-nomedp").textContent
    numerobo = document.getElementById("preview-numerobo").textContent
    falecido = document.getElementById("preview-falecido").textContent
    datafalecimento = document.getElementById("preview-datafalecimento").textContent
    localfalecimento = document.getElementById("preview-localfalecimento").textContent
    escrevente = document.getElementById("preview-escrevente").textContent
}