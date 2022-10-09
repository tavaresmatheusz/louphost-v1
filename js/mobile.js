function openMenu(){ 
    var menu = document.getElementById('mobile-nav')
    var menubtn = document.getElementById('responsive-navbar')
    menu.style.display = 'block'
    menubtn.style.display = 'none'
}
function closeMenu(){ 
    var menu = document.getElementById('mobile-nav')
    var menubtn = document.getElementById('responsive-navbar')
    menu.style.display = 'none'
    menubtn.style.display = 'block'
}