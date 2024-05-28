
let link = "https://rickandmortyapi.com/api/character"

async function getNameAndImg(){
    let data = await fetch(link);
    // console.log(data)
    let result = await data.json()
    console.log(result)
    let res = result.results
    console.log(res)
    let collection = res.forEach(element => {
        console.log(element)
   

    let div = document.createElement("div")
    div.style.display = "flex"
    let character = document.createElement("h4")
    let image = document.createElement("img")
    div.appendChild(image)
    div.appendChild(character)
    div.className = "box"
    // document.body.appendChild(div)
    document.querySelector(".container").appendChild(div);
    character.textContent = element.name;
    image.src = element.image


})
}
getNameAndImg()