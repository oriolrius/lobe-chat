import { type ChatModelCard, ModelProviderCard } from '@/types/llm';

const replicateChatModels: ChatModelCard[] = [
  {
    contextWindowTokens: 4096,
    displayName: 'Llama 2 70B Chat',
    enabled: true,
    id: 'meta/llama-2-70b-chat',
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    displayName: 'Mistral 7B Instruct',
    enabled: true,
    id: 'mistralai/mistral-7b-instruct-v0.2',
    type: 'chat',
  },
];

// ref: https://replicate.com/docs
const Replicate: ModelProviderCard = {
  chatModels: replicateChatModels,
  checkModel: 'meta/llama-2-70b-chat',
  description:
    'Replicate lets you run machine learning models with a cloud API, without having to understand the intricacies of machine learning or manage your own infrastructure. Run open-source models like Llama, Stable Diffusion, and FLUX with a simple API.',
  id: 'replicate',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://replicate.com/explore',
  name: 'Replicate',
  settings: {
    disableBrowserRequest: true,
    proxyUrl: {
      placeholder: 'https://api.replicate.com',
    },
    showModelFetcher: true,
  },
  url: 'https://replicate.com',
};

export default Replicate;
