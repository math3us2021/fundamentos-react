import React from "react";
import "./Card.css";


export default props => {
    return (
    <div className="Card">
        <div className="Title">{props.titulo}</div>
        <div className="Content">
            {props.children} {/* children esta puxando dentro de App os filhos de Card, que são os Aleatórios */}
        </div>
    </div>
)} 