(function() {
    const hamburgerButton = document.querySelector('.hamburger__button');

    hamburgerButton.addEventListener('click', function(e) {
        this.classList.toggle('js-open');

        showMenu();
    });

    function showMenu() {
        const menu = document.querySelector('.menu');

        if (!menu.classList.contains('js-show')) {
            menu.classList.add('js-show');
        } else {
            menu.classList.remove('js-show');
        }
    }
})();
