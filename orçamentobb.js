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
    
    //Data Fim

    var mei = document.querySelector('#convmeia')
    var int = document.querySelector('#convint')
    var integrais = Number(int.value)
    var meias = Number(mei.value)
    var totconv = integrais + meias

    if(totconv>200){
        alert('O número de convidados é 200 convidados ou mais , entre em contato conosco para negociarmos melhor o preço!')
    }

    var select = document.querySelector('#cardapios')
    var option = select.children[select.selectedIndex];
    var cardapioescolhido = option.textContent;

    var precoconv = 0

    // CARDÁPIO CHURRAS MASTER //

    if(cardapioescolhido === 'Churras Master' && totconv<30){
        precoconv += (140*30)/totconv
    }
    if(cardapioescolhido === 'Churras Master' && totconv>=30 && totconv<=70){
        precoconv += 140
    }
    if(cardapioescolhido === 'Churras Master' && totconv>=71 && totconv<=100){
       precoconv += 135
    }
    if(cardapioescolhido === 'Churras Master' && totconv>=101 && totconv<=120){
       precoconv += 130
    }
    if(cardapioescolhido === 'Churras Master' && totconv>=121 && totconv<=150){
        precoconv += 125
    }

    // FINAL DO CARDÁPIO CHURRAS MASTER //

    // CARDÁPIO CHURRAS GOLD //

    if(cardapioescolhido === 'Churras Gold' && totconv<30){
        precoconv += (100*30)/totconv
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=30 && totconv<=70){
        precoconv += 100
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=71 && totconv<=100){
        precoconv += 95
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=101 && totconv<=120){
        precoconv += 90
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=121 && totconv<=150){
        precoconv += 85
    }
   

    // FINAL DO CARDÁPIO CHURRAS GOLD

    // CARDÁPIO CHURRAS SILVER //

    if(cardapioescolhido === 'Churras Silver' && totconv<50){
        precoconv += (90*50)/totconv
    }
    if(cardapioescolhido === 'Churras Silver' && totconv>=50 && totconv<=70){
        precoconv += 90
    }
    if(cardapioescolhido === 'Churras Silver' && totconv>=71 && totconv<=100){
        precoconv += 85
    }
    if(cardapioescolhido === 'Churras Silver' && totconv>=101 && totconv<=120){
        precoconv += 80
    }
    if(cardapioescolhido === 'Churras Silver' && totconv>=121 && totconv<=150){
        precoconv += 75
    }

    // FINAL DO CARDÁPIO CHURRAS SILVER //

    // CARDÁPIO RODÍZIO DE CARNES //

    if(cardapioescolhido === 'Rodízio de Carnes' && totconv<30){
        precoconv += (80*30)/totconv
    }
    if(cardapioescolhido === 'Rodízio de Carnes' && totconv>=30 && totconv<=70){
        precoconv += 80
    }
    if(cardapioescolhido === 'Rodízio de Carnes' && totconv>=71 && totconv<=100){
        precoconv += 75
    }
    if(cardapioescolhido === 'Rodízio de Carnes' && totconv>=101 && totconv<=120){
        precoconv += 70
    }
    if(cardapioescolhido === 'Rodízio de Carnes' && totconv>=121 && totconv<=150){
        precoconv += 65
    }

    // FINAL DO CARDÁPIO RODÍZIO DE CARNES //

    // CARDÁPIO DE ALMOÇO/JANTAR //

    if(cardapioescolhido === 'Almoço/Jantar' && totconv<50){
        precoconv += (95*50)/totconv
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=50 && totconv<=70){
        precoconv += 95
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=71 && totconv<=100){
        precoconv += 90
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=101 && totconv<=120){
        precoconv += 85
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=120 && totconv<=150){
        precoconv += 80
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=151){
        precoconv += 75
    }

    // FIM DO CARDÁPIO ALMOÇO/JANTAR //

    // CARDÁPIO DE BUFFET INFANTIL //

    if(cardapioescolhido === 'Buffet Infantil' && totconv<50){
        precoconv+= (85*50)/totconv
    }
    if(cardapioescolhido === 'Buffet Infantil' && totconv>=50 && totconv<=70){
        precoconv += 85
    }
    if(cardapioescolhido === 'Buffet Infantil' && totconv>=71 && totconv<=100){
        precoconv += 80
    }
    if(cardapioescolhido === 'Buffet Infantil' && totconv>=101 && totconv<=120){
        precoconv = 75
    }
    if(cardapioescolhido === 'Buffet Infantil' && totconv>=121 && totconv<=150){
        precoconv += 70
    }

    // FIM DO CARDÁPIO DE BUFFET INFANTIL //

    // CARDÁPIO DE FEIJOADA //

    if(cardapioescolhido === 'Feijoada' && totconv<50){
        precoconv+= (90*50)/totconv
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=50 && totconv<=70){
        precoconv += 90
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=71 && totconv<=100){
        precoconv += 85
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=101 && totconv<=120){
        precoconv = 80
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=121 && totconv<=150){
        precoconv += 75
    }

    // FIM DO CARDÁPIO DE FEIJOADA //

    // CARDÁPIO DE FESTA BOTEQUIM //

    if(cardapioescolhido === 'Festa Botequim' && totconv<50){
        precoconv += (90*30)/totconv
    }
    if(cardapioescolhido === 'Festa Botequim' && totconv>=50 && totconv<=70){
        precoconv += 90
    }
    if(cardapioescolhido === 'Festa Botequim' && totconv>=71 && totconv<=100){
        precoconv += 85
    }
    if(cardapioescolhido === 'Festa Botequim' && totconv>=101 && totconv<=120){
        precoconv += 80
    }
    if(cardapioescolhido === 'Festa Botequim' && totconv>=121 && totconv<=150){
        precoconv += 75
    }

    // FIM DO CARDÁPIO DE FESTA BOTEQUIM //

    // CARDÁPIO DE COFFEE BREAK //

    if(cardapioescolhido === 'Coffee Break' && totconv<30){
        precoconv += (65*30)/totconv
    }
    if(cardapioescolhido === 'Coffee Break' && totconv>=30 && totconv<=70){
        precoconv += 65
    }
    if(cardapioescolhido === 'Coffee Break' && totconv>=71 && totconv<=100){
        precoconv += 60
    }
    if(cardapioescolhido === 'Coffee Break' && totconv>=101 && totconv<=120){
        precoconv += 55
    }
    if(cardapioescolhido === 'Coffee Break' && totconv>=121 && totconv<=150){
        precoconv += 50
    }

    // FIM DO CARDÁPIO DE COFFEE BREAK //

    // CARDÁPIO DE COCKTAIL //

    if(cardapioescolhido === 'Cocktail' && totconv<30){
        precoconv += (75*30)/totconv
    }
    if(cardapioescolhido === 'Cocktail' && totconv>=30 && totconv<=70){
        precoconv += 75
    }
    if(cardapioescolhido === 'Cocktail' && totconv>=71 && totconv<=100){
        precoconv += 70
    }
    if(cardapioescolhido === 'Cocktail' && totconv>=101 && totconv<=120){
        precoconv += 65
    }
    if(cardapioescolhido === 'Cocktail' && totconv>=121 && totconv<=150){
        precoconv += 60
    }

    // FIM DO CARDÁPIO DE COCKTAIL //

    // CARDÁPIO DE MASSAS //

    if(cardapioescolhido === 'Massas' && totconv<50){
        precoconv += (90*50)/totconv
    }
    if(cardapioescolhido === 'Massas' && totconv>=50 && totconv<=70){
        precoconv += 90
    }
    if(cardapioescolhido === 'Massas' && totconv>=71 && totconv<=100){
        precoconv += 85
    }
    if(cardapioescolhido === 'Massas' && totconv>=101 && totconv<=120){
        precoconv += 80
    }
    if(cardapioescolhido === 'Massas' && totconv>=121 && totconv<=150){
        precoconv += 75
    }

    // FIM DO CARDÁPIO DE Massas //

    // CARDÁPIO DE FESTA JUNINA //
    
    if(cardapioescolhido === 'Festa Junina' && totconv<50){
        precoconv += (90*50)/totconv
    }
    if(cardapioescolhido === 'Festa Junina' && totconv>=50 && totconv<=70){
        precoconv += 90
    }
    if(cardapioescolhido === 'Festa Junina' && totconv>=71 && totconv<=100){
        precoconv += 85
    }
    if(cardapioescolhido === 'Festa Junina' && totconv>=101 && totconv<=120){
        precoconv += 80
    }
    if(cardapioescolhido === 'Festa Junina' && totconv>=121 && totconv<=150){
        precoconv += 75
    }

