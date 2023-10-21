function realizar_orçamento(){
    let n_convidados = document.getElementById('num_convidados').value

    var data = document.querySelector('input#data').value;
    var data_nova = data.split('-').reverse().join('/')

    if(n_convidados<30){
        var preço_convidado = 2500/n_convidados
    }
    if(n_convidados>=30 && n_convidados<50){
        var preço_convidado = 3000/n_convidados
    }
    if(n_convidados>=50 && n_convidados<100){
        var preço_convidado = 3500/n_convidados
    }
    if(n_convidados>=100 && n_convidados<200){
        var preço_convidado = 4000/n_convidados
    }


    let preço_convidado1 = preço_convidado.toFixed(2).replace('.',',')
    
    let preço_total = preço_convidado*n_convidados
    let preço_total1 = preço_total.toFixed(2).replace('.',',')
    

    resultado.innerHTML =`Orçamento Realizado<br><br>Data : ${data_nova}<br>
    Preço por Pessoa :  R$ ${preço_convidado1}<br>
    Preço Total : R$ ${preço_total1} `
}