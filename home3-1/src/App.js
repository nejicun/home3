import './App.css';
import Stars from './components/Stars';

function App() {
  const count = Math.floor(Math.random() * 10 + 1)
  console.log(count)
  let view = false
  if (count > 0 && count < 6 ) view = true
  console.log(view)
  if (view) { 
      return( 
        <div className="App">
          <Stars count={count} />
        </div>
      )
    }
    return(
      <div className="App">
      </div>
    )
  }



export default App;
