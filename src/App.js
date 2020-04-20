import React from 'react';
import './App.css';

function Cinema(props) {
  return (
    <ul>
      <li>Nome: {props.nome || "Mezzano"}</li>
      <li>Numero di sale: {props.numerodiSale}</li>
    </ul>
  );
}



class App extends React.Component {
  render() {
    return <div>
      <h1>Cinema</h1>
      <Cinema nome="Mezzano" numerodiSale="20"></Cinema>
      <Cinema nome="UCI" numerodiSale="8"></Cinema>
    </div>
  }
}


export default App;
