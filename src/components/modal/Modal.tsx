import React, { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleCloseModal = (event: MouseEvent) => {
          const target = event.target as HTMLElement;
          if (!target.closest(".modal")) {
            onClose();
          }
        };
    
        if (isOpen) {
          document.addEventListener("mousedown", handleCloseModal);
        } else {
          document.removeEventListener("mousedown", handleCloseModal);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleCloseModal);
        };
      }, [isOpen, onClose]);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-lg">
            <button className="absolute top-0 right-0 m-2 p-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
              Fechar
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
