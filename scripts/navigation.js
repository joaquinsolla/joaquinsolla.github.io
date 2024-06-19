function showPopUpNav() {
    var popUpNav = document.getElementById('pop_up_nav');

    if (popUpNav.style.display === 'none' || popUpNav.style.display === '') {
        popUpNav.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Bloquea el scroll
        // window.scrollTo(0, 0); // Coloca la página en la parte superior
    } else {
        popUpNav.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura el scroll
    }
}