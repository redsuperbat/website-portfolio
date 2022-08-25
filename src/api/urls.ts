export const httpBaseUrl = import.meta.env.DEV
  ? 'http://localhost:8080'
  : 'https://rsb.netterberg.com/portfolio';

export const wsBaseUrl = import.meta.env.DEV
  ? 'ws://localhost:8080'
  : 'wss://rsb.netterberg.com/portfolio';
