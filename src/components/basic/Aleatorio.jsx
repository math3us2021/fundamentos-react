import React from "react";

export default (props) => {
    const { min, max} = props; /// Destructuring , sendo duas variaveis min e max ,pega uma constante de cada um deles, sem precisar ficar escrevendo props.min e props.max
    const sorteio = Math.floor(Math.random() * max + min);
    return (
        <div>
{/* 
            <h1><strong>Numeros</strong></h1>
            <p>Numero Máximo: {max} </p>
            <p>Numero Mínimo: {min}</p> */}
            <p>Numero Sorteado: {sorteio}</p>

        </div>
    )
}