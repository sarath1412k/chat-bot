import ChatHistory from './Components/ChatHistory';
import Header from './Components/Header';
import TextArea from './Components/TextArea';


function App() {
  return (
    <div className="chat-box-container">
      <Header />
      <ChatHistory />
      <TextArea />
    </div>
  );
}

export default App;
