import React from 'react';

class FieldsetSegundo extends React.Component {
  render() {
    return(
      <fieldset>
        <input type="textarea" placeholder="Resumo do curriculo" />
        <input type="textarea" placeholder="Cargo" />
        <input type="text" placeholder="Descrição do cargo" />
      </fieldset>
      )
    }
  }
  
  export default FieldsetSegundo