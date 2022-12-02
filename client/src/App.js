import logo from './logo.svg';
import './App.css';

/* Custom Components */
import SearchBox from "./components/searchBox"

function App() {
  /* Without any Header and Footer */
  return (
    <div className="App">
        <SearchBox/>
    </div>
  );
}

export default App;
