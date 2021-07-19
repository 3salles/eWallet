import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";


import { Container, Card } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === "deposit") {
        accumulator.deposits += transaction.amount;
        accumulator.total += transaction.amount;
      } else {
        accumulator.withdraws += transaction.amount;
        accumulator.total -= transaction.amount;
      }

      return accumulator;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <Card>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </Card>
      <Card className="withdraw-background">
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong> -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </Card>
      <Card className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </Card>
    </Container>
  );
}
