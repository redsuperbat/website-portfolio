export const httpBaseUrl = import.meta.env.DEV
  ? 'http://localhost:8080'
  : 'https://rsb.asuscomm.com/portfolio';

export const wsBaseUrl = import.meta.env.DEV
  ? 'ws://localhost:8080'
  : 'wss://rsb.asuscomm.com/portfolio';
