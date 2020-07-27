/**
 * 
 * @param {*} name - nome da cerveja
 */
function searchByName(name) {
    var url = 'https://api.punkapi.com/v2/beers?beer_name=' + name
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        const res = document.querySelector(".res")
        const name = data[0].name
        const description = data[0].description
        const {volume} = data[0]
        const volumeValue =  volume.value
        const volumeUnit = volume.unit
        res.innerHTML = '<strong>Name:</strong> ' + name + ' <strong>Volume:</strong> ' + volumeValue + volumeUnit + '<br><strong>Description:</strong>' + description
    })
}

/**
 * 
 * @param {*} food - nome da comida a procurar por cerveja que seja "compativel" com a mesma
 */
function searchByFood(food) {
    var url = 'https://api.punkapi.com/v2/beers?food=' + food
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        const res = document.querySelector(".res")
        res.innerHTML = ""
        var i;
        for (i = 0; i < 25; i++){
            const name = data[i].name
            const description = data[i].description
            const {volume} = data[i]
            const volumeValue =  volume.value
            const volumeUnit = volume.unit
    
            res.innerHTML += '<strong>Name:</strong> ' + name + ' <strong>Volume:</strong> ' + volumeValue + volumeUnit + '<br><strong>Description:</strong>' + description + "<br>--------------------------------<br>"
        } 
        
    })
}

/**
 * 
 * @param {*} date - data limite para o fabrico de cerveja, no tipo mm-yyyy
 */
function BrewedBefore(date) {
    //Pensei criar uma objecto do tipo Date mas acho que nao e necessario
    console.log(date)
    var url = 'https://api.punkapi.com/v2/beers?brewed_before=' + date
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        const res = document.querySelector(".res")
        res.innerHTML = ""
        var i;
        for (i = 0; i < 25; i++){
            const name = data[i].name
            const description = data[i].description
            const {volume} = data[i]
            const volumeValue =  volume.value
            const volumeUnit = volume.unit
    
            res.innerHTML += '<strong>Name:</strong> ' + name + ' <strong>Volume:</strong> ' + volumeValue + volumeUnit + '<br><strong>Description:</strong>' + description + "<br>--------------------------------<br>"
        } 
    })
}
