import React from 'react'


class ListPokemons extends React.Component {
  render() {
    
    const { id, name, type, averageWeight, image } = this.props.pkInfos
    
    return (
      <h4 className='pkinfos'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={image}></img>
        </div>
      </h4>
      )
    }
  }
  
  export default ListPokemons