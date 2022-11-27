import './App.css';
import { EntryInputs } from './components/entryInputs.js';
import { Background } from './components/background';

function App() {
  return (
    <div>
      <Background />
      <div className="App">
        <div className="container">
          < EntryInputs />
        </div>
      </div>
    </div>
  );
}

export default App;
