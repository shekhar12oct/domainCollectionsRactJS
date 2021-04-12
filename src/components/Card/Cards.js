import React from 'react'

const Cards = (props) => {
    return (
        <div className="service-box">
        <div className="service-box-img">
            <div className="service-type">{props.stype}</div>
            <img src={props.simage} alt="service-img"/>
        </div>
            <div className="service-box">
                <a href="#">{props.sdescription}</a>
            </div>
        </div>
    )
}

export default Cards;
