let burger = document.querySelector('.dropdown');
let menu = document.querySelector('.dropdownlinks')
function showMenu() {
    if (menu.style.display === 'block') {
    menu.style.display = 'none';
  }
  else {
      menu.style.display = 'block';
  }
}
burger.onclick = showMenu;