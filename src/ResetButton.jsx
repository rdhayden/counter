import { ResetIcon } from '@radix-ui/react-icons';

export default function ResetButton({ setQuantity }) {
  const handleClick = (e) => {
    setQuantity(0);
    // if the button stays focused after clicking it, when the user clicks spacebar, the button will be clicked again
    // that is the default behaviour, when in focus space bar clicks the button, which would cause bugs in our app
    // e.g. clicking the reset button then hitting space bar would increase the count because of the listener in
    // Card and return the count to 0 again because the space bar would click the reset button again afterwards
    e.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
