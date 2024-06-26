function gerarTermo() {
    let nome = document.getElementById("idnome").value;
    let rg = document.getElementById("idrg").value;
    let cpf = document.getElementById("idcpf").value;
    let falecido = document.getElementById("idfalecido").value;
    let declaracao = document.getElementById("iddeclaracao").value;
    let parentesco = document.getElementById("idparentesco").value;
  
    // Preencha os campos de visualização
    document.getElementById("preview-nome").textContent = nome;
    document.getElementById("preview-sign").textContent = nome;
    document.getElementById("preview-rg").textContent = rg;
    document.getElementById("preview-cpf").textContent = cpf;
    document.getElementById("preview-falecido").textContent = falecido;
    document.getElementById("preview-declaracao").textContent = declaracao;
    document.getElementById("preview-parentesco").textContent = parentesco;
    
  
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

    window.print();

    document.getElementById("print-preview").style.display = "none";
    document.getElementById("formulario").style.display = "flex"

    nome = document.getElementById("preview-nome").textContent
    rg = document.getElementById("preview-rg").textContent = rg;
    cpf = document.getElementById("preview-cpf").textContent
    falecido = document.getElementById("preview-falecido").textContent
    declaracao = document.getElementById("preview-declaracao").textContent
    parentesco = document.getElementById("preview-parentesco").textContent
}