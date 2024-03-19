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


    let sabores_docinhos_gourmet_selecionados = []
    let expo_docinhos_gourmet = ''
    let sabores_docinhos_gourmet = document.getElementsByName("checkbox_docinhos_gourmet")

    for(var i=0; i<sabores_docinhos_gourmet.length; i++){
        if(sabores_docinhos_gourmet[i].checked){
        
            sabores_docinhos_gourmet_selecionados.push(sabores_docinhos_gourmet[i].value)

        }

    }

    var select = document.querySelector('#qntd_docinhos_gourmet')
    var option = select.children[select.selectedIndex];
    var qntd_escolhida_docinhos_gourmet = option.textContent;

    var preco_docinho_gourmet = 0
    var quantidade_docinhos_gourmet = 0

    if(qntd_escolhida_docinhos_gourmet === 'Sem Docinhos'){
        preco_docinho_gourmet += 0
        quantidade_docinhos_gourmet += 0
        var qntd_docinhos_gourmet_por_sabor = 0

    }
    if(qntd_escolhida_docinhos_gourmet === '50 unidades ( 2 sabores disponíveis )'){
        preco_docinho_gourmet += 75
        quantidade_docinhos_gourmet += 50
        var qntd_docinhos_gourmet_por_sabor = parseInt(quantidade_docinhos_gourmet/sabores_docinhos_gourmet_selecionados.length)
        
    }
    if(qntd_escolhida_docinhos_gourmet === '100 unidades ( 4 sabores disponíveis )'){
        preco_docinho_gourmet += 150
        quantidade_docinhos_gourmet += 100
        var qntd_docinhos_gourmet_por_sabor = parseInt(quantidade_docinhos_gourmet/sabores_docinhos_gourmet_selecionados.length)
        
    }
    if(qntd_escolhida_docinhos_gourmet === '150 unidades ( 6 sabores disponíveis )'){
        preco_docinho_gourmet += 225
        quantidade_docinhos_gourmet += 150
        var qntd_docinhos_gourmet_por_sabor = parseInt(quantidade_docinhos_gourmet/sabores_docinhos_gourmet_selecionados.length)
        
    }
    if(qntd_escolhida_docinhos_gourmet === '200 unidades ( 8 sabores disponíveis )'){
        preco_docinho_gourmet += 300
        quantidade_docinhos_gourmet += 200
        var qntd_docinhos_gourmet_por_sabor = parseInt(quantidade_docinhos_gourmet/sabores_docinhos_gourmet_selecionados.length)
        
    }


    let sabores_docinhos_tradicionais_selecionados = []
    let expo_docinhos_tradicionais = ''
    let sabores_docinhos_tradicionais = document.getElementsByName("checkbox_docinhos_tradicionais")

    for(var i=0; i<sabores_docinhos_tradicionais.length; i++){
        if(sabores_docinhos_tradicionais[i].checked){
        
            sabores_docinhos_tradicionais_selecionados.push(sabores_docinhos_tradicionais[i].value)

        }

    }


    var select = document.querySelector('#qntd_docinhos_tradicionais')
    var option = select.children[select.selectedIndex];
    var qntd_escolhida_docinhos_tradicionais = option.textContent;

    var preco_docinho_tradicionais = 0
    var quantidade_docinhos_tradicionais = 0

    if(qntd_escolhida_docinhos_tradicionais === 'Sem Docinhos'){
        preco_docinho_tradicionais += 0
        quantidade_docinhos_tradicionais += 0
        var qntd_docinhos_tradicionais_por_sabor = 0
        
       
    }
    if(qntd_escolhida_docinhos_tradicionais === '50 unidades ( 2 sabores disponíveis )'){
        preco_docinho_tradicionais += 50
        quantidade_docinhos_tradicionais += 50
        var qntd_docinhos_tradicionais_por_sabor = parseInt(quantidade_docinhos_tradicionais/sabores_docinhos_tradicionais_selecionados.length)
        
    }
    if(qntd_escolhida_docinhos_tradicionais === '100 unidades ( 4 sabores disponíveis )'){
        preco_docinho_tradicionais += 100
        quantidade_docinhos_tradicionais += 100
        var qntd_docinhos_tradicionais_por_sabor = parseInt(quantidade_docinhos_tradicionais/sabores_docinhos_tradicionais_selecionados.length)
        
    }
    if(qntd_escolhida_docinhos_tradicionais === '150 unidades ( 4 sabores disponíveis )'){
        preco_docinho_tradicionais += 150
        quantidade_docinhos_tradicionais += 150
        var qntd_docinhos_tradicionais_por_sabor = parseInt(quantidade_docinhos_tradicionais/sabores_docinhos_tradicionais_selecionados.length)
        
    }
    if(qntd_escolhida_docinhos_tradicionais === '200 unidades ( 4 sabores disponíveis )'){
        preco_docinho_tradicionais += 200
        quantidade_docinhos_tradicionais += 200
        var qntd_docinhos_tradicionais_por_sabor = parseInt(quantidade_docinhos_tradicionais/sabores_docinhos_tradicionais_selecionados.length)
        
    }




    var preco_bolo_compontos = preco_bolo.toFixed(2).replace('.',',')
    var preco_adicional_compontos = preco_adicional.toFixed(2).replace('.',',')
    var preco_docinho_gourmet_compontos = preco_docinho_gourmet.toFixed(2).replace('.',',')
    var preco_docinho_tradicionais_compontos = preco_docinho_tradicionais.toFixed(2).replace('.',',')

    var preco_total = Number(preco_bolo+preco_adicional+preco_docinho_gourmet+preco_docinho_tradicionais)
    var preco_total_compontos = preco_total.toFixed(2).replace('.',',')

    res.innerHTML = `Data para Retirada : ${data_nova}<br><br>
    Sabor de Bolo : ${boloescolhido}<br>
    Sabor Adicional Escolhido : ${adicional_bolo_escolhido}<br>
    Quantidade de Pedaços : ${qntd_escolhida}<br><br>

    Docinhos Gourmet <br>
    Sabores Selecionados : ${sabores_docinhos_gourmet_selecionados}<br>
    Quantidade por Sabor : ${qntd_docinhos_gourmet_por_sabor} unidades por sabor<br><br>

    Docinhos Tradicionais <br>
    Sabores Selecionados : ${sabores_docinhos_tradicionais_selecionados}<br>
    Quantidade por Sabor : ${qntd_docinhos_tradicionais_por_sabor} unidades por sabor<br><br>

    Preço pelo Bolo : R$ ${preco_bolo_compontos}<br>
    Preço por Sabor Adicional : R$ ${preco_adicional_compontos} <br>
    Preço por Docinhos Gourmet : R$ ${preco_docinho_gourmet_compontos}<br>
    Preço por Docinhos Tradicionais : R$ ${preco_docinho_tradicionais_compontos}<br><br>
    <strong><h3>Preço Total : R$ ${preco_total_compontos}</h3></strong>

    `

}
