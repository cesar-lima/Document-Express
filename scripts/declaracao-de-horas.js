function gerarTermo() {
    let nome = document.getElementById("idnome").value;
    let rg = document.getElementById("idrg").value;
    let cpf = document.getElementById("idcpf").value;
    let horainicial = document.getElementById("idhorainicial").value;
    let horafinal = document.getElementById("idhorafinal").value;
    let setor = document.getElementById("idsetor").value;
    let escrevente = document.getElementById("idescrevente").value;
  
    // Preencha os campos de visualização
    document.getElementById("preview-nome").textContent = nome;
    document.getElementById("preview-rg").textContent = rg;
    document.getElementById("preview-cpf").textContent = cpf;
    document.getElementById("preview-horainicial").textContent = horainicial;
    document.getElementById("preview-horafinal").textContent = horafinal;
    document.getElementById("preview-setor").textContent = setor;
    document.getElementById("preview-escrevente").textContent = escrevente;
    
  
    // Exiba a área de visualização
    document.getElementById("print-preview").style.display = "block";
    
    document.getElementById("formulario").style.display = "none"

    let dataAtual = new Date();
    let dia = dataAtual.getDate();

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const currentMonth = months[dataAtual.getMonth()];

    let ano = dataAtual.getFullYear();

    let diasp = document.getElementById("preview-date");
    diasp.textContent = "São Paulo, "+ dia +" de "+ currentMonth +" de "+ ano;

    // Chame a função de impressão do navegador
    window.print();

    document.getElementById("formulario").style.display = "flex"

    nome = document.getElementById("preview-nome").textContent
    rg = document.getElementById("preview-rg").textContent
    cpf = document.getElementById("preview-cpf").textContent
    horainicial = document.getElementById("preview-horainicial").textContent
    horafinal = document.getElementById("preview-horafinal").textContent
    setor = document.getElementById("preview-setor").textContent
    escrevente = document.getElementById("preview-escrevente").textContent

    document.getElementById("print-preview").style.display = "none";
}