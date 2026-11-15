
function verificar() {

    var data = new Date()
    var anoAtual = data.getFullYear()

    var campoAno = document.getElementById('textano')
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('radiosex')

    var ano = Number(campoAno.value)

    // Verificar os dados
    if (campoAno.value.length == 0 || ano > anoAtual || ano <= 0) {
        window.alert('Verifica o ano de nascimento!')
        return
    }

    if (!fsex[0].checked && !fsex[1].checked) {
        window.alert('Seleciona o sexo!')
        return
    }

    // Calcular idade
    var idade = anoAtual - ano
    var genero = ''
    var imagem = ''

    if (fsex[0].checked) {
        genero = 'Homem'
    } else {
        genero = 'Mulher'
    }

    // Classificar idade
    if (idade < 10) {
        classificacao = 'Criança'

        if (fsex[0].checked) {
            imagem = 'crianca-menino.jpg'
        } else {
            imagem = 'crianca menina.jpg'
        }

    } else if (idade < 21) {
        classificacao = 'jovem'

        if (fsex[0].checked) {
            imagem = 'jovem-homen.jpg'
        } else {
            imagem = 'jovem-mulher.jpg'
        }

    } else if (idade < 58) {
        classificacao = 'Adulto'

        if (fsex[0].checked) {
            imagem = 'avo-homen.jpg'
        } else {
            imagem = 'avo-mulher.jpg'
        }

    } else {
        classificacao = 'Idoso'

        if (fsex[0].checked) {
            imagem = 'avo-homen.jpg'
        } else {
            imagem = 'avo-mulher.jpg'
        }
    }

    // Mostrar resultado e imagem
    res.innerHTML = `
        <p>Detectamos ${genero} com ${idade} anos.</p>
        <p>Classificação: ${classificacao}.</p>
        <img src="imagens/${imagem}" width="250" alt="${classificacao}">
    `
}

