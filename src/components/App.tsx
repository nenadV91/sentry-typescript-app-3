import './App.css';
import throwError from '../utils/throwError';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My app
      </header>

      <main>
        <button onClick={throwError}>Button updated</button>
      </main>
    </div>
  );
}

export default App;
