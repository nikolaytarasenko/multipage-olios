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

    // zoom image on the product page
    const zoomSizes = [
        'scale(0.7)',
        'scale(0.8)',
        'scale(0.9)',
        'scale(1)',
        'scale(1.1)',
        'scale(1.2)',
        'scale(1.3)'
    ];
    const productBigImage = document.querySelector('.product__img');
    const zoomIn = document.querySelector('.zoom__plus');
    const zoomOut = document.querySelector('.zoom__minus');

    productBigImage.style.transform = zoomSizes[Math.floor(zoomSizes.length / 2)];

    zoomIn.addEventListener('click', function(e) {
        const currentZoom = productBigImage.style.transform;
        const currentZoomIndex = zoomSizes.indexOf(currentZoom);

        return (zoomSizes[currentZoomIndex + 1]) ? productBigImage.style.transform = zoomSizes[currentZoomIndex + 1] : false;
    });

    zoomOut.addEventListener('click', function(e) {
        const currentZoom = productBigImage.style.transform;
        const currentZoomIndex = zoomSizes.indexOf(currentZoom);

        return (zoomSizes[currentZoomIndex - 1]) ? productBigImage.style.transform = zoomSizes[currentZoomIndex - 1] : false;
    });
})();
