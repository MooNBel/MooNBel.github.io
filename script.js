function cambiarIdioma(esIngles) {
    var currentUrl = window.location.href;
    var newUrl;
    if (esIngles) {
        newUrl = currentUrl.replace('/index.html', '/index_en.html');
    } else {
        newUrl = currentUrl.replace('/index_en.html', '/index.html');
    }

    setTimeout(function() {
        window.location.href = newUrl;
    }, 500); // 1000 mili segundos = 1 segundo
}

// Obtener el interruptor y la etiqueta de texto en inglés
var switcherToggle = document.getElementById('switcher-toggle');
var switcherTextEn = document.querySelector('.switcher-text--en');

// Verificar si la ruta contiene "index_en.html" y marcar el interruptor
if (window.location.pathname.includes('index_en.html')) {
    switcherToggle.checked = true;
    switcherTextEn.classList.add('active');
} else {
    switcherToggle.checked = false;
    switcherTextEn.classList.remove('active');
}