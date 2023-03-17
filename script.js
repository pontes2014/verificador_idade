function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano || fano.value<1800) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //crianca
                img.setAttribute('src', 'img/menino.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //crianca
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}