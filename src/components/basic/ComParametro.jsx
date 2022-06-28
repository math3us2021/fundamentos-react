import React from "react"

export default function ComParametro(props) { /// Passando o props para o componente	
    const status = props.nota >=6 ? 'Aprovado ' : 'Reprovado';
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>O aluno {props.nome} tem nota: {props.nota}, e está : {status} </p>
        </div>
    )
}