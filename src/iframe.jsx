import React from 'react';
import ReactDOM from 'react-dom/client';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './index.css';
import './App.css';
import config from './chatbot/config';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="chatbot-container" style={{ maxWidth: '100%', margin: 0 }}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  </React.StrictMode>
);
