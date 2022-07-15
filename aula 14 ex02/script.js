function tabuada(){
var numero = document.getElementById('numero')
var res = document.getElementById('res')
if ( numero.value.length == 0){window.alert('[ERRO]')}
 else {
var n = Number(numero.value)
res.innerHTML = ''
for(var x = 1; x <= 10; x++){
var item = document.createElement('option')
item.text = `${n} x ${x} = ${n*x}`
item.value = `tab${x}`
res.appendChild(item)





 }
 }
}
