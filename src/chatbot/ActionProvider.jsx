import backendConfig from '../config/backend.config';

/**
 * Action Provider for the chatbot
 * Handles user messages and connects to Azure AI Search backend
 */
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  /**
   * Handle user messages
   * TODO: Integrate with Azure AI Search backend
   */
  handleMessage = async () => {
    // Placeholder response until Azure AI Search is integrated
    const botMessage = this.createChatBotMessage(
      'こんにちは！現在、Azure AI Searchとの連携を準備中です。まもなく、より高度な回答ができるようになります。'
    );

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));

    // TODO: Implement Azure AI Search integration
    // const response = await this.queryAzureSearch(message);
  };

  /**
   * Query Azure AI Search (to be implemented)
   */
  // eslint-disable-next-line no-unused-vars
  async queryAzureSearch(_query) {
    const { azureSearchEndpoint, azureSearchApiKey, azureSearchIndexName } = backendConfig;
    
    // Placeholder for Azure AI Search integration
    if (!azureSearchEndpoint || !azureSearchApiKey || !azureSearchIndexName) {
      console.warn('Azure AI Search is not configured yet');
      return null;
    }

    // TODO: Implement actual Azure AI Search API call
    // Example structure:
    // const { apiVersion } = backendConfig;
    // const url = `${azureSearchEndpoint}/indexes/${azureSearchIndexName}/docs/search?api-version=${apiVersion}`;
    // const response = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'api-key': azureSearchApiKey,
    //   },
    //   body: JSON.stringify({ search: _query }),
    // });
    // return await response.json();
  }
}

export default ActionProvider;
