import { useEffect, useState } from 'react';

// custom hooks are just functions that start with "use"
// and can use other hooks inside them
// they can be used to encapsulate logic that is reusable
// and can be shared across components

export const useQuantity = (initialVal) => {
  const [quantity, setQuantity] = useState(initialVal);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        if (!locked) {
          setQuantity(quantity + 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // useEffect cleanup function
    // to remove the event listener before the useEffect runs again
    // or when the component unmounts
    // in this case it prevents a memory leak
    // because we are adding an event listener to the window object
    // and if we don't remove it, it will keep adding event listeners
    // every time the component re-renders
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [quantity]);

  // example of getting something from an API in a side effect
  // that you only want to run once because its expensive
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setQuantity(data.products.length);
    };
    getProducts();
  }, []);

  return [quantity, setQuantity];
};
