import { useRef } from "react";
import {
    useInView
} from "framer-motion";

import { ReactComponent as Ecole } from "../images/ecole.svg"
import { ReactComponent as Parcoure } from "../images/parcoure-2.svg"

export default function Career() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="min-h-[100vh]" id="career">
            <div className=" flex w-fit md:w-auto flex-col ml-auto mr-auto md:items-center md:ml-0 md:mr-0">
                <div
                    className="ml-4 md:ml-0 md:mr-60"
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>

                    <p
                        className="text-6xl md:text-8xl text-p1"
                    >
                        Bonjour
                    </p>
                    <p className="text-3xl md:text-4xl text-p3">c'est
                        <span className="text-6xl md:text-8xl text-p2 font-bold">
                            &nbsp; Shany
                        </span>
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-center " ref={ref}>
                    <div className="px-4 mt-4">
                        <Ecole
                            className="w-[300px] h-[240px] ml-auto mr-auto md:w-[320px] md:h-[260px] xl:w-[400px] xl:h-[320px]"
                            style={{
                                opacity: isInView ? 1 : 0,
                                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
                            }}
                        />
                        <p
                            className="md:w-[350px] lg:w-[500px] xl:w-[600px] text-p3"
                            style={{
                                opacity: isInView ? 1 : 0,
                                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.6s"
                            }}
                        >
                            Mon métier est de faciliter la vie des gens
                            en rendant des services, informations,
                            outils, ... Plus accessible sur internet.
                            Titulaire d'un bac STMG, ma curiosité et mon
                            esprit de compétition m'ont conduit à suivre une
                            formation de développeur web, axée sur la pédagogie
                            par projet, nécessitant autonomie et rigueur
                            (avec une trentaine de projets au total). J'ai
                            ensuite effectué une alternance d'un an en tant
                            que développeur web full stack au sein d'une équipe de cinq personnes.
                            Actuellement, je suis en troisième année d'ingénierie du web à l'ESGI
                            (École Supérieure de Génie Informatique),
                            reconnue pour ses spécialisations variées,
                            allant du jeu vidéo à la cybersécurité.
                        </p>
                    </div>
                    <div className="px-4 mt-4">
                        <Parcoure
                            className="w-[300px] h-[240px] ml-auto mr-auto md:w-[320px] md:h-[260px] xl:w-[400px] xl:h-[320px]"
                            style={{
                                opacity: isInView ? 1 : 0,
                                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
                            }}
                        />
                        <p
                            className="md:w-[350px] lg:w-[500px] xl:w-[600px] text-p3"
                            style={{
                                opacity: isInView ? 1 : 0,
                                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.6s"
                            }}
                        >
                            Au cours de mon alternance, j'ai eu l'opportunité d'effectuer diverses missions. Tout d'abord, j'ai été chargé de créer des pages web et d'assurer leur adaptabilité en responsive design. Ensuite, j'ai contribué à l'ajout de nouvelles routes et fonctionnalités à une API. J'ai également travaillé sur le débogage d'un site, incluant la migration de PHP7 vers PHP8. Par la suite, j'ai mené des analyses de bases de données pour identifier les utilisateurs ayant des problèmes d'abonnement ou d'inscription, avec génération de rapports au format CSV. Puis, j'ai analysé les campagnes de newsletters via l'API de Brevo, en produisant des statistiques sur les ouvertures, clics, abonnements, désabonnements et plaintes. Enfin, j'ai développé un outil de triage de mails avec PHP-IMAP, permettant de les classer selon leur titre, objet ou contenu.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
