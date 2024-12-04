document.addEventListener('DOMContentLoaded', () => {
    const headerTemplate = document.getElementById('header-template').content;
    const footerTemplate = document.getElementById('footer-template').content;

    document.getElementById('header').appendChild(headerTemplate.cloneNode(true));
    document.getElementById('footer').appendChild(footerTemplate.cloneNode(true));
});