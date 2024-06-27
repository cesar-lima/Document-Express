function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

function cep_callback(conteudo) {
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
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=cep_callback';

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
    let nomeregistrado = document.getElementById("idregistrado").value;
    let nomedeclarante = document.getElementById("idnomedeclarante").value;
    let rgdeclarante = document.getElementById("idrdeclarante").value;
    let cpfdeclarante = document.getElementById("idcpfdeclarante").value;
    let profissaodeclarante = document.getElementById("idprofissaodeclarante").value;
    let cepdeclarante = document.getElementById("cep").value
    let ruadeclarante = document.getElementById("rua").value
    let bairrodeclarante = document.getElementById("bairro").value
    let ufdeclarante = document.getElementById("uf").value
    let cidadedeclarante = document.getElementById("cidade").value
    let numerodeclarante = document.getElementById("idnumero").value
    let complementodeclarante = document.getElementById("idcomplemento").value

    let nomeSupostoPai = document.getElementById("idnomesupostopai").value;
    let profissaoSupostoPai = document.getElementById("idprofissaosupostopai").value;

    // Exiba a área de visualização
    document.getElementById("preview-nome-declarante").textContent = nomedeclarante;
    document.getElementById("preview-profissao-declarante").textContent = profissaodeclarante;
    document.getElementById("preview-sign").textContent = nomedeclarante;
    document.getElementById("preview-rg-declarante").textContent = rgdeclarante;
    document.getElementById("preview-cpf-declarante").textContent = cpfdeclarante;
    document.getElementById("preview-cep-declarante").textContent = cepdeclarante;
    document.getElementById("preview-rua-declarante").textContent = ruadeclarante;
    document.getElementById("preview-bairro-declarante").textContent = bairrodeclarante;
    document.getElementById("preview-uf-declarante").textContent = ufdeclarante;
    document.getElementById("preview-cidade-declarante").textContent = cidadedeclarante;
    document.getElementById("preview-numero-declarante").textContent = numerodeclarante;
    document.getElementById("preview-complemento-declarante").textContent = complementodeclarante;
    document.getElementById("preview-nome-registrado").textContent = nomeregistrado;
    document.getElementById("preview-nome-suposto-pai").textContent = nomeSupostoPai;
    document.getElementById("preview-profissao-suposto-pai").textContent = profissaoSupostoPai;
    document.getElementById("preview-cep-suposto-pai").textContent = cepsupostopai;
    document.getElementById("preview-rua-suposto-pai").textContent = ruasupostopai;
    document.getElementById("preview-bairro-suposto-pai").textContent = bairrosupostopai;
    document.getElementById("preview-uf-suposto-pai").textContent = ufsupostopai;
    document.getElementById("preview-cidade-suposto-pai").textContent = cidadesupostopai;
    document.getElementById("preview-numero-suposto-pai").textContent = numerosupostopai;
    document.getElementById("preview-complemento-suposto-pai").textContent = complementosupostopai;


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

    document.getElementById("print-preview").style.display = "none";
    document.getElementById("formulario").style.display = "flex"

    nome = document.getElementById("preview-nome").textContent
    rg = document.getElementById("preview-rg").textContent
    cpf = document.getElementById("preview-cpf").textContent
    cep = document.getElementById("preview-cep").textContent
    rua = document.getElementById("preview-rua").textContent
    bairro = document.getElementById("preview-bairro").textContent
    uf = document.getElementById("preview-uf").textContent
    cidade = document.getElementById("preview-cidade").textContent
    numero =  document.getElementById("preview-numero").textContent
    complemento = document.getElementById("preview-complemento").textContent
    compradorVendedor =  document.getElementById("preview-compravende").textContent
}