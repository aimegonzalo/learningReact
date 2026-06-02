import "./App.css";
import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";
import { Turns } from "./components/Turns";

function App() {
  return (
    <>
      <main className="w-fit mx-auto text-center grid place-items-center pt-20">
        <section className="flex flex-col items-center gap-4 mb-0">
          <h1 className="title text-4xl font-bold text-white tracking-wide drop-shadow-lg pb-10">
            4 en línea
          </h1>
          <ResetButton />
        </section>
        <Board />
        <Turns />
      </main>
    </>
  );
}

export default App;
