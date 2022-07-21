import logo from './logo.svg';
import './App.css';

function App() {
  const tituloTarea = () => {
    return <h1>Titulo de Tarea</h1>
  }
  return (
    <div className="App">
      {
        tituloTarea()
      }
    </div>
  );
}

export default App;
