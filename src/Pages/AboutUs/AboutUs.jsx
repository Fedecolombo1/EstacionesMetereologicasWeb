import React from "react";
import './AboutUs.css'
import Page from '../../components/Page/Page'
import fiwareLogo from "../../Images/FIWARE.webp"
import ciudadesLogo from "../../Images/ciudades.png"
import respirarLogo from '../../Images/RespirAR_Logo.jpeg'

function AboutUs(){
    return(
        <Page>
            <div className="container-fluid" style={{marginTop: '8vh'}}>
                <div className="aboutUsContainer row align">
                    <img src={respirarLogo} className="col-12 col-lg-3"/> 
                    <h1 className="titleAboutUs col-12">Sobre el Proyecto</h1>
                    <p>El proyecto RespirAR es una plataforma abierta que comprende el monitoreo de la calidad medioambiental 
                        a través de las distintas estaciones meteorológicas.
                    </p>

                    <img src={ciudadesLogo} className="col-12 col-lg-3"/>   
                    <div className="col-lg-9 col-12">
                        <h1 className="titleAboutUs col-12">Ciudades del Futuro</h1>
                        <p>Organismo que acompaña a las comunidades locales de Argentina y Latinoamérica en el diseño e implementación 
                            de acciones novedosas para un desarrollo humano, apoyándose en nuevas tecnologías y modelos de gestión.
                            <br/><a href="https://ciudadesdelfuturo.org.ar/">Más información sobre Ciudades del Futuro</a>
                        </p>  
                    </div>
                                      

                    <img src={fiwareLogo} className="col-12 col-lg-3"/>   
                    <div className="col-lg-9 col-12">
                        <h1 className="titleAboutUs col-12">Fiware</h1>                                                                                                                          
                        <p>La Fundación Fiware impulsa la definición, y la implementación de código abierto, de estándares abiertos 
                            que permiten el desarrollo de soluciones inteligentes portátiles e interoperables de una manera más 
                            rápida, fácil y asequible, mientras también busca fomentar Fiware como un ecosistema empresarial sostenible
                            e impulsado por la innovación.<br/><a href="https://www.fiware.org/">Más información sobre Fiware</a>
                        </p>     
                    </div>                                    
                </div>
            </div>            
        </Page>
    )
}

export default AboutUs;
