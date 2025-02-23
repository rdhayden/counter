import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButton({ type, setCount }) {
  const handleClick = () => {
    setCount((prevCount) => {
      if (type === 'minus') {
        let nextCount = prevCount - 1;
        return nextCount < 0 ? 0 : nextCount;
      } else {
        return prevCount + 1;
      }
    });
  };
  return (
    <button onClick={handleClick} className="count-btn">
      {type === 'minus' ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
