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
        <span className={`text-Hopedes underline text-base font-semibold`}>
          Conheça os Preferidos dos Hóspedes — os que fazem mais sucesso
        </span>
      </button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold grid justify-items-center">
          Conheça os Preferidos dos Hóspedes
        </h2>
        <p>
          Anúncios com este selo indicam que a acomodação é uma das 2 milhões
          que fazem mais sucesso no Airbnb.
        </p>
      </Modal>
    </div>
  );
};

export default App;
