import { useToast as pUseToast } from 'primevue/usetoast';

export const useToast = () => {
  const toast = pUseToast();

  return (message: string, severity: Severity = 'success') => {
    toast.add({
      life: 5000,
      severity,
      summary: message,
    });
  };
};

export type Severity = 'success' | 'info' | 'error' | 'warn';
