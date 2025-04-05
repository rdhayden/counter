// {children} composition pattern
// allows us to pass any set of components as children
// in this case it allows us to add button components between <ButtonContainer> tags
// when we use ButtonContainer in Card.jsx
export default function ButtonContainer({ children }) {
  return <div className="button-container">{children}</div>;
}
