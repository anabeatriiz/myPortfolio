import React from 'react';
import "../Sobre/style.css";
import photoProfile from '../../assets/01.svg';
import curriculo from "../../doc/ANA BEATRIZ VIANA DA SILVA - CV.pdf";
import { Link } from 'react-router-dom';


export const Sobre = () => {
    return (
     <section className="container">
        <main className="box_description">
            <div className="box_image">
                <img className="img_profile" src={photoProfile} alt="Mulher negra de cabelos longos"/>
            </div>

            <div class="box_titles">
                <h1 className="title-home">Olá mundo, me chamo Ana Beatriz!</h1>
                <h3 className="subtitle"><span className="span-icon">&#123;</span> Desenvolvedora Front-end <span className="span-icon">&#125;</span></h3>
                    <p className="paragraph">Estudante de front-end, sou comunicativa, adoro novos desafios. No meu tempo
                        livre gosto de cozinhar, fazer exercícios e assistir animes.</p>

                    <div className="box_buttons">
                        <Link className="button" to="/portfolio">Portfólio</Link>
                        <a className="button" href={curriculo} download="ANA BEATRIZ VIANA DA SILVA - CV.pdf">Currículo</a>
                    </div>
            </div>
        </main>
    </section>
    );
}