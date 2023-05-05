import React from "react";
import './AboutUs.css'
import Page from '../../components/Page/Page'

function AboutUs(){
    return(
        <Page>
            <div className="detailContainer">
                <h1 className="titleAboutUs">Sobre el Proyecto</h1>
                <p>El proyecto RespirAR es una plataforma abierta que comprende el monitoreo de la calidad medioambiental 
                    a través de las distintas estaciones meteorológicas.
                </p>

                <h1 className="titleAboutUs">Ciudades del Futuro</h1>
                <p>Organismo que acompaña a las comunidades locales de Argentina y Latinoamérica en el diseño e implementación 
                    de acciones novedosas para un desarrollo humano, apoyándose en nuevas tecnologías y modelos de gestión.
                    <br/><a href="https://ciudadesdelfuturo.org.ar/">Más información sobre Ciudades del Futuro</a>
                </p>

                <h1 className="titleAboutUs">Fiware</h1>
                <p>La Fundación Fiware impulsa la definición, y la implementación de código abierto, de estándares abiertos 
                    que permiten el desarrollo de soluciones inteligentes portátiles e interoperables de una manera más 
                    rápida, fácil y asequible, mientras también busca fomentar Fiware como un ecosistema empresarial sostenible
                    e impulsado por la innovación.<br/><a href="https://www.fiware.org/">Más información sobre Fiware</a>
                </p>
            </div>
        </Page>
    )
}

export default AboutUs