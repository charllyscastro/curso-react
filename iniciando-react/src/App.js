import React from 'react';

function App(props){


  const modificaNome = (e) => {
    console.log(e.target.value)
  }

  const comboBoxOpcoes = () => {
    const opcoes = ["1","2"];
    const comboBox = opcoes.map(opcao => <option>{opcao}</option>);

    return (
      <select>{comboBox}</select>
    )
  }
 
    const MeuComboBox = () => comboBoxOpcoes();

    return(
      <div>
        <input type="text" value={props.nome} onChange={modificaNome}/>
        <h1>Olá {props.nome} e tenho {props.idade} anos.</h1>
        <MeuComboBox />     
      </div>
    )
  
}
export default App;
