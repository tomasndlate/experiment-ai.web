export interface AIModel {
    apiUrl: string;
    name: string;
    description: string;
}

export const ai_models: Record<string, AIModel> = {
    'gpt-3': {apiUrl: "", name: 'GPT-3', description: 'The most powerful AI model in the world'},
    'gpt-4': {apiUrl: "", name: 'GPT-4', description: 'The successor of GPT-3'},
    'gpt-5': {apiUrl: "", name: 'GPT-5', description: 'The successor of GPT-4'},
    'gpt-6': {apiUrl: "", name: 'GPT-6', description: 'The successor of GPT-5'},
}