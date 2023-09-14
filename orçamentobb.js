function execucao(){
    var mei = document.querySelector('#convmeia')
    var int = document.querySelector('#convint')
    var integrais = Number(int.value)
    var meias = Number(mei.value)
    var totconv = integrais + meias

    var select = document.querySelector('#cardapios')
    var option = select.children[select.selectedIndex];
    var cardapioescolhido = option.textContent;

    var precoconv = 0

    // CARDÁPIO CHURRAS MASTER //

    if(cardapioescolhido === 'Churras Master' && totconv<30){
        precoconv += 195
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
    if(cardapioescolhido === 'Churras Master' && totconv>=130 && totconv<=150){
        precoconv += 105
    }

    // FINAL DO CARDÁPIO CHURRAS MASTER //

    // CARDÁPIO CHURRAS GOLD //

    if(cardapioescolhido === 'Churras Gold' && totconv<30){
        precoconv += 155
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=30 && totconv<=49){
        precoconv += 90
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=50 && totconv<=69){
        precoconv += 85
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=70 && totconv<=89){
        precoconv += 80
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=90 && totconv<=109){
        precoconv += 75
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=110 && totconv<=129){
        precoconv += 72.5
    }
    if(cardapioescolhido === 'Churras Gold' && totconv>=130 && totconv<=150){
        precoconv += 70
    }

    // FINAL DO CARDÁPIO CHURRAS GOLD

    // CARDÁPIO CHURRAS SILVER //

    if(cardapioescolhido === 'Churras Silver' && totconv<30){
        precoconv += 145
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
    if(cardapioescolhido === 'Churras Silver' && totconv>=130 && totconv<=150){
        precoconv += 65
    }


    // FINAL DO CARDÁPIO CHURRAS SILVER //

    // CARDÁPIO DE ALMOÇO/JANTAR //

    if(cardapioescolhido === 'Almoço/Jantar' && totconv<30){
        precoconv += 145
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
    if(cardapioescolhido === 'Almoço/Jantar' && totconv>=130 && totconv<=150){
        precoconv += 65
    }

    // FIM DO CARDÁPIO ALMOÇO/JANTAR //

    // CARDÁPIO DE FEIJOADA //

    if(cardapioescolhido === 'Feijoada' && totconv<30){
        precoconv+= 150
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=30 && totconv<=49){
        precoconv += 85
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=50 && totconv<=69){
        precoconv += 80
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=70 && totconv<=89){
        precoconv = 75
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=90 && totconv<=109){
        precoconv += 70
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=110 && totconv<=129){
        precoconv += 67.5
    }
    if(cardapioescolhido === 'Feijoada' && totconv>=130 && totconv<=150){
        precoconv += 65
    }

    // FIM DO CARDÁPIO DE FEIJOADA //

    // CARDÁPIO DE FESTA BOTEQUIM //

    if(cardapioescolhido === 'Festa Botequim' && totconv<30){
        precoconv += 140
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
    if(cardapioescolhido === 'Festa Botequim' && totconv>=130 && totconv<=150){
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
        precocerva += 10
    }
    if( cervejaescolhida=== 'Brahma Duplo/Puro Malte'){
        precocerva += 15
    }
    if( cervejaescolhida=== 'Antarctica Original'){
        precocerva += 15
    }
    if( cervejaescolhida=== 'Império'){
        precocerva += 20
    }
    if( cervejaescolhida=== 'Amstel'){
        precocerva += 15
    }
    if( cervejaescolhida=== 'Heineken'){
        precocerva += 30
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
    if(openbarescolhido=== 'Com Open-Bar'){
        precoopenbar += 20
    }




    //OPEN-BAR FINAL

    // UNIFICAÇÃO PARA O TOTAL

    var precoconv1 = precoconv.toFixed(2).replace('.',',')
    var precocerva1 = precocerva.toFixed(2).replace('.',',')
    var precoopenbar1 = precoopenbar.toFixed(2).replace('.',',')

        // preço por convidado
            
    var precoporconvtotal = precoconv + precocerva + precoopenbar
    var precoporconvtotal_compontos = precoporconvtotal.toFixed(2).replace('.',',')
            // preço por convidado meia
    var precoporconvidadomeia = precoporconvtotal/2
    var precoporconvidadomeia_compontos = precoporconvidadomeia.toFixed(2).replace('.',',')

        // preço total
    var preco_total = (precoporconvtotal*integrais) + (precoporconvidadomeia*meias)
    var preco_total_compontos = preco_total.toFixed(2).replace('.',',')
    

    res.innerHTML = `Orçamento Barreto's Buffet<br><br>

    Cardápio Escolhido: ${cardapioescolhido}<br><br>
    Cerveja Escolhida: ${cervejaescolhida}<br><br>
    Open-Bar Escolhido: ${openbarescolhido}<br><br>

    Convidados Integrais: ${integrais}<br><br>
    Convidados Meias: ${meias}<br><br>

    Preço por Convidado (INTEIRA):R$ ${precoporconvtotal_compontos} <br><br>
    Preço por Convidado (MEIA):R$ ${precoporconvidadomeia_compontos}<br><br>
    Preço Total: R$${preco_total_compontos} `

    
}



/*function execucao(){
    var select = document.querySelector('#cardapios');
    var option = select.children[select.selectedIndex];
    var texto = option.textContent;

    

    var mei = document.querySelector('#convmeia')
    var int = document.querySelector('#convint')
    var integrais = Number(int.value)
    var meias = Number(mei.value)
    var totconv = integrais + meias


    //Restrição do Churras Master

    if(texto === 'Churras Master' && totconv<30){
        var precoconv = 195
    }
    if(texto === 'Churras Master' && totconv>=30 && totconv<=50){
        var precoconv = 125
    }
    if(texto === 'Churras Master' && totconv>=51 && totconv<=70){
        var precoconv = 120
    }
    if(texto === 'Churras Master' && totconv>=71 && totconv<=90){
        var precoconv = 115
    }
    if(texto === 'Churras Master' && totconv>=91 && totconv<=110){
        var precoconv = 110
    }
    if(texto === 'Churras Master' && totconv>=111 && totconv<=130){
        var precoconv = 107.5
    }
    if(texto === 'Churras Master' && totconv>=131 && totconv<=150){
        var precoconv = 105
    }

    //Fim da Restrição do Churras Master

    //Restrição do Churras Gold

    if(texto === 'Churras Gold' && totconv<30){
        var precoconv = 155
    }
    if(texto === 'Churras Gold' && totconv>=30 && totconv<=50){
        var precoconv = 90
    }
    if(texto === 'Churras Gold' && totconv>=51 && totconv<=70){
        var precoconv = 85
    }
    if(texto === 'Churras Gold' && totconv>=71 && totconv<=90){
        var precoconv = 80
    }
    if(texto === 'Churras Gold' && totconv>=91 && totconv<=110){
        var precoconv = 75
    }
    if(texto === 'Churras Gold' && totconv>=111 && totconv<=130){
        var precoconv = 72.5
    }
    if(texto === 'Churras Gold' && totconv>=131 && totconv<=150){
        var precoconv = 70
    }

    //Fim da Restrição do Churras Gold
    

    //Restrições do Churras Silver

    if(texto === 'Churras Silver' && totconv<30){
        var precoconv = 145
    }
    if(texto === 'Churras Silver' && totconv>=30 && totconv<=50){
        var precoconv = 85
    }
    if(texto === 'Churras Silver' && totconv>=51 && totconv<=70){
        var precoconv = 80
    }
    if(texto === 'Churras Silver' && totconv>=71 && totconv<=90){
        var precoconv = 75
    }
    if(texto === 'Churras Silver' && totconv>=91 && totconv<=110){
        var precoconv = 70
    }
    if(texto === 'Churras Silver' && totconv>=111 && totconv<=130){
        var precoconv = 67.5
    }
    if(texto === 'Churras Silver' && totconv>=131 && totconv<=150){
        var precoconv = 65
    }

    //Fim da Restrição do Churras Silver


    //Restrições do Almoço/Jantar

    if(texto === 'Almoço/Jantar' && totconv<30){
        var precoconv = 145.5
    }
    if(texto === 'Almoço/Jantar' && totconv>=30 && totconv<=50){
        var precoconv = 85
    }
    if(texto === 'Almoço/Jantar' && totconv>=51 && totconv<=70){
        var precoconv = 80
    }
    if(texto === 'Almoço/Jantar' && totconv>=71 && totconv<=90){
        var precoconv = 75
    }
    if(texto === 'Almoço/Jantar' && totconv>=91 && totconv<=110){
        var precoconv = 70
    }
    if(texto === 'Almoço/Jantar' && totconv>=111 && totconv<=130){
        var precoconv = 67.5
    }
    if(texto === 'Almoço/Jantar' && totconv>=131 && totconv<=150){
        var precoconv = 65
    }

    //Fim da Restrição Almoço/Jantar



    //Restrições do Feijoada

    if(texto === 'Feijoada' && totconv<30){
        var precoconv = 150
    }
    if(texto === 'Feijoada' && totconv>=30 && totconv<=50){
        var precoconv = 85
    }
    if(texto === 'Feijoada' && totconv>=51 && totconv<=70){
        var precoconv = 80
    }
    if(texto === 'Feijoada' && totconv>=71 && totconv<=90){
        var precoconv = 75
    }
    if(texto === 'Feijoada' && totconv>=91 && totconv<=110){
        var precoconv = 70
    }
    if(texto === 'Feijoada' && totconv>=111 && totconv<=130){
        var precoconv = 67.5
    }
    if(texto === 'Feijoada' && totconv>=131 && totconv<=150){
        var precoconv = 65
    }
    
    //Fim das Restrições de Feijoada
    
    //Restrições de Festa Botequim

    if(texto === 'Festa Botequim' && totconv<30){
        var precoconv = 140
    }
    if(texto === 'Festa Botequim' && totconv>=30 && totconv<=50){
        var precoconv = 80
    }
    if(texto === 'Festa Botequim' && totconv>=51 && totconv<=70){
        var precoconv = 75
    }
    if(texto === 'Festa Botequim' && totconv>=71 && totconv<=90){
        var precoconv = 70
    }
    if(texto === 'Festa Botequim' && totconv>=91 && totconv<=110){
        var precoconv = 65
    }
    if(texto === 'Festa Botequim' && totconv>=111 && totconv<=130){
        var precoconv = 62.5
    }
    if(texto === 'Festa Botequim' && totconv>=131 && totconv<=150){
        var precoconv = 60
    }

    //Fim das Restrições de Festa Botequim


    //Escolha de Cerveja
    var select = document.querySelector('#cervejas');
    var option = select.children[select.selectedIndex];
    var cerva = option.textContent;
    if( cerva=== 'Sem Cerveja'){
        var precocerva = 0
    }
    if( cerva=== 'Brahma + Antarctica'){
        var precocerva = 10
    }
    if( cerva=== 'Brahma Duplo/Puro Malte'){
        var precocerva = 15
    }
    if( cerva=== 'Antarctica Original'){
        var precocerva = 15
    }
    if( cerva=== 'Império'){
        var precocerva = 20
    }
    if( cerva=== 'Amstel'){
        var precocerva = 15
    }
    if( cerva=== 'Heineken'){
        var precocerva = 30
    }
    if( cerva=== 'Corona'){
        var precocerva = 25
    }
    if( cerva=== 'Stella Artois'){
        var precocerva = 30
    }
    if( cerva=== 'Budweiser'){
        var precocerva = 25
    }
    if( cerva=== 'Bohemia'){
        var precocerva = 20
    }
    //CERVEJA FINALIZADA


    //Escolha de Open-Bar
    var select = document.querySelector('#open-bar');
    var option = select.children[select.selectedIndex];
    var openbar = option.textContent;
    if( openbar=== "Open-Bar"){
        var precoopen = 0
    }
    if( openbar=== "Com Open-Bar"){
        var precoopen = 20
    }
    if( openbar=== "Sem Open-Bar"){
        var precoopen = 0
    }

    
    var totprecoconv = precoconv + precocerva + precoopen
    var totprecoconv1 = totprecoconv.toFixed(2).replace('.',',')
    var precomeia = totprecoconv/2
    precomeia1 = precomeia.toFixed(2).replace('.',',')

    let precototal = (totprecoconv*integrais)+(precomeia*meias)
    precototal1 =  precototal.toFixed(2).replace('.',',')

    var horapreco = precototal/duracao
    horapreco1 = horapreco.toFixed(2).replace('.',',')




    res.innerHTML = `Cardápio: ${texto} 🍽️<br>
    Cerveja : ${cerva} 🍺 <br>
    Open-Bar: ${openbar} 🍹 <br><br>
    Preço Por Convidado (Integral) : R$ ${totprecoconv1} 🕺<br>
    Preço Por Convidado (Meia) : R$ ${precomeia1} 🧒<br><br>
    Preço Total : R$ ${precototal1} 💸 `

}*/

