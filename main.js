let menu=document.getElementById('menu')
// let menus=document.getElementById('menu2')
let links=document.getElementById('links')

menu.addEventListener('click',()=>{
    links.classList.toggle('links')
    menu.classList.toggle('rotate')
    menu.classList.toggle('rotates')
    
})