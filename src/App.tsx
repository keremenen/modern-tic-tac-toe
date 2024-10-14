import GameBoard from './components/game-board'
// import SettingsBoard from './components/settings-board'

function App() {
  return (
    <section className="flex w-full max-w-[327px] flex-col items-center gap-8">
      {/* <SettingsBoard /> */}
      <GameBoard />
    </section>
  )
}

export default App
