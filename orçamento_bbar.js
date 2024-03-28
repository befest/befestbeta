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

    var int = document.querySelector('#convint')
    var integrais = Number(int.value)
    var totconv = integrais

    if(totconv>200){
        alert('O número de convidados é 200 convidados ou mais , entre em contato conosco para negociarmos melhor o preço!')
    }
    var select = document.querySelector('#open-bar')
    var option = select.children[select.selectedIndex];
    var cardapioescolhido = option.textContent;

    var precoconv = 0

    // CARDÁPIO OPEN-BAR I //

    if(cardapioescolhido === 'Open-Bar I' && totconv<30){
        precoconv += (30*30)/totconv
    }
    if(cardapioescolhido === 'Open-Bar I' && totconv>=30 && totconv<=70){
        precoconv += 30
    }
    if(cardapioescolhido === 'Open-Bar I' && totconv>=71 && totconv<=150){
       precoconv += 25
    }   
    // FINAL DO CARDÁPIO OPEN-BAR I //

     // CARDÁPIO OPEN-BAR II ///

     if(cardapioescolhido === 'Open-Bar II' && totconv<30){
        precoconv += (30*30)/totconv
    }
    if(cardapioescolhido === 'Open-Bar II' && totconv>=30 && totconv<=70){
        precoconv += 40
    }
    if(cardapioescolhido === 'Open-Bar II' && totconv>=71 && totconv<=150){
       precoconv += 35
    }   
    // FINAL DO CARDÁPIO OPEN-BAR II //



      // CARDÁPIO OPEN-BAR III ///

      if(cardapioescolhido === 'Open-Bar III' && totconv<30){
        precoconv += (55*30)/totconv
    }
    if(cardapioescolhido === 'Open-Bar II' && totconv>=30 && totconv<=70){
        precoconv += 55
    }
    if(cardapioescolhido === 'Open-Bar II' && totconv>=71 && totconv<=150){
       precoconv += 50
    }   
    // FINAL DO CARDÁPIO OPEN-BAR III //



    // CARDÁPIO OPEN-BAR III ///

    if(cardapioescolhido === 'Open-Bar III' && totconv<30){
        precoconv += (55*30)/totconv
    }
    if(cardapioescolhido === 'Open-Bar II' && totconv>=30 && totconv<=70){
        precoconv += 55
    }
    if(cardapioescolhido === 'Open-Bar II' && totconv>=71 && totconv<=150){
       precoconv += 50
    }   
    // FINAL DO CARDÁPIO OPEN-BAR III //


    // CARDÁPIO OPEN-BAR IV ///

    if(cardapioescolhido === 'Open-Bar IV' && totconv<30){
        precoconv += (55*30)/totconv
    }
    if(cardapioescolhido === 'Open-Bar IV' && totconv>=30 && totconv<=70){
        precoconv += 55
    }
    if(cardapioescolhido === 'Open-Bar IV' && totconv>=71 && totconv<=150){
       precoconv += 50
    }   
    // FINAL DO CARDÁPIO OPEN-BAR III //

    var preco_total = precoconv*totconv
    var preco_total1 = preco_total.toFixed(2).replace('.',',')

    res.innerHTML = `Data : ${data_nova}<br><br>
    Nº de Convidados : ${totconv}<br><br>
    Cardápio Escolhido : ${cardapioescolhido}<br><br>
    Preço por Convidado : R$ ${precoconv}<br><br>
    Preço Total : R$ ${preco_total1}`




}
