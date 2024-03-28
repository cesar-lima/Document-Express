function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
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
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

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
    let nome = document.getElementById("iddeclarante").value;
    let nacionalidade = document.getElementById("idnacionalidade").value;
    let profissao = document.getElementById("idprofissao").value;
    let rg = document.getElementById("idrg").value;
    let cpf = document.getElementById("idcpf").value;
    let falecido = document.getElementById("idfalecido").value;
    let companheiro = document.getElementById("idcompanheiro").value;
    let rua = document.getElementById("rua").value
    let bairro = document.getElementById("bairro").value 
    let uf = document.getElementById("uf").value
    let cidade = document.getElementById("cidade").value
    let numero = document.getElementById("idnumero").value
  
    // Exiba a área de visualização
    
    if(document.getElementById("checkbox1").checked){
        document.getElementById("preview-nome2").textContent = nome;
        document.getElementById("preview-sign2").textContent = nome;
        document.getElementById("preview-nacionalidade2").textContent = nacionalidade;
        document.getElementById("preview-profissao2").textContent = profissao;
        document.getElementById("preview-rg2").textContent = rg;
        document.getElementById("preview-cpf2").textContent = cpf;
        document.getElementById("preview-rua2").textContent = rua;
        document.getElementById("preview-bairro2").textContent = bairro;
        document.getElementById("preview-uf2").textContent = uf;
        document.getElementById("preview-cidade2").textContent = cidade;
        document.getElementById("preview-falecido2").textContent = falecido;
        document.getElementById("preview-numero2").textContent = numero;

        document.getElementById("print-preview2").style.display = "block";

        let dataAtual = new Date();
        let dia = dataAtual.getDate();
    
        const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const currentMonth = months[dataAtual.getMonth()];
    
        let ano = dataAtual.getFullYear();
    
        let diasp = document.getElementById("preview-date2");
        diasp.textContent = "São Paulo, "+ dia +" de "+ currentMonth +" de "+ ano;
    } else {
        document.getElementById("preview-nome").textContent = nome;
        document.getElementById("preview-sign").textContent = nome;
        document.getElementById("preview-nacionalidade").textContent = nacionalidade;
        document.getElementById("preview-profissao").textContent = profissao;
        document.getElementById("preview-rg").textContent = rg;
        document.getElementById("preview-cpf").textContent = cpf;
        document.getElementById("preview-rua").textContent = rua;
        document.getElementById("preview-bairro").textContent = bairro;
        document.getElementById("preview-uf").textContent = uf;
        document.getElementById("preview-cidade").textContent = cidade;
        document.getElementById("preview-falecido").textContent = falecido;
        document.getElementById("preview-companheiro").textContent = companheiro;
        document.getElementById("preview-numero").textContent = numero;
      
        document.getElementById("print-preview").style.display = "block";

        let dataAtual = new Date();
        let dia = dataAtual.getDate();
    
        const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const currentMonth = months[dataAtual.getMonth()];
    
        let ano = dataAtual.getFullYear();
    
        let diasp = document.getElementById("preview-date");
        diasp.textContent = "São Paulo, "+ dia +" de "+ currentMonth +" de "+ ano;
    }

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
    document.getElementById("print-preview").style.display = "none";
    document.getElementById("print-preview2").style.display = "none";

    if (document.getElementById("checkbox1").checked) {
        nome = document.getElementById("preview-nome2").textContent = nome;
        nacionalidade = document.getElementById("preview-nacionalidade2").textContent
        profissao = document.getElementById("preview-profissao2").textContent
        rg = document.getElementById("preview-rg2").textContent
        cpf = document.getElementById("preview-cpf2").textContent
        falecido = document.getElementById("preview-falecido2").textContent
        rua = document.getElementById("preview-rua2").textContent
        bairro = document.getElementById("preview-bairro2").textContent
        uf = document.getElementById("preview-uf2").textContent
        cidade = document.getElementById("preview-cidade2").textContent
        numero = document.getElementById("preview-numero2").textContent
    } else {
        nome = document.getElementById("preview-nome").textContent = nome;
        nacionalidade = document.getElementById("preview-nacionalidade").textContent
        profissao = document.getElementById("preview-profissao").textContent
        rg = document.getElementById("preview-rg").textContent
        cpf = document.getElementById("preview-cpf").textContent
        falecido = document.getElementById("preview-falecido").textContent
        rua = document.getElementById("preview-rua").textContent
        bairro = document.getElementById("preview-bairro").textContent
        uf = document.getElementById("preview-uf").textContent
        cidade = document.getElementById("preview-cidade").textContent
        numero = document.getElementById("preview-numero").textContent
        companheiro = document.getElementById("preview-companheiro").textContent
    }
}