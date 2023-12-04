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
        precoconv += (135*30)/totconv
    }
    if(cardapioescolhido === 'Churras Master' && totconv>=30 && totconv<=49){
        precoconv += 125
    }
    if(cardapioescolhido === 'Churras Master' && totconv>=50 && totconv<=69){
       precoconv += 120
    }
    if(cardapioescolhido === 'Churras Master' && totconv>=70 && totconv<=89){
       precoconv += 115
    }
    if(cardapioescolhido === 'Churras Master' && totconv>=90 && totconv<=109){
        precoconv += 110
    }
    if(cardapioescolhido === 'Churras Master' && totconv>=110 && totconv<=129){
        precoconv += 107.5
    }
    if(cardapioescolhido === 'Churras Master' && totconv>=130){
        precoconv += 105
    }

    // FINAL DO CARDÁPIO CHURRAS MASTER //

    // CARDÁPIO CHURRAS GOLD //

    if(cardapioescolhido === 'Churras Gold' && totconv<30){
        precoconv += (100*30)/totconv
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=30 && totconv<=70){
        precoconv += 90
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=71 && totconv<=100){
        precoconv += 85
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=101 && totconv<=120){
        precoconv += 80
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=121 && totconv<=150){
        precoconv += 75
    }
   

    // FINAL DO CARDÁPIO CHURRAS GOLD

    // CARDÁPIO CHURRAS SILVER //

    if(cardapioescolhido === 'Churras Silver' && totconv<30){
        precoconv += (95*30)/totconv
    }
    if(cardapioescolhido === 'Churras Silver' && totconv>=30 && totconv<=49){
        precoconv += 85
    }
    if(cardapioescolhido === 'Churras Silver' && totconv>=50 && totconv<=69){
        precoconv += 80
    }
    if(cardapioescolhido === 'Churras Silver' && totconv>=70 && totconv<=89){
        precoconv += 75
    }
    if(cardapioescolhido === 'Churras Silver' && totconv>=90 && totconv<=109){
        precoconv += 70
    }
    if(cardapioescolhido === 'Churras Silver' && totconv>=110 && totconv<=129){
        precoconv += 67.5
    }
    if(cardapioescolhido === 'Churras Silver' && totconv>=130){
        precoconv += 65
    }


    // FINAL DO CARDÁPIO CHURRAS SILVER //

    // CARDÁPIO DE ALMOÇO/JANTAR //

    if(cardapioescolhido === 'Almoço/Jantar' && totconv<30){
        precoconv += (95*30)/totconv
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=30 && totconv<=49){
        precoconv += 85
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=50 && totconv<=69){
        precoconv += 80
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=70 && totconv<=89){
        precoconv += 75
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=90 && totconv<=109){
        precoconv += 70
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=110 && totconv<=129){
        precoconv += 67.5
    }
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=130){
        precoconv += 65
    }

    // FIM DO CARDÁPIO ALMOÇO/JANTAR //

    // CARDÁPIO DE FEIJOADA //

    if(cardapioescolhido === 'Feijoada' && totconv<30){
        precoconv+= (95*30)/totconv
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=30 && totconv<=70){
        precoconv += 85
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=71 && totconv<=100){
        precoconv += 80
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=101 && totconv<=120){
        precoconv = 75
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=121 && totconv<=150){
        precoconv += 70
    }

    // FIM DO CARDÁPIO DE FEIJOADA //

    // CARDÁPIO DE FESTA BOTEQUIM //

    if(cardapioescolhido === 'Festa Botequim' && totconv<30){
        precoconv += (90*30)/totconv
    }
    if(cardapioescolhido === 'Festa Botequim' && totconv>=30 && totconv<=49){
        precoconv += 80
    }
    if(cardapioescolhido === 'Festa Botequim' && totconv>=50 && totconv<=69){
        precoconv += 75
    }
    if(cardapioescolhido === 'Festa Botequim' && totconv>=70 && totconv<=89){
        precoconv += 70
    }
    if(cardapioescolhido === 'Festa Botequim' && totconv>=90 && totconv<=109){
        precoconv += 65
    }
    if(cardapioescolhido === 'Festa Botequim' && totconv>=110 && totconv<=129){
        precoconv += 62.5
    }
    if(cardapioescolhido === 'Festa Botequim' && totconv>=130){
        precoconv += 60
    }

    // FIM DO CARDÁPIO DE FESTA BOTEQUIM //

    // COMEÇO DA ESCOLHA DA CERVEJA

    var select = document.querySelector('#cervejas')
    var option = select.children[select.selectedIndex];
    var cervejaescolhida = option.textContent;

    var precocerva = 0

    if( cervejaescolhida === 'Sem Cerveja'){
        precocerva += 0
    }
    if( cervejaescolhida=== 'Brahma + Antarctica'){
        precocerva += 20
    }
    if( cervejaescolhida=== 'Brahma Duplo/Puro Malte'){
        precocerva += 25
    }
    if( cervejaescolhida=== 'Antarctica Original'){
        precocerva += 25
    }
    if( cervejaescolhida=== 'Império'){
        precocerva += 30
    }
    if( cervejaescolhida=== 'Amstel'){
        precocerva += 25
    }
    if( cervejaescolhida=== 'Heineken'){
        precocerva += 45
    }
    if( cervejaescolhida=== 'Corona'){
        precocerva += 35
    }
    if( cervejaescolhida=== 'Stella Artois'){
        precocerva += 40
    }
    if( cervejaescolhida=== 'Budweiser'){
        precocerva += 35
    }
    if( cervejaescolhida=== 'Bohemia'){
        precocerva += 30
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
    if(openbarescolhido=== 'Com Open-Bar'){
        precoopenbar += 25
    }




    //OPEN-BAR FINAL

    // UNIFICAÇÃO PARA O TOTAL

    var precoconv1 = precoconv.toFixed(2).replace('.',',')
    var precocerva1 = precocerva.toFixed(2).replace('.',',')
    var precoopenbar1 = precoopenbar.toFixed(2).replace('.',',')

        // preço por convidado
            
    var precoporconvtotal = precoconv + precocerva + precoopenbar + preço_mes
    var precoporconvtotal_compontos = precoporconvtotal.toFixed(2).replace('.',',')
            // preço por convidado meia
    var precoporconvidadomeia = precoporconvtotal/2
    var precoporconvidadomeia_compontos = precoporconvidadomeia.toFixed(2).replace('.',',')

        // preço total
    var preco_total = (precoporconvtotal*integrais) + (precoporconvidadomeia*meias)
    var preco_total_compontos = preco_total.toFixed(2).replace('.',',')
    

    res.innerHTML = `ORÇAMENTO BARRETO'S BUFFET🔴⚪<br><br>

    Data do Evento📆: ${data_nova}<br><br>
    
    Cardápio Escolhido🍽️: ${cardapioescolhido}<br><br>
    Cerveja Escolhida🍺: ${cervejaescolhida}<br><br>
    Open-Bar Escolhido🍹: ${openbarescolhido}<br><br>

    Convidados Integrais: ${integrais}<br><br>
    Convidados Meias: ${meias}<br><br>

    Preço por Convidado (INTEIRA):R$ ${precoporconvtotal_compontos} <br><br>
    Preço por Convidado (MEIA):R$ ${precoporconvidadomeia_compontos}<br><br>
    Preço Total💸: R$${preco_total_compontos} `

    
}



