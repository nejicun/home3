import './App.css';
import Messages from './Components/Messages';
import Message from './data/message'
function App() {
  const messages = Message;
  return (
    <div className="App">
        <div className="clearfix container">
          <div className="chat">
            <div className="chat-history">
              <Messages messages={messages}/>
            </div>
          </div>  
        </div>
    </div>
  );
}

export default App;
