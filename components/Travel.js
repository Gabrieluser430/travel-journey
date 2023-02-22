import React from "react"

export default function Travel(props) {
    console.log(props)
    return (
        <div className="main--container">
            <div className="card--container">
                <img src={props.item.imageUrl} className="card--image"/>
                <div className="card--text--container">
                    <div className="card--address">
                        <img src="../images/local.png" className="address--icon"/>
                        <span className="address--country">{props.item.location}</span>
                        <a className="address--link" href={props.item.googleMapsUrl} target="_blank">Veja no Google Maps</a>
                    </div>
                    <h1 className="card--local">{props.item.title}</h1>
                    <p className="card--date">{props.item.startDate} {props.item.endDate ? "-" : ""} {props.item.endDate}</p>
                    <p className="card--description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}