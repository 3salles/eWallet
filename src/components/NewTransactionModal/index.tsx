import Modal from "react-modal";

import close from "../../assets/close.svg";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";

import { Container, Input, TransactionTypeContainer, TransactionButton } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        title="Fechar modal"
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={close} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <Input placeholder="Título" />
        <Input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <TransactionButton type="button">
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </TransactionButton>
          <TransactionButton type="button">
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </TransactionButton>
        </TransactionTypeContainer>
        
        <Input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
