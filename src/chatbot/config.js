import { createChatBotMessage } from 'react-chatbot-kit';

/**
 * Chatbot Configuration
 */
const config = {
  initialMessages: [
    createChatBotMessage('こんにちは！AI チャットボットです。何かお手伝いできることはありますか？')
  ],
  botName: 'AI チャットボット',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
};

export default config;
