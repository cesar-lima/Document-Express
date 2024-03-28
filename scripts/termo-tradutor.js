function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};


function gerarTermo() {
    let tradutor = document.getElementById("idtradutor").value;
    let estCivil = document.getElementById("idestCivil").value
    let nacionalidade = document.getElementById("idnacionalidade").value
    let profissao = document.getElementById("idprofissao").value
    let rg = document.getElementById("idrg").value;
    let cpf = document.getElementById("idcpf").value;
    let lingua = document.getElementById("idlingua").value;
    let cep = document.getElementById("cep").value
    let rua = document.getElementById("rua").value
    let bairro = document.getElementById("bairro").value
    let uf = document.getElementById("uf").value
    let cidade = document.getElementById("cidade").value
    let numero = document.getElementById("idnumero").value
    let complemento = document.getElementById("idcomplemento").value
    let genitor = document.getElementById("idgenitor").value

    // Exiba a área de visualização
    document.getElementById("preview-nome").textContent = tradutor;
    document.getElementById("preview-sign").textContent = tradutor;
    document.getElementById("preview-estCivil").textContent = estCivil;
    document.getElementById("preview-nacionalidade").textContent = nacionalidade;
    document.getElementById("preview-profissao").textContent = profissao;
    document.getElementById("preview-lingua").textContent = lingua;
    document.getElementById("preview-genitor").textContent = genitor;
    document.getElementById("preview-rg").textContent = rg;
    document.getElementById("preview-cpf").textContent = cpf;
    document.getElementById("preview-cep").textContent = cep;
    document.getElementById("preview-rua").textContent = rua;
    document.getElementById("preview-bairro").textContent = bairro;
    document.getElementById("preview-uf").textContent = uf;
    document.getElementById("preview-cidade").textContent = cidade;
    document.getElementById("preview-numero").textContent = numero;
    document.getElementById("preview-complemento").textContent = complemento;

    document.getElementById("print-preview").style.display = "block";

    document.getElementById("formulario").style.display = "none"

    let dataAtual = new Date();
    let dia = dataAtual.getDate();

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const currentMonth = months[dataAtual.getMonth()];

    let ano = dataAtual.getFullYear();

    let diasp = document.getElementById("preview-date");
    diasp.textContent = "São Paulo, " + dia + " de " + currentMonth + " de " + ano;

    // Chame a função de impressão do navegador
    window.print();

    document.getElementById("formulario").style.display = "flex"

    tradutor.value = document.getElementById("preview-nome").textContent 
    estCivil.value = document.getElementById("preview-estCivil").textContent 
    nacionalidade.value = document.getElementById("preview-nacionalidade").textContent 
    profissao.value = document.getElementById("preview-profissao").textContent 
    rg.value = document.getElementById("preview-lingua").textContent 
    cpf.value = document.getElementById("preview-cpf").textContent 
    lingua.value = document.getElementById("preview-rg").textContent 
    cep.value = document.getElementById("preview-cep").textContent 
    rua.value = document.getElementById("preview-rua").textContent 
    bairro.value = document.getElementById("preview-bairro").textContent 
    uf.value = document.getElementById("preview-uf").textContent 
    cidade.value = document.getElementById("preview-cidade").textContent 
    numero.value = document.getElementById("preview-numero").textContent 
    complemento.value = document.getElementById("preview-complemento").textContent 
    genitor.value = document.getElementById("preview-genitor").textContent 

    document.getElementById("print-preview").style.display = "none";
}