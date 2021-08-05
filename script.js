function sendApiRequest(){
    const userInput = document.getElementById('input').value
    console.log(userInput)
    const API_KEY = '6d2JEoEClUYde0yyLKRpbUjXFBI8t5mL'
    const giphyApiUrl = `http://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${API_KEY}&limit=5`
    fetch(giphyApiUrl).then(function(data) {
        return data.json()
    })
    .then(function(json){
        console.log(json.data[0].images.fixed_height.url)
        let imgPath = json.data[0].images.fixed_height.url
        let img = document.createElement("img")
        img.setAttribute("src", imgPath)
        document.body.appendChild(img)
    });
};