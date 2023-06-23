let btn = document.getElementById('btn');
let character = document.getElementById('character');
btn.addEventListener('click', myFunction);
async function myFunction(){
    let input = document.getElementById('input').value;
    let response = await fetch(`https://rickandmortyapi.com/api/character/${input}`);
    let data = await response.json();
    character.innerText = data.name;  
}

