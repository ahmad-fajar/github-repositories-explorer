import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  AlertCircle,
  CheckCircle2,
  Info,
  X,
  XCircle,
} from 'lucide-react';

import {
  CloseButton,
  ToastContainer,
  ToastContent,
  ToastIcon,
  ToastMessage,
} from './styles';

export enum ToastPosition {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
}
export enum ToastType {
  success = 'success',
  error = 'error',
}

export interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
  position?: ToastPosition;
}

const icons = {
  success: <CheckCircle2 size={24} />,
  error: <XCircle size={24} />,
  warning: <AlertCircle size={24} />,
  info: <Info size={24} />,
};

export const Toast: FC<ToastProps> = props => {
  const {
    message,
    type = ToastType.success,
    onClose,
    duration = 3000,
    position = ToastPosition.top,
  } = props;

  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return createPortal(
    <ToastContainer position={position}>
      <ToastContent type={type}>
        <ToastIcon type={type}>{icons[type]}</ToastIcon>
        <ToastMessage>{message}</ToastMessage>
        <CloseButton onClick={onClose}>
          <X size={18} />
        </CloseButton>
      </ToastContent>
    </ToastContainer>,
    document.body
  );
};
