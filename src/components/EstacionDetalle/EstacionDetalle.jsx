import React, { useContext, useEffect, useState } from 'react'
import './EstacionDetalle.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from "react-router-dom";
import { EstacionesContext } from "../../Context/EstacionesContext";
import LineChart from './LineChart/LineChart';
import CirculoData from '../CirculoData/CirculoData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function EstacionDetalle() {
    const [estacion, setEstacion] = useState(undefined);

    const { estaciones } = useContext(EstacionesContext);

    const { id } = useParams();

    useEffect(() => {
        var estacionFiltrada = estaciones.filter((estacion) => estacion.id.toString() === id)
        
        setEstacion(estacionFiltrada[0])
    }, [estaciones, id]);

    //Data dinamico
    // const [data, setData] = useState({
    //     labels: estaciones.map((data) => data.year),
    //     datasets: [{
    //         label: "Temperature",
    //         data: estaciones.map((data) => data.temperature)
    //     }]
    // });

    //Data estatica para testear chart
    const [data, setData] = useState({
        labels: ['1/9/2000','10/9/2000','21/9/2000','23/9/2000','29/9/2000','30/9/2000',],
        datasets: [{
            label: "Temperature",
            data: ['27','24','25','22','26','29',]
        }]
    });

    return (
        <div className="detailContainer row align">
            {estacion 
            ?
                <>
                    <div className="col-lg-12 col-12 row titleContainer align" style={{justifyContent: "start"}}>
                        <Link to={'/misEstaciones'} className='col-1 link align'>
                            <FontAwesomeIcon className='flecha' icon={faArrowLeft} />
                        </Link>
                        <h1 className='col-lg-10 col-10 titleEstacion'>Datos {estacion.name}</h1>
                    </div>
                    
                    <div className="row col-12 align datosEstacionContainer">
                        <div className="col-12 col-lg-6 row align spaceBeetween">
                            <div className="col-12 col-lg-6 row align cardDetail">                            
                                <div className='col-6 row'>          
                                    <CirculoData col={"col-10"} value={estacion.temperature} text="º"/>                                         
                                </div>
                                <h4 className="col-6 align">Temperatura actual</h4> 
                            </div>
                            <div className="col-12 col-lg-6 row align cardDetail">
                                <h4 className="col-6 align">Precipitacion</h4> 
                                <div className='col-6 row'>          
                                    <CirculoData col={"col-10"} value={estacion.porcentajePrecipitacion} text="%"/>                                         
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 row align cardDetail">                            
                                <div className='col-6 row'>          
                                    <CirculoData col={"col-10"} value={estacion.temperature} text="º"/>                                         
                                </div>
                                <h4 className="col-6 align">Temperatura actual</h4> 
                            </div>
                            <div className="col-12 col-lg-6 row align cardDetail">
                                <h4 className="col-6 align">Fiabilidad</h4> 
                                <div className='col-6 row'>          
                                    <CirculoData col={"col-10"} value={70} text="%"/>                                         
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 row align cardDetail">                            
                                <div className='col-6 row'>          
                                    <CirculoData col={"col-10"} value={estacion.temperature} text="º"/>                                         
                                </div>
                                <h4 className="col-6 align">Temperatura actual</h4> 
                            </div>
                            <div className="col-12 col-lg-6 row align cardDetail">
                                <h4 className="col-6 align">Fiabilidad</h4> 
                                <div className='col-6 row'>          
                                    <CirculoData col={"col-10"} value={70} text="%"/>                                         
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 row align cardDetail">                            
                                <div className='col-6 row'>          
                                    <CirculoData col={"col-10"} value={estacion.temperature} text="º"/>                                         
                                </div>
                                <h4 className="col-6 align">Temperatura actual</h4> 
                            </div>
                            <div className="col-12 col-lg-6 row align cardDetail">
                                <h4 className="col-6 align">Fiabilidad</h4> 
                                <div className='col-6 row'>          
                                    <CirculoData col={"col-10"} value={70} text="%"/>                                         
                                </div>
                            </div>
                        </div>                           
                        <div className='col-12 col-lg-5 align cardDetail row'>
                            <div className="col-12">
                                <LineChart chartData={data}/>   
                            </div>      
                            <p className='col-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur, consequatur in suscipit voluptas eligendi repudiandae ab voluptatibus perferendis ad sit temporibus voluptates esse aliquid? architecto ipsum repudiandae non ea autem voluptates cumque quia porro temporibus quaerat adipisci! Dolore placeat quisquam tempora earum repellat.</p>    

                            <button className="col-5 col-lg-4 align btnExportarDatos">
                            Exportar datos
                            </button>                                        
                        </div>                                                                                             
                    </div>                    
                </>
            :
                <h1>Loading..</h1>
            }
        </div>
    )
}

export default EstacionDetalle