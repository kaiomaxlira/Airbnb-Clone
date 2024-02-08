import React, { useState, useEffect } from 'react';
import { CloseOutlined } from "@ant-design/icons"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleCloseModal = (event: MouseEvent) => {
          const modal = document.querySelector(".modal") as HTMLElement;
          const target = event.target as HTMLElement;
          if (modal && !modal.contains(target)) {
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
          <div className="bg-white h-[30rem] w-[50rem] p-4 rounded-xl shadow-xl modal relative">
            <button className="flex items-center justify-center w-8 h-8 rounded-full text-black bg-gray-100 hover:bg-gray-200  hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={onClose}>
            <CloseOutlined />
            </button>
            {children}
            <div className="absolute mt-5 left-[9.5rem] border-solid border-2 rounded-xl bg-buttonmodal hover:bg-buttonhover">
            <button className=" text-sm text-white font-normal my-2.5 px-5">
              Comece a explorar
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
