import './App.css';
import io from "socket.io-client"

//const socket = io.connect("http://localhost:3001");
const socket = io.connect("https://websocket-test-ad1c.onrender.com");

function App() {
  const sendMessage = () => {
    socket.emit("send", {message: "Hello"});
  }
  return (
    <div className="App"> 
      <input placeholder = "Message"/>
      <button onClick = {sendMessage}> Send Message</button>
    </div>
  );
}

export default App;
