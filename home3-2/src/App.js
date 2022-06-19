import './App.css';
import Etsy from './data/etsy.json'
import Listing from './Listing/Listing';

function App() {
  const etsy = require('./data/etsy.json');

  return (
    <div className="App">
        <Listing items={etsy} />
    </div>
  );
}

export default App;