// FIM DO CARDÁPIO DE FESTA JUNINA //

    // COMEÇO DA ESCOLHA DA CERVEJA

    var select = document.querySelector('#cervejas')
    var option = select.children[select.selectedIndex];
    var cervejaescolhida = option.textContent;

    var precocerva = 0

    if( cervejaescolhida === 'Sem Cerveja'){
        precocerva += 0
    }
    if( cervejaescolhida=== 'Brahma'){
        precocerva += 15
    }
    if( cervejaescolhida=== 'Brahma Duplo/Puro Malte'){
        precocerva += 20
    }
    if( cervejaescolhida=== 'Antarctica Original'){
        precocerva += 20
    }
    if( cervejaescolhida=== 'Amstel'){
        precocerva += 20
    }
    if( cervejaescolhida=== 'Heineken'){
        precocerva += 35
    }
    if( cervejaescolhida=== 'Corona'){
        precocerva += 25
    }
    if( cervejaescolhida=== 'Stella Artois'){
        precocerva += 30
    }
    if( cervejaescolhida=== 'Budweiser'){
        precocerva += 25
    }
    if( cervejaescolhida=== 'Bohemia'){
        precocerva += 20
    }
    // FINAL DA CERVEJA

    //OPEN-BAR INICIO

    var select = document.querySelector('#open-bar')
    var option = select.children[select.selectedIndex];
    var openbarescolhido = option.textContent;

    var precoopenbar = 0

    if(openbarescolhido=== 'Sem Open-Bar'){
        precoopenbar += 0
    }
    if(openbarescolhido=== 'Com Open-Bar'&& totconv<30){
        precoopenbar += (50*30)/totconv
    }
    if(openbarescolhido=== 'Com Open-Bar'&& totconv>=30 && totconv<=99){
        precoopenbar += 50
    }
    if(openbarescolhido=== 'Com Open-Bar'&& totconv>=100 && totconv<=200){
        precoopenbar += 45
    }
    //OPEN-BAR FINAL


    //TOALHA INICIO
    var select = document.querySelector('#toalhas')
    var option = select.children[select.selectedIndex];
    var toalhaEscolhida = option.textContent;

    var precotoalha = 0

    if(toalhaEscolhida=== 'Sem Aluguel de Toalhas'){
        precotoalha += 0
    }
    if(toalhaEscolhida=== 'Toalha Branca Lisa'){
        precotoalha += 10
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
    //TOALHA FINAL

    // UNIFICAÇÃO PARA O TOTAL

    var precoconv1 = precoconv.toFixed(2).replace('.',',')
    var precocerva1 = precocerva.toFixed(2).replace('.',',')
    var precoopenbar1 = precoopenbar.toFixed(2).replace('.',',')

        // preço por toalha 
    var precoportoalha = precotoalha.toFixed(2).replace('.',',')
    var n_de_toalhas = parseInt(totconv/4)

    var preco_total_toalhas = parseInt(precoportoalha)*parseInt(n_de_toalhas)
    var preco_total_toalhas1 = preco_total_toalhas.toFixed(2).replace('.',',')

        // preço por convidado
    var precoporconvtotal = precoconv + precocerva + precoopenbar + preço_mes
    var precoporconvtotal_compontos = precoporconvtotal.toFixed(2).replace('.',',')
            // preço por convidado meia
    var precoporconvidadomeia = precoporconvtotal/2
    var precoporconvidadomeia_compontos = precoporconvidadomeia.toFixed(2).replace('.',',')

        // preço total
    var preco_total = (precoporconvtotal*integrais) + (precoporconvidadomeia*meias) + preco_total_toalhas 
    var preco_total_compontos = preco_total.toFixed(2).replace('.',',')
    

    res.innerHTML = `Orçamento Barreto's Buffet<br><br>

    Data do Evento📆: ${data_nova}<br><br><br>
    
    Cardápio Escolhido🍽️: ${cardapioescolhido}<br><br>
    Cerveja Escolhida🍺: ${cervejaescolhida}<br><br>
    Open-Bar Escolhido🍹: ${openbarescolhido}<br><br><br>

    Convidados Integrais: ${integrais}<br><br>
    Convidados Meias: ${meias}<br><br><br>

    Toalha Escolhida : ${toalhaEscolhida} <br><br>
    Preço por Toalha : R$ ${precoportoalha} <br><br>
    Nº de Toalhas :  ${n_de_toalhas} unidades <br><br>
    Preço Total de Toalhas : R$ ${preco_total_toalhas1}<br><br><br>


    Preço por Convidado (INTEIRA):R$ ${precoporconvtotal_compontos} <br><br>
    Preço por Convidado (MEIA):R$ ${precoporconvidadomeia_compontos}<br><br>
    Preço Total💸: R$${preco_total_compontos} `

    
}




