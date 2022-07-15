function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length == 0 || Number(fano.value) > ano){ 
    window.alert('[ERRO] Verifique os dados e tente novamente!')} 
else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //CRIANCA
            img.setAttribute('src','menino.jpg' )
        }else if(idade < 20 ){
            //jovem
            img.setAttribute('src','jovemh.jpg' )
        }else if (idade < 45){
            //adulto
            img.setAttribute('src','adulto.jpg' )
        }else{
            //idoso
            img.setAttribute('src','idoso.jpg' )
        }
        
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //CRIANCA
            img.setAttribute('src','menina.jpg' )
        }else if(idade < 20 ){
            //jovem
            img.setAttribute('src','jovemm.jpg' )
        }else if (idade < 45){
            //adulto
            img.setAttribute('src','adulta.jpg' )
        }else{
            //idoso
            img.setAttribute('src','idosa.jpg' )
        }
    }
    res.style.textAlign ='center'
    res.innerHTML =`detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)



}
}





