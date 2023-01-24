const Child = ({ setState }) => {
  const number = 1;
  return (
    <div>
      <button onClick={() => setState(number)}>Click</button>
    </div>
  );
};

export default Child;
