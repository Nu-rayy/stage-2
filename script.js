let text = document.getElementById('text')
let leaf = document.getElementById('leaf')
let hill1 = document.getElementById('hill1')
let hill4 = document.getElementById('hill4')
let hill5 = document.getElementById('hill5')

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + "px"
    leaf.style.top = value * -1.5 + "px" // if we give positive value like(2.5) then item will move downwards and if we give negative valude like(-1.5) this will go upwards
    leaf.style.left = value * 1 + "px" 
    hill1.style.top = value * 1 + "px"
    hill4.style.left = value * -2 + "px"
    hill5.style.left = value * 2.5 + "px"
})