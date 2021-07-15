import { useState } from "react";

import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOPen, setIsNewTransactionModalOPen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOPen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOPen(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOPen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  );
}
