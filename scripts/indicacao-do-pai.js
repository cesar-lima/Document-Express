function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('ruadeclarante').value = ("");
    document.getElementById('bairrodeclarante').value = ("");
    document.getElementById('cidadedeclarante').value = ("");
    document.getElementById('ufdeclarante').value = ("");
}

function cep_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('ruadeclarante').value = (conteudo.logradouro);
        document.getElementById('bairrodeclarante').value = (conteudo.bairro);
        document.getElementById('cidadedeclarante').value = (conteudo.localidade);
        document.getElementById('ufdeclarante').value = (conteudo.uf);
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
            document.getElementById('ruadeclarante').value = "...";
            document.getElementById('bairrodeclarante').value = "...";
            document.getElementById('cidadedeclarante').value = "...";
            document.getElementById('ufdeclarante').value = "...";

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


function limpa_formulário_cep2() {
    //Limpa valores do formulário de cep.
    document.getElementById('ruasupostopai').value = ("");
    document.getElementById('bairrosupostopai').value = ("");
    document.getElementById('cidadesupostopai').value = ("");
    document.getElementById('ufsupostopai').value = ("");
}

function cep_callback2(conteudo2) {
    if (!("erro" in conteudo2)) {
        //Atualiza os campos com os valores.
        document.getElementById('ruasupostopai').value = (conteudo2.logradouro);
        document.getElementById('bairrosupostopai').value = (conteudo2.bairro);
        document.getElementById('cidadesupostopai').value = (conteudo2.localidade);
        document.getElementById('ufsupostopai').value = (conteudo2.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep2();
        alert("CEP não encontrado.");
    }
}

function pesquisacep2(valor2) {
    //Nova variável "cep" somente com dígitos.
    var cep2 = valor2.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep2 != "") {
        //Expressão regular para validar o CEP.
        var validacep2 = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep2.test(cep2)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('ruasupostopai').value = "...";
            document.getElementById('bairrosupostopai').value = "...";
            document.getElementById('cidadesupostopai').value = "...";
            document.getElementById('ufsupostopai').value = "...";

            //Cria um elemento javascript.
            var script2 = document.createElement('script');

            //Sincroniza com o callback.
            script2.src = 'https://viacep.com.br/ws/' + cep2 + '/json/?callback=cep_callback2';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script2);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep2();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep2();
    }
};



function gerarTermo() {
    let nomeregistrado = document.getElementById("idregistrado").value;
    let nomedeclarante = document.getElementById("idnomedeclarante").value;
    let rgdeclarante = document.getElementById("idrgdeclarante").value;
    let cpfdeclarante = document.getElementById("idcpfdeclarante").value;
    let profissaodeclarante = document.getElementById("idprofissaodeclarante").value;
    let cepdeclarante = document.getElementById("cepdeclarante").value;
    let ruadeclarante = document.getElementById("ruadeclarante").value;
    let bairrodeclarante = document.getElementById("bairrodeclarante").value;
    let ufdeclarante = document.getElementById("ufdeclarante").value;
    let cidadedeclarante = document.getElementById("cidadedeclarante").value;
    let numerodeclarante = document.getElementById("idnumerodeclarante").value;

    let nomesupostopai = document.getElementById("idnomesupostopai").value;
    let profissaosupostopai = document.getElementById("idprofissaosupostopai").value;
    let cepsupostopai = document.getElementById("cepsupostopai").value;
    let ruasupostopai = document.getElementById("ruasupostopai").value;
    let bairrosupostopai = document.getElementById("bairrosupostopai").value;
    let ufsupostopai = document.getElementById("ufsupostopai").value;
    let cidadesupostopai = document.getElementById("cidadesupostopai").value;
    let numerosupostopai = document.getElementById("idnumerosupostopai").value;

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

    document.getElementById("preview-nome-registrado").textContent = nomeregistrado;
    document.getElementById("preview-nome-suposto-pai").textContent = nomesupostopai;
    document.getElementById("preview-profissao-suposto-pai").textContent = profissaosupostopai;
    document.getElementById("preview-cep-suposto-pai").textContent = cepsupostopai;
    document.getElementById("preview-rua-suposto-pai").textContent = ruasupostopai;
    document.getElementById("preview-bairro-suposto-pai").textContent = bairrosupostopai;
    document.getElementById("preview-uf-suposto-pai").textContent = ufsupostopai;
    document.getElementById("preview-cidade-suposto-pai").textContent = cidadesupostopai;
    document.getElementById("preview-numero-suposto-pai").textContent = numerosupostopai;

    if (document.getElementsByClassName("checkboxoption")[0].checked) {
        document.getElementById("preview-hospital").textContent = "da Maternidade Amparo Maternal, localizado Rua Loefgren, 1901 - Vila Clementino, São Paulo - SP, 04040-033";
    } else {
        document.getElementById("preview-hospital").textContent = "do Hospital e Maternidade Sepaco, localizado na Rua Vergueiro, 4210 - Vila Mariana, São Paulo - SP, 04102-900";
    }


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

    nome = document.getElementById("preview-nome-declarante").textContent = nomedeclarante;
    profissao = document.getElementById("preview-profissao-declarante").textContent = profissaodeclarante;
    rg = document.getElementById("preview-rg-declarante").textContent = rgdeclarante;
    cpf = document.getElementById("preview-cpf-declarante").textContent = cpfdeclarante;
    cep = document.getElementById("preview-cep-declarante").textContent = cepdeclarante;
    rua = document.getElementById("preview-rua-declarante").textContent = ruadeclarante;
    bairro = document.getElementById("preview-bairro-declarante").textContent = bairrodeclarante;
    uf = document.getElementById("preview-uf-declarante").textContent = ufdeclarante;
    cidade = document.getElementById("preview-cidade-declarante").textContent = cidadedeclarante;
    numero = document.getElementById("preview-numero-declarante").textContent = numerodeclarante;

    nomeregistrado = document.getElementById("preview-nome-registrado").textContent;
    nomesupostopai = document.getElementById("preview-nome-suposto-pai").textContent;
    profissaosupostopai = document.getElementById("preview-profissao-suposto-pai").textContent;
    cepsupostopai = document.getElementById("preview-cep-suposto-pai").textContent;
    ruasupostopai = document.getElementById("preview-rua-suposto-pai").textContent;
    bairrosupostopai = document.getElementById("preview-bairro-suposto-pai").textContent;
    ufsupostopai = document.getElementById("preview-uf-suposto-pai").textContent;
    cidadesupostopai = document.getElementById("preview-cidade-suposto-pai").textContent;
    numerosupostopai = document.getElementById("preview-numero-suposto-pai").textContent;
}