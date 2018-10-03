import React from 'react';

const escalaNames = {
 c: 'Celsius',
 f: 'Fahrenheit',
 m: 'Mely'
};


const TemperaturaInput = (props) => {
 const handleChange = (e) => {
  console.log(e.target.value)
  props.onTemperaturaChange(e.target.value)
 }

 return (
  <div>
   <label htmlFor = {props.escala} >Coloca los grados {escalaNames[props.escala]}</label>
   <br/>
   <input 
    id = {props.escala}
    placeholder = {`grados ${escalaNames[props.escala]}`}
    onChange = {handleChange}
    value = {props.temperatura}
   />
  </div>
 )
}

export default TemperaturaInput;