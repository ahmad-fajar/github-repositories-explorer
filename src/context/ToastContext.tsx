import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from 'react';

import { Toast, ToastProps } from '@/components/Toast';

type ToastOptions = Omit<ToastProps, 'onClose'>;
interface ToastContextType {
  toast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

type Toast = ToastOptions & {
  id: number;
};

export const ToastProvider: FC<{ children: ReactNode }> = props => {
  const { children } = props;

  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((options: ToastOptions) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, ...options }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const toastElements: ReactNode[] = toasts.map(toast => (
    <Toast
      key={toast.id}
      message={toast.message}
      type={toast.type}
      duration={toast.duration}
      position={toast.position}
      onClose={() => removeToast(toast.id)}
    />
  ));

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {toastElements}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('[ToastContext] useToast must be used within a ToastProvider');
  }

  return context;
};
