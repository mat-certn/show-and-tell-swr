import "./App.css";
import { CatFact } from "./CatFact";
import { CatFactWithSWR } from "./CatFactWithSWR";

function App() {
  return (
    <>
      <CatFact />
      <CatFact />
      <CatFact />
      <hr />
      <CatFactWithSWR />
      <CatFactWithSWR />
      <CatFactWithSWR />
    </>
  );
}

export default App;
