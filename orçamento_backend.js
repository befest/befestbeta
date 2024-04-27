function execucao(){
    //Data
    var data = document.querySelector('input#data').value;
    var data_nova = data.split('-').reverse().join('/')

    var mes = data[5] + data[6]

    if(mes == '12'){
        var preço_mes = 10
    }else{
        var preço_mes = 0
    }

    //Cardápios
        var select = document.querySelector('#cardapios')
        var option = select.children[select.selectedIndex];
        var cardapioescolhido = option.textContent;

    //Cerveja
    var select = document.querySelector('#cervejas')
    var option = select.children[select.selectedIndex];
    var cervejaescolhida = option.textContent;

    //Openbar
    var select = document.querySelector('#open-bar')
    var option = select.children[select.selectedIndex];
    var openbarescolhido = option.textContent;

    //Convidados
    var int = document.querySelector('#convint').value
    var mei = document.querySelector('#convmeia').value
    var totconv = int + mei

    //Toalhas
    var select = document.querySelector('#toalhas')
    var option = select.children[select.selectedIndex];
    var toalhaEscolhida = option.textContent;

    var precotoalha = 0
    
    if(toalhaEscolhida=== 'Sem Toalha'){
        precotoalha += 0
    }
    if(toalhaEscolhida=== 'Toalha Branca Lisa'){
        precotoalha += 15
    }
    if(toalhaEscolhida=== 'Toalha Vermelha Lisa'){
        precotoalha += 10
    }
    if(toalhaEscolhida=== 'Toalha Vermelha e Branca Quadriculada'){
        precotoalha += 5
    }
    if(toalhaEscolhida=== 'Toalha Azul e Branca Quadriculada'){
        precotoalha += 5
    }
    if(toalhaEscolhida=== 'Toalha Verde e Branca Quadriculada'){
        precotoalha += 5
    }
    if(toalhaEscolhida=== 'Toalha Preta e Branca Quadriculada'){
        precotoalha += 5
    }

    var n_de_toalhas = (totconv/4)
    var preco_toalhas_total = precotoalha*n_de_toalhas
    

    //Toalhas Final

    //Preço por Convidado
    var preco_por_convidado = document.querySelector('#preco_convidado').value

    var preco_total_integral = int*preco_por_convidado
    var preco_total_meia = (preco_por_convidado/2)*mei

    var preco_total = preco_total_integral + preco_total_meia + preco_toalhas_total


    


    res.innerHTML = `
 
    Data do Evento📆: ${data_nova}<br><br>
        
    Cardápio Escolhido🍽️: ${cardapioescolhido}<br>
    Cerveja : ${cervejaescolhida} <br>
    Open-Bar : ${openbarescolhido} <br><br>

    Toalha Escolhida : ${toalhaEscolhida}<br>
    Nº de Toalhas : ${n_de_toalhas}<br>
    Preço por Toalha : R$ ${precotoalha}<br>
    Preço por Toalhas Total : R$ ${preco_toalhas_total}<br><br>

    Nº de Convidados Integrais : ${int} convidados <br>
    Nº de Convidados Meias : ${mei} convidados<br><br>

    Preço por Convidado : R$ ${preco_por_convidado}<br>
    Preço Total : R$ ${preco_total}

    `
}
