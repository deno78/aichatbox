/**
 * Message Parser for the chatbot
 * Parses user messages and triggers appropriate actions
 */
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    // Send all messages to the action provider
    this.actionProvider.handleMessage(message);
  }
}

export default MessageParser;
