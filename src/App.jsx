import React from "react";


import Primeiro from "./components/basic/Primeiro";
import ComParametro from './components/basic/ComParametro';
import Aleatorio from './components/basic/Aleatorio';
import Card from './components/layout/Card';

export default () => {  /// Se tirar o default, o componente não será renderizado como anonimo se for o caso
    return (
        <div id="app">
            <h1>Fundamentos de React</h1>
            <Card titulo="Desafio Aleatório">
                <Aleatorio max={100} min={1}></Aleatorio>
                <Aleatorio max={100} min={1}></Aleatorio>
                <Aleatorio max={100} min={1}></Aleatorio>           
            </Card>


            <Card titulo="Primeiro Componente">
                <Primeiro />
            </Card>
        

            <Card titulo="Componente com Parâmetro"> 
                <ComParametro
                    titulo="Situação do Aluno"
                    nome="João"
                    nota={8.5}
                ></ComParametro>
            </Card>


        </div>
    )
}