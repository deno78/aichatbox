/**
 * Backend Configuration
 * 
 * Azure AI Search settings will be configured here
 * for future backend integration
 */

const backendConfig = {
  // Azure AI Search endpoint (to be configured)
  azureSearchEndpoint: import.meta.env.VITE_AZURE_SEARCH_ENDPOINT || '',
  
  // Azure AI Search API key (to be configured)
  azureSearchApiKey: import.meta.env.VITE_AZURE_SEARCH_API_KEY || '',
  
  // Azure AI Search index name (to be configured)
  azureSearchIndexName: import.meta.env.VITE_AZURE_SEARCH_INDEX_NAME || '',
  
  // API version
  apiVersion: import.meta.env.VITE_API_VERSION || '2023-11-01',
};

export default backendConfig;
