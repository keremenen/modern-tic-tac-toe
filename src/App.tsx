import GameBoard from './components/game-board'
// import Modal from './components/modal'
// import SettingsBoard from './components/settings-board'

function App() {
  return (
    <section className="flex w-full max-w-[327px] flex-col items-center gap-8">
      {/* <div className="flex w-full max-w-[327px] flex-col items-center gap-8"> */}
      {/* <SettingsBoard /> */}
      <GameBoard />
      {/* </div> */}
      {/* <Modal /> */}
    </section>
  )
}

export default App
