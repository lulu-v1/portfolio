import React from "react";
import "../static/style/home-page.css";
import Spacer from "../components/Spacer";

const HomePage = () => {
    return (<div>
        <ul className="nav_link_list">
            <li className="about_nav_link">
                <a href="#About_section" data-scroll="">À propos</a>
            </li>
            <li className="xp_nav_link">
                <a href="#experience_section" data-scroll="">Expérience</a>
            </li>
            <li className="etude_nav_link" data-scroll="">
                <a href="#etudes">Études</a>
            </li>
            <li className="contact_nav_link" data-scroll="">
                <a href="#contact">Contact</a>
            </li>
        </ul>
        <div className="div_main_title" id="About_section">
            <h1 className="main_title">
                Luca Izidi
            </h1>
        </div>

        <h2 className="currently">
            En 3ème année d'informatique, spécialisé en IT et cybersécurité à Ynov Campus
            Toulouse.
        </h2>
        <img src="images/pp.png" alt="Photo de Luca" className="centered_image"/>

        <p className="about_me">
            <span className="bold">Ma passion pour la technologie s'est affirmée au lycée, où les cours d'informatique
            sont rapidement devenus le nouveau terrain de jeu dans lequel je pouvais exprimer ma créativité et ma logique</span>.
            Bien que de nombreux aspects de l'informatique me passionnent, j'ai réalisé que le monde de
            l'architecture réseau et de la cybersécurité m'attirait particulièrement. Bien qu'il me plaise de mettre ma
            réflexion au service du développement d'applications, par exemple, <span className="bold">c'est la responsabilité inhérente à la
                protection des systèmes et des réseaux qui m'a convaincu de me spécialiser dans ce domaine</span>.
            <br/>
            <Spacer/>
            <br/>
            Les réseaux et la sécurité représentent des secteurs cruciaux où <span className="bold">la moindre erreur peut avoir des
            conséquences majeures, ce qui exige une rigueur et un sens des responsabilités élevés. C'est précisément
            cet aspect de responsabilité qui m'a motivé à approfondir mes connaissances dans ces domaines.</span> J'ai
            donc décidé de poursuivre un diplôme en informatique au Ynov Campus Toulouse, avec une spécialisation en IT
            et cybersécurité, afin d'acquérir les compétences nécessaires pour relever les défis complexes de la
            sécurité informatique.
            <br/>
            <Spacer/>
            <br/>
            Aujourd'hui, je suis passionné par la cybersécurité, en particulier par la protection des systèmes
            d'information et la sécurisation des infrastructures réseaux. <span className="bold">Je suis également fasciné par les défis
            posés par le hacking éthique et par l'exploration des dernières avancées en intelligence artificielle
            appliquées à la sécurité. C'est dans ces domaines, où la vigilance et la réactivité sont primordiales,
            que je me vois évoluer et contribuer à bâtir un cyberespace plus sûr et résilient.</span>
            <br/>
            <br/>Vous pouvez trouver <a href="pdf/CV_Luca_Izidi.pdf" className="download_cv" download="">mon CV
            ici</a>.
        </p>

        <section className="experience_section_global" id="experience_section">
            <div className="experience_section_container">
                <section className="experience_section">
                    <h2 className="experience_title">Expérience Professionnelle de 2ème Année</h2>
                    <div className="experience_content">
                        <div className="experience_item">
                            <h3>L'entreprise</h3>
                            <p className="experience_description">
                                J'ai effectué mon expérience professionnelle avec un freelance expérimenté en
                                conception vidéo pour des publicités d'entreprise. Ce freelance est basé à Toulouse
                                et se spécialise dans la création de contenu vidéo percutant pour les campagnes
                                publicitaires de grandes entreprises.<br/>
                                Mon travail consistait à développer et déployer un site web pour mettre en avant son
                                portfolio, permettant ainsi aux clients potentiels de visualiser son travail et de
                                le contacter facilement. Ce site web devait être à la fois esthétique et
                                fonctionnel, en mettant l'accent sur la présentation visuelle et la navigation
                                intuitive.<br/>
                            </p>
                        </div>
                        <div className="experience_item">
                            <h3>L'Expérience Professionnelle</h3>
                            <p className="experience_description">
                                Mon expérience professionnelle s'est déroulée du 30 juillet au 10 juillet, divisé en deux parties distinctes.<br/>
                                La première partie consistait à concevoir l'architecture du site web, en utilisant
                                des technologies modernes telles que React pour le front-end et Node.js pour le
                                back-end. J'ai également travaillé sur l'intégration de fonctionnalités interactives
                                pour améliorer l'expérience utilisateur.<br/>
                                La seconde partie de mon stage a porté sur le déploiement du site, y compris la
                                configuration de l'hébergement et l'optimisation pour les moteurs de recherche
                                (SEO). Cette tâche m'a permis d'appliquer mes compétences en programmation tout en
                                contribuant à l'amélioration de la présence en ligne de mon client.<br/>
                                Cette expérience m'a offert une vue d'ensemble du cycle de vie d'un produit web, de
                                la conception au déploiement, en passant par les tests et la résolution de
                                problèmes. Elle m'a permis de développer mes compétences techniques tout en
                                acquérant une vision des opérations d'un freelance en conception vidéo.<br/>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <section className="etude_section_global" id="etudes">
            <div className="etude_section_container">
                <section className="etude_section">
                    <h1 className="etude_title">Diplômes</h1>
                    <div className="etude_content">
                        <h3 className="etude_date">2025 - 2027</h3>
                        <h2 className="etude">Master Cybersécurité, Ynov Campus Toulouse</h2>
                        <h3 className="etude_date">2022 - 2025</h3>
                        <h2 className="etude">Bachelor 3 Cybersécurité, Ynov Campus Toulouse</h2>
                        <div className="ligne"></div>
                        <h3 className="etude_date">2019 - 2022</h3>
                        <h2 className="etude">BAC S-SI Maths/Informatique, Lycée texhnique Jean-Monnet</h2>
                    </div>
                </section>
            </div>
        </section>

        <footer id="contact" className="footer">
            <div className="footer_content">
                <h2>Contactez-moi</h2>
                <ul className="contact_list">
                    <li>Email: <a href="mailto:lucaizidi@gmail.com">lucaizidi@gmail.com</a></li>
                    <li>Téléphone: <a href="tel:+33 6 59 10 82 25">+33 6 59 10 82 25</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/luca-izidi/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/luca-izidi</a></li>
                </ul>
            </div>
        </footer>

    </div>);
};

export default HomePage;
