import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['Ler', 'Estudar', 'Praticar']

function App() {
  return (
    <div>
      {array.map((value) => task(value))}
    </div>
  );
}

export default App;
