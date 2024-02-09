function execucao(){

    var data = document.querySelector('#data').value
    var data_nova = data.split('-').reverse().join('/')

    var select = document.querySelector('#bolos')
    var option = select.children[select.selectedIndex];
    var boloescolhido = option.textContent;
    
    var select = document.querySelector('#adicionais_bolos')
    var option = select.children[select.selectedIndex];
    var adicional_bolo_escolhido = option.textContent;

    var preco_adicional = 0

    if(adicional_bolo_escolhido === 'Frutas Frescas'){
        preco_adicional += 15
    }
    if(adicional_bolo_escolhido === 'Maracujá'){
        preco_adicional += 15
    }
    if(adicional_bolo_escolhido === 'Doce de Leite com Ameixa'){
        preco_adicional += 10
    }
    if(adicional_bolo_escolhido === 'Sabores Adicionais de Bolos'){
        preco_adicional += 0
    }

    var select = document.querySelector('#qntd_pedaços')
    var option = select.children[select.selectedIndex];
    var qntd_escolhida = option.textContent;

    var preco_bolo = 0

    if(qntd_escolhida === 'De 15-18 fatias'){
        preco_bolo += 140
    }
    if(qntd_escolhida === 'De 20-30 fatias'){
        preco_bolo += 185
    }
    if(qntd_escolhida === 'De 35-40 fatias'){
        preco_bolo += 295
    }


    var preco_total = Number(preco_bolo+preco_adicional)

    res.innerHTML = `Data para Retirada : ${data_nova}<br><br>
    Sabor de Bolo : ${boloescolhido}<br>
    Sabor Adicional Escolhido : ${adicional_bolo_escolhido}<br>
    Quantidade de Pedaços : ${qntd_escolhida}<br><br>

    Preço pelo Bolo : R$ ${preco_bolo}<br>
    Preço por Sabor Adicional : R$ ${preco_adicional} <br><br>
    Preço Total : R$ ${preco_total}<br>

    `



}