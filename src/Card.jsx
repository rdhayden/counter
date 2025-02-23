import Title from './Title';
import ResetButton from './ResetButton';
import ButtonContainer from './ButtonContainer';
import Count from './Count';
import { useState } from 'react';

export default function Card() {
  const [count, setCount] = useState(3);
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} />
    </div>
  );
}
