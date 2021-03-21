let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {

    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }

}

function add() {

     if (isNumero(num.value) && !inLista(num.value, valores)) {

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''     
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()

}


function finalizer() {
    
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {

        let total = valores.length

        let maiorValor = valores.reduce(function(a, b) {
            return Math.max(a, b);
        });

        let menorValor = valores.reduce(function(a, b) {
            return Math.min(a, b);
        });

        let somaValor = valores.reduce(function(a, b) {
                return a + b
        });

        let mediaValor = valores.reduce(function(a, b) {
                  return (a + b) / valores.length
            });

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>` 
        res.innerHTML += `<p>O maior valor informado foi ${maiorValor}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorValor}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${somaValor}. </p>`
        res.innerHTML += `<p>A média dos valores listados foi ${mediaValor}. </p>`
    }
}