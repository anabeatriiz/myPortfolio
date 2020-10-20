import React from 'react'

import "../Footer/style.css";


const Footer = () => {
    return (
        <div className="teste">
        <footer class="footer_container">
            Copyright &copy; 2020 | Develop by Ana Beatriz

            <ul class="box_links">
                <li class="list_links">
                    <a href="https://www.linkedin.com/in/ana-beatriiz/" target="_blank"><img class="icons"
                            src="./img/icon-linkedin.png" alt="icone do linkedin" /></a>
                </li>

                <li>
                    <a href="https://github.com/anabeatriiz" target="_blank"><img class="icons"
                            src="./img/icon-github.png" alt="icone do github" /></a>
                </li>
            </ul>
        </footer>
        </div>
    )
}

export default Footer;
