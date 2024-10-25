const url = 'https://raw.githubusercontent.com/romulopena/ciencia-de-dados/refs/heads/main/basededados/educacao-dados-globais.json'

async function visualizarInformacoesGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasComAcesso = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    //const minutos = Math.round((dados.tempo_medio_dia_estudando - horas) * 100)
    const pessoasEstudando = ((pessoasComAcesso / pessoasNoMundo) * 100).toFixed(2)
    //console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem mais de <span>${100}</span> marcas de carros esportivos pelo mundo?'
    //console.log(paragrafo)
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais();