function navigatePage(x) {
    window.location.replace(x + ".html");
    sessionStorage.setItem('page', x)
}
