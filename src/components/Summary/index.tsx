import { useContext } from 'react';
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContex';

import { Container, Card } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionsContext);
  
  return (
    <Container>
      <Card>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </Card>
      <Card>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong>R$ 1000,00</strong>
      </Card>
      <Card className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </Card>
    </Container>
  );
}
