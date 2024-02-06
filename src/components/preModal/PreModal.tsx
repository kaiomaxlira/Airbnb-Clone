import React, { useState } from "react";
import Modal from "@/components/modal/Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-DivHospedes py-5 border-solid border-b-2 border-border">
      <button
        style={{ textAlign: "center", display: "block", margin: "0 auto" }}
        onClick={openModal}
      >
        <span className="text-Hopedes underline text-base font-semibold">
          Conheça os Preferidos dos Hóspedes — os que fazem mais sucesso
        </span>
      </button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-2">Conteúdo do Modal</h2>
        <p>Aqui está o conteúdo do modal.</p>
      </Modal>
    </div>
  );
};

export default App;
