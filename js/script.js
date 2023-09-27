function RedirecionarParaThanks(){
    notaSelec = Number(document.querySelector('input[name=selecao]:checked').value)
    url = `thanks.html?nota=${notaSelec}`
    window.location.href = url
}

window.addEventListener('DOMContentLoaded', function () {
    urlParams = new URLSearchParams(window.location.search)
    notaSelec = urlParams.get('nota')

    notaValorElement = document.getElementById('notaValor')
    notaValorElement.innerHTML = notaSelec
})