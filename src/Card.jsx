import Title from './Title';
import ResetButton from './ResetButton';
import ButtonContainer from './ButtonContainer';
import Count from './Count';
import CountButton from './CountButton';
import { LIMIT } from './constants';
import { useQuantity } from './hooks';

export default function Card() {
  const [quantity, setQuantity] = useQuantity(0);

  const locked = quantity == LIMIT ? true : false;

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
      <Title locked={locked} />
      <Count quantity={quantity} />
      <ResetButton setQuantity={setQuantity} />
      <ButtonContainer>
        <CountButton type={'minus'} setQuantity={setQuantity} locked={locked} />
        <CountButton type={'plus'} setQuantity={setQuantity} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
