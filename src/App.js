import React from 'react';
import './App.css';

function Cinema(props) {
  return (
    <div>{props.nome || "Mezzano"}</div>,
    <div>{props.numerodiSale}</div>
  );
}



class App extends React.Component {
  render() {
    return <div>
      <h1>Cinema</h1>
      Nome<Cinema name="Mezzano"></Cinema>
      Numero di sale:   <Cinema numerodiSale="20"></Cinema>
    </div>
  }
}


export default App;
