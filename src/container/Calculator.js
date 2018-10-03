import React from 'react';
import Message  from '../component/Message';
import TemperaturaInput from '../component/Input';

/* Funciones para la cnversión de temperatura */
const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9; //valor en celsius
const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32; // valor en farenheit


const tryConvert = (temperatura, convert) => {
 const input = parseFloat(temperatura); //me aseguro que sea un numero
 if(Number.isNaN(input)){
  return '';
 }
 const ouput = convert(input);
 const rounded = Math.round(ouput * 1000) / 1000;
 return rounded.toString();
}


class Calculator extends React.Component {
 constructor(props){
  super(props);
  this.state = {
   temperatura :'',
   escala :''
  }
 }

 handleCelsiusChange = (newTemperaura) => {
  this.setState({
   temperatura : newTemperaura,
   escala : 'c'
  })
 }

 handleFarenheitChange = (newTemperaura) => {
  this.setState({
   temperatura : newTemperaura,
   escala : 'f'
  })
 }

 render(){
  const xxx =  this.state.escala === 'f' ? tryConvert(this.state.temperatura,toCelsius) : this.state.temperatura;
  const yyy = this.state.escala === 'c' ? tryConvert(this.state.temperatura, toFahrenheit) : this.state.temperatura;

  return (
   <div>
    <h1>Mi calculadora centígrada</h1>
    <Message celsius = {this.state.temperatura}/>
    <TemperaturaInput 
     escala = "c"
     temperatura = {xxx}
     onTemperaturaChange = {this.handleCelsiusChange}
     />
    <hr/>
    <TemperaturaInput 
     escala = "f"
     temperatura = {yyy}
     onTemperaturaChange = {this.handleFarenheitChange}
    />
   </div>
  )
 }
}

export default Calculator