import { getCSS, tickConfig } from "./common.js"
async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/romulopena/ciencia-de-dados/refs/heads/main/basededados/educacao-etapas-de-ensino.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasInstituicoes = Object.keys(dados)
    const quantidadeAlunos = Object.values(dados)
    
    const data = [
        {
            x: nomeDasInstituicoes,
            y: quantidadeAlunos,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }

        }
    ]
    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Marcas e crros esporivos mais compradas no mundo atualmente (2024)',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }

        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Tipos de marcas',
                size: 20,
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'marcas caras',
                size:20,
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}
quantidadeUsuarios();