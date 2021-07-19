import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";

import close from "../../assets/close.svg";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { TransactionsContext } from "../../TransactionsContext";

import {
  Container,
  Input,
  TransactionTypeContainer,
  TransactionButton,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');
    onRequestClose();
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <Input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <TransactionButton
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </TransactionButton>
          <TransactionButton
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </TransactionButton>
        </TransactionTypeContainer>

        {/* TODO: Change to a selector component */}
        <Input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
