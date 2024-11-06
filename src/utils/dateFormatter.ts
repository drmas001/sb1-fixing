export const formatDate = (date: string | Date): string => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const formatDateTime = (date: string | Date): string => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const formatTime = (time: string): string => {
  if (!time) return '';
  return new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getCurrentDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const getCurrentTime = (): string => {
  return new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};