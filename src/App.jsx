import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';
import config from './chatbot/config';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';

function App() {
  return (
    <div className="app-container">
      <div className="sample-text">サンプルです</div>
      <div className="chatbot-container">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default App;
