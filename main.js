let url = "https://coffee.alexflipnote.dev/random.json"
fetch(url)
.then(response => response.json() )
.then(result =>{
    console.log(result.file);
    let mg =  document.querySelector(".image")
     mg.src = result.file

})


