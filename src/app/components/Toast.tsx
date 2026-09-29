"use client";

interface ToastProps {
  message: string;
}

const Toast = ({ message }: ToastProps) => {
  return (
    <div className="toast toast-top toast-end z-100">
      <div className="alert border-0 bg-[#ccff00] text-black shadow-lg">
        <span className="font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;