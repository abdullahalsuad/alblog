import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div>
       <div className="App">
          < Navbar />
      <div className="content">
        <Home />
      </div>
      </div>
    </div>
  );
}

export default App;
