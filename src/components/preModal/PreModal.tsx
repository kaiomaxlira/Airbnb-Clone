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
        <h2 className="mt-[5rem] mr-[20rem] my-3 font-bold grid justify-items-center text-center text-3xl">
          Conheça os<br/> Preferidos<br/> dos Hóspedes
        </h2>
        <p className="font-light text-center text-base mr-[20rem] text-textmodal leading-5">
          Anúncios com este selo indicam que a<br/> acomodação é uma das 2 milhões
          que fazem<br/> mais sucesso no Airbnb.
        </p>
      </Modal>
    </div>
  );
};

export default App;
