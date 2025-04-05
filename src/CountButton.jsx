import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButton({ type, setQuantity, locked }) {
  const handleClick = (e) => {
    setQuantity((prevCount) => {
      if (type === 'minus') {
        let nextCount = prevCount - 1;
        return nextCount < 0 ? 0 : nextCount;
      } else {
        return prevCount + 1;
      }
    });
    // if the button stays focused after clicking it, when the user clicks spacebar, the button will be clicked again
    // that is the default behaviour, when in focus space bar clicks the button, which would cause bugs in our app
    // e.g. clicking the - button then hitting space bar would increase the count because of the listener in
    // Card and decrease the count by 1 again because the space bar would click the minus button again
    e.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === 'minus' ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
