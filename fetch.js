// fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(response=> response.json())
// .then(data=> console.log(data))
// .catch((error)=>console.log(error))

let submit = async ()=>{
    let value = document.getElementById('input').value.trim()
    let image = document.getElementById('image')
    // let show = document.getElementById('show')
    value = value.toLowerCase()
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    let data = await response.json()
    image.setAttribute("src",data.sprites.front_default)
    value=""
}




