import React from 'react';

class FieldsetPrimeiro extends React.Component {
  render() {

    const { func } = this.props

    return(
      <fieldset>
        <input name="nome" type="text" placeholder="Nome" onChange={func}/>
        <input name="email" type="text" placeholder="Email" />
        <input name="cpf" type="text" placeholder="CPF" />
        <input name="enderco" type="text" placeholder="Endereço" />
        <input name="cidade" type="text" placeholder="Cidade" />
        <select>
          <option>Estados</option>
          <option>São Paulo</option>
          <option>Bahia</option>
          <option>Rio de Janeiro</option>
          <option>Minas Gerais</option>
        </select>
        <input id="casa" type="radio" name="moradia" />
        <label for="casa">Casa</label>
        <input id="apartamento" type="radio" name="moradia" />
        <label for="apartamento">Apartamento</label>
      </fieldset>
      )
    }
  }
  
  export default FieldsetPrimeiro