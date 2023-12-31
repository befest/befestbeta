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

    //Toalhas
    var select = document.querySelector('#toalhas')
    var option = select.children[select.selectedIndex];
    var toalhaescolhida = option.textContent;

    //Convidados
    var int = document.querySelector('#convint').value
    var mei = document.querySelector('#convmeia').value

    //Preço por Convidado
    var preco_por_convidado = document.querySelector('#preco_convidado').value

    var preco_total_integral = int*preco_por_convidado
    var preco_total_meia = (preco_por_convidado/2)*mei

    var preco_total = preco_total_integral + preco_total_meia


    


    res.innerHTML = `Orçamento Barreto's Buffet<br><br>
 
    Data do Evento📆: ${data_nova}<br>
        
    Cardápio Escolhido🍽️: ${cardapioescolhido}<br>
    Cerveja : ${cervejaescolhida} <br>
    Open-Bar : ${openbarescolhido} <br>
    Toalha Escolhida : ${toalhaescolhida}<br>
    Nº de Convidados Integrais : ${int} convidados <br>
    Nº de Convidados Meias : ${mei} convidados<br>
    Preço por Convidado : R$ ${preco_por_convidado}<br>
    Preço Total : R$ ${preco_total}

    `
}