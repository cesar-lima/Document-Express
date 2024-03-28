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
    let nome = document.getElementById("idnome").value;
    let estcivil = document.getElementById("idestcivil").value
    let naturalidade = document.getElementById("idnaturalidade").value
    let email = document.getElementById("idemail").value
    let profissao = document.getElementById("idprofissao").value
    let rg = document.getElementById("idrg").value;
    let cpf = document.getElementById("idcpf").value;
    let tiporegistro = document.getElementById("idtiporegistro").value;
    let livroregistro = document.getElementById("idlivroregistro").value;
    let folharegistro = document.getElementById("idfolharegistro").value;
    let termoregistro = document.getElementById("idtermoregistro").value;
    let cep = document.getElementById("cep").value
    let numero = document.getElementById("idnumero").value
    let rua = document.getElementById("rua").value
    let bairro = document.getElementById("bairro").value
    let uf = document.getElementById("uf").value
    let cidade = document.getElementById("cidade").value
    let celular = document.getElementById("idcelular").value
    let complemento = document.getElementById("idcomplemento").value
    let infoerrada = document.getElementById("idinfoerrada").value
    let infocorreta = document.getElementById("idinfocorreta").value
    let docsapresentados = document.getElementById("iddocsapresentados").value
    let matricula = document.getElementById("idmatricula").value
    let escrevente = document.getElementById("idescrevente").value
    let atendente = document.getElementById("idatendente").value

    let infoerradacod = encodeURIComponent(infoerrada);
    let infocorretacod = encodeURIComponent(infocorreta);
    let docsapresentadoscod = encodeURIComponent(docsapresentados);


    // Exiba a área de visualização
    document.getElementById("preview-nome").textContent = nome;
    document.getElementById("preview-estCivil").textContent = estcivil;
    document.getElementById("preview-email").textContent = email;
    document.getElementById("preview-tiporegistro").textContent = tiporegistro;
    document.getElementById("preview-livroregistro").textContent = livroregistro;
    document.getElementById("preview-folharegistro").textContent = folharegistro;
    document.getElementById("preview-termoregistro").textContent = termoregistro;
    document.getElementById("preview-naturalidade").textContent = naturalidade;
    document.getElementById("preview-celular").textContent = celular;
    document.getElementById("preview-infoerrada").textContent = decodeURIComponent(infoerradacod);
    document.getElementById("preview-infocorreta").textContent = decodeURIComponent(infocorretacod);
    document.getElementById("preview-docsapresentados").textContent = decodeURIComponent(docsapresentadoscod);
    document.getElementById("preview-profissao").textContent = profissao;
    document.getElementById("preview-rg").textContent = rg;
    document.getElementById("preview-cpf").textContent = cpf;
    document.getElementById("preview-cep").textContent = cep;
    document.getElementById("preview-rua").textContent = rua;
    document.getElementById("preview-bairro").textContent = bairro;
    document.getElementById("preview-uf").textContent = uf;
    document.getElementById("preview-cidade").textContent = cidade;
    document.getElementById("preview-numero").textContent = numero;
    document.getElementById("preview-complemento").textContent = complemento;
    document.getElementById("preview-matricula").textContent = matricula;
    document.getElementById("preview-escrevente").textContent = escrevente;
    document.getElementById("preview-atendente").textContent = atendente

    document.getElementById("print-preview").style.display = "block";

    document.getElementById("formulario").style.display = "none"

    let dataAtual = new Date();
    let dia = dataAtual.getDate();

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const currentMonth = months[dataAtual.getMonth()];

    let ano = dataAtual.getFullYear();

    let diasp = document.getElementById("preview-date");
    diasp.textContent = "São Paulo, " + dia + " de " + currentMonth + " de " + ano;

    let dataAtual2 = dataAtual.toLocaleDateString()
    document.getElementById("preview-date2").textContent = dataAtual2

    // Chame a função de impressão do navegador
    window.print();

    document.getElementById("formulario").style.display = "flex"

    nome.value = document.getElementById("preview-nome").textContent = nome;
    estcivil.value = document.getElementById("preview-estCivil").textContent = estcivil;
    email.value = document.getElementById("preview-email").textContent = email;
    tiporegistro.value = document.getElementById("preview-tiporegistro").textContent = tiporegistro;
    livroregistro.value = document.getElementById("preview-livroregistro").textContent = livroregistro;
    folharegistro.value = document.getElementById("preview-folharegistro").textContent = folharegistro;
    termoregistro.value = document.getElementById("preview-termoregistro").textContent = termoregistro;
    naturalidade.value = document.getElementById("preview-naturalidade").textContent = naturalidade;
    celular.value = document.getElementById("preview-celular").textContent = celular;
    infoerrada.value = document.getElementById("preview-infoerrada").textContent = infoerrada;
    infocorreta.value = document.getElementById("preview-infocorreta").textContent = infocorreta;
    docsapresentados.value = document.getElementById("preview-docsapresentados").textContent = docsapresentados;
    profissao.value = document.getElementById("preview-profissao").textContent = profissao;
    rg.value = document.getElementById("preview-rg").textContent = rg;
    cpf.value = document.getElementById("preview-cpf").textContent = cpf;
    cep.value = document.getElementById("preview-cep").textContent = cep;
    rua.value = document.getElementById("preview-rua").textContent = rua;
    bairro.value = document.getElementById("preview-bairro").textContent = bairro;
    uf.value = document.getElementById("preview-uf").textContent = uf;
    cidade.value = document.getElementById("preview-cidade").textContent = cidade;
    numero.value =document.getElementById("preview-numero").textContent = numero;
    complemento.value = document.getElementById("preview-complemento").textContent = complemento;
    matricula.value = document.getElementById("preview-matricula").textContent = matricula;

    document.getElementById("print-preview").style.display = "none";
}