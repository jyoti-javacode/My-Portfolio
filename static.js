// Corrected Version
var headerElement = document.getElementsByTagName('header')[0]; // Target the first 'header' element

headerElement.innerHTML = `
    <nav>
        <div class="left">Jyoti's Portfolio</div>
        <div class="nav__toggle" id="nav-toggle">
            <img src="/img/menu.png" alt="Menu">
        </div>
        <ul id="nav-menu">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/About.html">About</a></li>
            <li><a href="/Service.html">Services</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/Contact.html">Contact Me</a></li>
            <div class="nav__close" id="nav-close">
            <img src="/img/close.png" alt="Close">
            </div>
            </ul>
            </nav>
            `;


var footerElement = document.getElementsByTagName('footer')[0];

footerElement.innerHTML = `<div class="footer">
            <div class="footer-first">
                <h3>Jyoti's Developer Portfolio</h3>
            </div>
            <div class="footer-second">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="footer-third">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="footer-fourth">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div class="footer-rights">
            Copyright &#169; jyotisportfolio.com | All rights reserved
        </div>`;