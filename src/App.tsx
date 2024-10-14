import GameWariants from "./components/game-wariants";
import Logo from "./components/logo";
import MarkPicker from "./components/mark-picker";

function App() {
  return (
    <section className="flex w-full max-w-[327px] flex-col gap-8">
      <Logo />
      <MarkPicker />
      <GameWariants />
    </section>
  );
}

export default App;
