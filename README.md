# Calculator React

## Props

- Son los parámetros de las funciones.
- Los componentes interactuan entre ellos a través de las props.
- Las props son inmutables.
- Las props son de solo lectura.
- El uso más común de las `props` es pasar información de un componente a otro.

## State

Fuente de información dinámica
Un componente de react puede acceder a información dinámica de dos maneras : props y state

- componente como clase (constructor)
- propiedad state
- solo se modifica con setState a través de una función.
- cada vez que tu invocas a setState() automaticamante se llama al método render()

## Patrón

### Stateless Components Inherit From Stateful Components

Nuestro patrón de programación utiliza dos componentes React: un componente con estado (statefull) y un componente sin estado (stateless).
"Stateful" describe cualquier componente que tenga una propiedad `state`; "Stateless" describe cualquier componente que no tiene esta propiedad.

En nuestro patrón, un componente con estado pasa su estado a un componente sin estado.

```txt
Un componente de react debe usar las `props` para almacenar información que puede ser cambiada, pero que solo puede ser cambiada por un componente diferente.
Un componente de React debe usar su `state` para almacenar información que el componente en sí puede cambiar
```

```txt
EL flujo de la información es de componentes padres a hijos. El cambio del state de un componente padre hace que sus hijos se vuelvan a renderizar con el valor de las props que le pasamos en ese momento
```

```jsx
// Componente Padre

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'Frarthur'
    }
  }
  render () {
    return <Child name = {this.state.name} />;
  }
}

ReactDOM.render(<Parent />, document.getElementById('app') )
```

```jsx
// Componente Hijo functional

import React from 'react';
export const Child = (props) => <h1> Hola, mi nombre es {props.name}</h1>;
```

### Child Components Update Their Parents' state

A través de funciones, el hijo debe tener como props la función que cambia el estado del padre
A su vez el hijo debe tener un manejador de eventos que invoque a la función que hace el cambio de estado del padre

### Child Components Update Sibling Components

En esta lección, expandiremos el patrón por última vez. Un componente hijo actualiza el estado de sus padres y el padre pasa ese estado a un componente hermano.

Recuerda los componentes en React solo y unicamente deben hacer una sola cosa, un solo JOB
/* Un componente muestra el estado y otro componente muestra la forma en que puede cambiar ese estado*/

### Separar componentes contenedores(statefull) de componentes presentacionales(stateless)

```jsx
//Componente presentacional
import React from 'react'
const Message = (props) => <h2> El agua {props.celsius >= 100 ? 'si' : 'no'} hervirá </h2> 
export default Message
```

En resumen:

- Debe existir una "single source of truth" (en lugar de "copias") para cada pieza de información que cambia dentro de una aplicación React.
- El principio de data flow de React (top-down)
- La recomendación es abstraer esa información al primer ancenstro común
- React developer tools (Ver el flujo de la aplicación)