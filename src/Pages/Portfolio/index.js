import React from 'react';

import "../Portfolio/style.css"

import imgCounter from "../../assets/counter.png";
import imgEnsaioPet from "../../assets/ensaioPet.png";
import imgError from "../../assets/error404.png";
import imgMessage from "../../assets/messageGenerator.png";
import { Link } from 'react-router-dom';




const Portfolio = () => {
    
    return (
        
    <section className="section-portfolio">

        <main className="box_cards">
        
        <div className="cards">

            <div className="box_image-portfolio">
                <img className="img_cards" src={imgEnsaioPet} alt="Ensaio pet"/>
            </div>

            <div className="description">
                <h4 className="title_description">Ensaio pet</h4>
                <p className="paragraph_tecnologias">html5, css3</p>
                <a className="link_project" href="https://anabeatriiz.github.io/ensaio-pet/"
                    target="_blank">vizualizar</a>
            </div>
        </div>

        <div className="cards">
            <div className="box-image-portfolio">
                <img className="img_cards" src={imgCounter} alt="Contador de números"/>
            </div>

            <div className="description">
                <h4 className="title_description">Counter</h4>
                <p className="paragraph_tecnologias">html5, css3, javascript, react js</p>
                <a className="link_project" href="https://react-counter-atk1ly22d.vercel.app/"
                    target="_blank">vizualizar</a>
            </div>
        </div>

        <div className="cards">
            <div className="box-image-portfolio">
                <img className="img_cards" src={imgError} alt=" Página de erro 404"/>

            </div>

            <div className="description">
                <h4 className="title_description">Error Page 404</h4>
                <p className="paragraph_tecnologias">html5, css3</p>
                <a className="link_project" href="https://anabeatriiz.github.io/errorPage404/"
                    target="_blank">vizualizar</a>
            </div>
        </div>

        <div className="cards">
            <div className="box-image-portfolio">
                <img className="img_cards" src={imgMessage} alt="Gerador de mensagem"/>
            </div>

            <div className="description">
                <h4 className="title_description">Message generator</h4>
                <p className="paragraph_tecnologias">html5, css3, javascript</p>
                <a className="link_project" href="https://anabeatriiz.github.io/gerador_de_mensagem/"
                    target="_blank">vizualizar</a>
            </div>
        </div>

    </main>
     <div className="box_button_back">
            <Link className="bnt_back" to="/">Voltar</Link>
        </div>
</section>
    )
}

export default Portfolio;
