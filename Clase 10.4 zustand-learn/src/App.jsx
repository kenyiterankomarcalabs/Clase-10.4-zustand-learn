import useStore from "./store";

function App() {
  const { count, inc } = useStore();
  return (
    <>
      <p>{count}</p>
      <button onClick={inc}>Click</button>
    </>
  );
}

export default App;
