import { useState } from "react";
import ReactModal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./TransactionsContext";

ReactModal.setAppElement("#root");

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
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOPen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
