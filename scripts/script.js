async function buscaPaises () {
    try{const paises = await fetch('https://restcountries.com/v3.1/all');
    const paisesconvertidos = await paises.json()
    const arrayPaises = paisesconvertidos
    console.log(paisesconvertidos)
    return arrayPaises
    }
    catch(error){
        console.log(error)
    }
}
async function renderizaPaises(){
    const listaPaises = await buscaPaises()
    const cardPais =  listaPaises.map(item =>{
        return `<div class="card">
        <div class="bandeira"><img src="${item.flags.png}", alt+"Bandeira de ${item.name.common}"></div>
        <div class="conteudo">
            <h2>${item.name.common}</h2>
            <hr>
            <h4> População: ${item.population}
            <h4> Capital: ${item.capital}
            <h4> Região: ${item.region}
            
            
        </div>
        </div>`
    })
    const container = document.querySelector('.container')
    container.innerHTML = cardPais.join('')
}


renderizaPaises()