import './App.css';
import pokemons from './data.js'
import ListPokemons from './pokedex';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      {pokemons.map((pokemon) => <ListPokemons pkInfos={pokemon} />)}
    </div>
  );
}

export default App;
