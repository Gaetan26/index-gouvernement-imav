function addItemWidget(item) {
    const div = document.createElement('div')
    div.classList.add('item')

    const span = document.createElement('span')
    span.classList.add('label')
    span.innerText = item.label

    const h2 = document.createElement('h2')
    h2.classList.add('title')
    h2.innerText = item.title

    const p = document.createElement('p')
    p.classList.add('desc')
    p.innerText = item.description

    const button = document.createElement('button')
    const a = document.createElement('a')
    a.href = baseURL + "uploaded/" + item.src
    a.download = item.download_name
    a.innerText = "Télécharger"
    button.appendChild(a)

    div.appendChild(span)
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(button)
    itemsContainer.appendChild(div)
}


const itemsContainer = document.querySelector('#itemsContainer')
const baseURL = "http://localhost:5500/"
const requestURL = baseURL + "uploaded/datas.json"
let request = new XMLHttpRequest()
let items = new Array()

request.open("GET", requestURL)
request.responseType = "json"
request.send()

request.onload = () => {
    items = request.response
    items.forEach(element => {
        addItemWidget(element)
    });
}