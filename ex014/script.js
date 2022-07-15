function carregar() {
var msg= document.getElementById('msg')
var img= document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `agora sao ${hora} Horas.` 
if(hora >= 0 && hora < 12  ) 
{ /* bom dia */
img.src = 'Manha.jpg'
document.body.style.backgroundColor = '#FFDEAD'

}  else if (hora >= 12 &&  hora <= 18) 
 { /* BOA TARDE */

img.src = 'Tarde.jpg'
document.body.style.background = '#F4A460'
} else {
 // boa noite
img. src = 'Noite.jpg'
document.body.style.background = '#1C1C1C'
}


}
