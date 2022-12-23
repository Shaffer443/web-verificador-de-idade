function verificar(){
    //alert("teste")

    let atual = new Date()
    let anoatual = atual.getFullYear()

    //pegando dados da caixa do ano de nascimento

    let pegandoAno = document.getElementById("ano")
                                             
    
    //resultado
    let res = document.getElementById("resultado")

           //.value.lenght -> pegando os dados digitado e testando
                                                    // .value -> apenas pegando o dado e comparando
    if(pegandoAno.value.length == 0 ||  pegandoAno.value > anoatual){
         alert('Verifique os dados e tente novamente')
    }else{
        //como esta no plural 'Elements' o [0] = Masculino e [1] Feminino
        let genero = document.getElementsByName('genero') 
        let idade = anoatual - Number(pegandoAno.value) //valor digitado na caixa de ano
        //verificando o genero da pessoa
        let verificaGenero = ``
        // criando imagem dinâmicamente
        let img = document.createElement('img') //Criando tag 'img'
            img.style.maxWidth='500px'
            img.style.maxHeight='500px'
            img.style.borderRadius='10px 10px 10px'
            img.style.marginTop = '20px'
            img.setAttribute('img', 'foto') 

        if(genero[0].checked){ //qual foi marcado
            verificaGenero = 'Homem'
            //carregando a imagem de acordo com os dados
            if(idade < 2){
                //bebe
                verificaGenero = 'Bebê'
                img.setAttribute('src', 'modelo02img/bebe_unisex.jpg')
            }else if (idade >= 2 && idade < 8){
                //criança
                verificaGenero = 'Criança'
                img.setAttribute('src', 'modelo02img/crianca_dois_em_um.jpg')
            }else if(idade >=8 && idade < 13){
                //adolecente
                verificaGenero = 'Adolecente'
                img.setAttribute('src', 'modelo02img/adolecente_homem.jpg')
            }else if(idade >= 13 && idade <=18){
                //jovem
                verificaGenero = 'Jovem'
                img.setAttribute('src', 'modelo02img/jovem_homem.jpg')
            }else if(idade >= 18 && idade < 65){
                //adulto
                img.setAttribute('src', 'modelo02img/homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'modelo02img/idoso.jpg')
            }

        }else if (genero[1].checked){
            verificaGenero = 'Mulher'
            //carregando a imagem de acordo com os dados
            if(idade < 2){
                //bebe
                verificaGenero = 'Bebê'
                img.setAttribute('src', 'modelo02img/bebe_unisex.jpg')
            }else if (idade >= 2 && idade < 8){
                //criança
                verificaGenero = 'Criança'
                img.setAttribute('src', 'modelo02img/crianca_dois_em_um.jpg')
            }else if(idade >=8 && idade < 13){
                //adolecente
                verificaGenero = 'Adolecente'
                img.setAttribute('src', 'modelo02img/adolecente_mulher.jpg')
            }else if(idade >= 13 && idade <=18){
                //jovem
                verificaGenero = 'Jovem'
                img.setAttribute('src', 'modelo02img/jovem_mulher.jpg')
            }else if(idade >= 18 && idade < 65){
                //adulto
                img.setAttribute('src', 'modelo02img/mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'modelo02img/idosa.jpg')
            }
        }


        //teste
        //res.innerHTML = `Idade atual ${idade} ano(s)`
        res.innerHTML = `${verificaGenero} com ${idade} ano(s)</br></br>`
        res.appendChild(img)
    }


}