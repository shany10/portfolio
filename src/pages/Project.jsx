import icone_react from "../images/icone_react.png"
import icone_laravel from "../images/icone_laravel.png"
import icone_symfony from "../images/icone_symfony.png"
import icone_js from "../images/icone_javascript.png"
import icone_node from "../images/icone_node.png"
import icone_mysql from "../images/icone_mysql.png"

const Project = () => {
    return (
        <section className="min-h-[100vh] flex justify-center items-center" id="projet">
            <div className="container">
                <input type="radio" name="slider" id="item-1" defaultChecked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <input type="radio" name="slider" id="item-4" />
                <input type="radio" name="slider" id="item-5" />
                <div className="cards">
                    <label className="card previouslyOn rounded-lg " htmlFor="item-1" id="song-1">
                        <p id="project-1" className="break-words text-sm sm:text-xl">
                            <span className="font-bold italic">Description</span> : Site de
                            previsualisation de film insperé de Netflix.
                            Utilsant <span className="text-p2">l'API</span> de Betaseries.
                            Projet de groupe de 2 personnes.<br />
                            <span className="font-bold italic">Objectif</span> : Mettre en valeur
                            les données d'une API externe et aquérire des competances en design UI<br />
                            <span className="font-bold italic">Compétance</span> : Récupération de donnée, design.<br />
                            <span className="font-bold italic">Stack</span> : React js.
                        </p>
                    </label>
                    <label className="card eCommerce rounded-lg" htmlFor="item-2" id="song-2">
                        <p id="project-2" className="break-words text-sm sm:text-xl">
                            <span className="font-bold italic">Description</span> : Site de vente de matériel informatique avec un système de
                            paiment fictif avec Stripe. Projet de groupe de 5 personnes.<br />
                            <span className="font-bold italic">Objectif</span> : Gérer une grosse quantité de données dans une éco
                            système multi-language informatique.<br />
                            <span className="font-bold italic">Compétance</span> : Base de données, API,
                            récupération de donnée.<br />
                            <span className="font-bold italic">Stack</span> : React js, Symfony, MySQL.
                        </p>
                    </label>
                    <label className="card nuage_3 rounded-lg" htmlFor="item-3" id="song-3">
                        <p id="project-3" className="break-words text-sm sm:text-xl">
                            <span className="font-bold italic">Description</span> : API de suggestion
                            vestimentaire en fonction de la température journalière se basant
                            sur weatherapi.<br />
                            <span className="font-bold italic">Objectif</span> : Gérer, securiser
                            un API et comprendre l'interet de test unitaire.<br />
                            <span className="font-bold italic">Compétance</span> : Test unitaire, securité.<br />
                            <span className="font-bold italic">Stack</span> : Laravel.<br />
                        </p>
                    </label>
                    <label className="card html5Gaming rounded-lg" htmlFor="item-4" id="song-4">
                        <p id="project-4" className="break-words text-sm sm:text-xl">
                            <span className="font-bold italic">Description</span> : Prototype de jeux d'arcade run and fight.<br />
                            <span className="font-bold italic">Objectif</span> : Comprendre le fonctionnement et la logique des jeux sur le web.<br />
                            <span className="font-bold italic">Compétance</span> : Jeux video, mathematique.<br />
                            <span className="font-bold italic">Stack</span> : Phaser3.<br />
                        </p>
                    </label>
                    <label className="card myIRC rounded-lg" htmlFor="item-5" id="song-5">
                        <p id="project-5" className="break-words text-sm sm:text-xl">
                            <span className="font-bold italic">Description</span> : Application de messagerie instantanée.<br />
                            <span className="font-bold italic">Objectif</span> : Comprendre le fonctionnement des
                            messageries instantanées.<br />
                            <span className="font-bold italic">Compétance</span> : Web socket.<br />
                            <span className="font-bold italic">Stack</span> : Node js, React js.<br />
                        </p>
                    </label>
                </div>
                <div className="player">
                    <div className="upper-part">
                        <div className="info-area text-p1 text-xl sm:text-2xl" id="test">
                            <label className="flex justify-center items-center" id="song-info-1">
                                <a
                                    className="font-bold mr-1 hover:text-3xl"
                                    href="https://github.com/shany10/PreviouslyOn/tree/shany"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Previously on
                                </a>
                                <img src={icone_react} alt="icone react" className="h-[40px]" loading="lazy"/>
                            </label>
                            <label className="flex justify-center items-center" id="song-info-2">
                                <a
                                    className="font-bold mr-1 hover:text-3xl"
                                    href="https://github.com/theoevon/e-commerce/tree/shany"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    E-commerce
                                </a>
                                <img src={icone_react} alt="icone React js" className="h-[40px]" loading="lazy"/>
                                <img src={icone_symfony} alt="icon Symfony" className="h-[40px]" loading="lazy"/>
                                <img src={icone_mysql} alt="icon Symfony" className="h-[40px]" loading="lazy"/>
                            </label>
                            <label className="flex justify-center items-center" id="song-info-3">
                                <a
                                    className="font-bold mr-1 hover:text-3xl"
                                    href="https://github.com/shany10/HTML5_gaming/tree/master"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    HTML5 Gaming
                                </a>
                                <img src={icone_js} alt="icon Javascript" className="h-[40px]" loading="lazy"/>
                            </label>
                            <label className="flex justify-center items-center" id="song-info-4">
                                <a
                                    className="font-bold mr-1 hover:text-3xl"
                                    href="https://github.com/shany10/my_irc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    My IRC
                                </a>
                                <img src={icone_react} alt="icone React js" className="h-[40px]" loading="lazy"/>
                                <img src={icone_node} alt="icone Node js" className="h-[40px]" loading="lazy"/>
                            </label>
                            <label className="flex justify-center items-center" id="song-info-5">
                                <a
                                    className="font-bold mr-1 hover:text-3xl"
                                    href="https://github.com/shany10/prevision_meteo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Météo
                                </a>
                                <img src={icone_laravel} alt="icon Laravel" className="h-[40px]" loading="lazy"/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project