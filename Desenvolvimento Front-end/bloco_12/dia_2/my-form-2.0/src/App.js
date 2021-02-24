import React from 'react'
import './App.css';
import FieldsetPrimeiro from './FieldsetPimeiro'
import FieldsetSegundo from './FieldsetSegundo'

class App extends React.Component {
  constructor() {
    super()
    this.capturaEvento = this.capturaEvento.bind(this)
  }
  
  capturaEvento({ target }) {
    console.log(target.value)
  }

  render() {
    return (
      <div className="App">
        <FieldsetPrimeiro func={this.capturaEvento}/>      
        <FieldsetSegundo />      
      </div>
    );
  }
}

export default App;
