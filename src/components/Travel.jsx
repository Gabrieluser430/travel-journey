import React from 'react'
import Travel from "./Travel.css"


export default function MainContent(props) {

    console.log(props)

    return ( 
        <div className="container-fluid body">
            <div className="d-flex justify-content-center">
                <button className="btn btn-dark change-button fs-4" type="button" onClick={props.changeButton}>Clique para mostrar os lugares</button>
            </div>

            <div className="d-flex highest-container" >
                <img src={props.imageUrl} className="place-img"/>
                <div className='black-container'>
                    <div className="place-info">
                        <img className="local-img" src="https://t4.ftcdn.net/jpg/02/98/28/57/360_F_298285715_ct4qtZOJH119A39TdMrbkLsfziVCX1Rz.jpg"/>
                        <span className="city">{props.location}</span>
                        <a className="maps-link" href={props.googleMapsUrl} target="_blank">Veja no Google Maps</a>
                    </div>
                    <h1 className="place-name">{props.title}</h1>
                    <p className="place-date">{props.startDate}</p>
                    <p  className="place-description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}